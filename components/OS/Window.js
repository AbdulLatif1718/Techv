import { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { 
  closeWindow, 
  minimizeWindow, 
  maximizeWindow, 
  setActiveWindow,
  updateWindowPosition,
  updateWindowSize,
} from '../../features/windows/windowSlice';
import { FaTimes, FaMinus, FaSquare, FaWindowMaximize } from 'react-icons/fa';

const Window = ({ id, title, children, position, size, maximized, zIndex }) => {
  const dispatch = useDispatch();
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const x = useMotionValue(position.x);
  const y = useMotionValue(position.y);
  const width = useMotionValue(size.width);
  const height = useMotionValue(size.height);

  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position.x, position.y, x, y]);

  useEffect(() => {
    width.set(size.width);
    height.set(size.height);
  }, [size.width, size.height, width, height]);

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls') || e.target.closest('.resize-handle') || e.target.closest('button')) {
      return;
    }
    dispatch(setActiveWindow(id));
    if (!maximized && !isMobile) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleTouchStart = (e) => {
    if (e.target.closest('.window-controls') || e.target.closest('.resize-handle') || e.target.closest('button')) {
      return;
    }
    dispatch(setActiveWindow(id));
    if (!maximized && isMobile && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging && !maximized && !isMobile) {
        const newX = e.clientX - dragStart.x;
        const newY = e.clientY - dragStart.y;
        
        // Constrain to viewport
        const maxX = window.innerWidth - size.width;
        const maxY = window.innerHeight - 100; // Account for top bar
        
        const constrainedX = Math.max(0, Math.min(newX, maxX));
        const constrainedY = Math.max(48, Math.min(newY, maxY));
        
        x.set(constrainedX);
        y.set(constrainedY);
        
        dispatch(updateWindowPosition({
          id,
          position: { x: constrainedX, y: constrainedY },
        }));
      } else if (isResizing && !maximized && !isMobile) {
        const newWidth = Math.max(400, resizeStart.width + (e.clientX - resizeStart.x));
        const newHeight = Math.max(300, resizeStart.height + (e.clientY - resizeStart.y));
        
        width.set(newWidth);
        height.set(newHeight);
        
        dispatch(updateWindowSize({
          id,
          size: { width: newWidth, height: newHeight },
        }));
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging && !maximized && isMobile && e.touches.length === 1) {
        e.preventDefault();
        const newX = e.touches[0].clientX - dragStart.x;
        const newY = e.touches[0].clientY - dragStart.y;
        
        // Constrain to viewport
        const maxX = window.innerWidth - size.width;
        const maxY = window.innerHeight - 100;
        
        const constrainedX = Math.max(0, Math.min(newX, maxX));
        const constrainedY = Math.max(48, Math.min(newY, maxY));
        
        x.set(constrainedX);
        y.set(constrainedY);
        
        dispatch(updateWindowPosition({
          id,
          position: { x: constrainedX, y: constrainedY },
        }));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      if (isMobile) {
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);
        return () => {
          window.removeEventListener('touchmove', handleTouchMove);
          window.removeEventListener('touchend', handleTouchEnd);
        };
      } else {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUp);
        };
      }
    }
  }, [isDragging, isResizing, dragStart, resizeStart, maximized, size, id, dispatch, x, y, width, height, isMobile]);

  const handleResizeStart = (e) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    });
  };

  const handleClose = () => {
    dispatch(closeWindow(id));
  };

  const handleMinimize = () => {
    dispatch(minimizeWindow(id));
  };

  const handleMaximize = () => {
    dispatch(maximizeWindow(id));
  };

  // On mobile, always maximize windows
  const shouldMaximize = isMobile || maximized;
  
  const windowStyle = shouldMaximize
    ? {
        x: 0,
        y: isMobile ? 40 : 48,
        width: typeof window !== 'undefined' ? window.innerWidth : '100%',
        height: typeof window !== 'undefined' ? (window.innerHeight - (isMobile ? 40 : 48)) : '100%',
      }
    : {
        x,
        y,
        width,
        height,
      };

  return (
    <motion.div
      className="absolute pointer-events-auto"
      style={{
        zIndex,
        ...windowStyle,
      }}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="w-full h-full bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden ring-1 ring-white/5">
        {/* Window Header */}
        <div 
          className={`window-controls flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5 ${!isMobile && !maximized ? 'cursor-move' : ''}`}
          onMouseDown={(e) => {
            if (!maximized && !isMobile) {
              dispatch(setActiveWindow(id));
              setIsDragging(true);
              setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y,
              });
            }
          }}
        >
          <div className="flex items-center space-x-3">
             {/* MacOS Style Buttons - Always Visible Icons */}
             <div className="flex space-x-2">
                <button
                  onClick={handleClose}
                  className="w-5 h-5 rounded-full bg-red-500 hover:bg-red-600 transition-all flex items-center justify-center group active:scale-90"
                  title="Close"
                >
                  <FaTimes className="w-2.5 h-2.5 text-red-900 opacity-70 group-hover:opacity-100" />
                </button>
                <button
                  onClick={handleMinimize}
                  className="w-5 h-5 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-all flex items-center justify-center group active:scale-90"
                  title="Minimize"
                >
                   <FaMinus className="w-2.5 h-2.5 text-yellow-900 opacity-70 group-hover:opacity-100" />
                </button>
                {!isMobile && (
                  <button
                    onClick={handleMaximize}
                    className="w-5 h-5 rounded-full bg-green-500 hover:bg-green-600 transition-all flex items-center justify-center group active:scale-90"
                    title={maximized ? "Restore" : "Maximize"}
                  >
                     {maximized ? (
                      <FaWindowMaximize className="w-2.5 h-2.5 text-green-900 opacity-70 group-hover:opacity-100" />
                     ) : (
                      <FaSquare className="w-2.5 h-2.5 text-green-900 opacity-70 group-hover:opacity-100" />
                     )}
                  </button>
                )}
             </div>
            <span className="text-gray-300 font-medium text-sm select-none pl-2">{title}</span>
          </div>
        </div>

        {/* Window Content */}
        <div className="flex-1 overflow-auto overscroll-contain scrollbar-hide pb-20 sm:pb-24 relative" style={{ maxHeight: shouldMaximize ? `calc(100vh - ${isMobile ? 40 : 48}px - 40px)` : 'none' }}>
           {/* Inner Gradient Shine */}
           <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 pointer-events-none" />
          <div className="pb-4 h-full">
            {children}
          </div>
        </div>

        {/* Resize Handle - Only on desktop and non-maximized */}
        {!isMobile && !maximized && (
          <div
            className="resize-handle absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize"
            onMouseDown={handleResizeStart}
            style={{
              background: 'linear-gradient(135deg, transparent 0%, transparent 40%, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 0.2) 60%, transparent 60%)',
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Window;

