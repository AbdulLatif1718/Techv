import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { openWindow } from '../../features/windows/windowSlice';

const DesktopIcon = ({ id, label, type, icon, position }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // On mobile, use single tap; on desktop, keep double-click
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) {
      dispatch(openWindow({
        id: `${type}-${Date.now()}`,
        type,
        position: { x: 10, y: 60 },
      }));
    }
  };

  const handleDoubleClick = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (!isMobile) {
      // Better positioning: center window on screen with slight offset from icon
      const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
      
      // Center the window, but offset slightly from icon position
      const centerX = screenWidth / 2 - 400; // 400 is half of default window width (800)
      const centerY = screenHeight / 2 - 300; // 300 is half of default window height (600)
      
      // Add slight cascade offset based on icon position
      const offsetX = Math.min(100, Math.max(-100, (position.x - screenWidth / 2) * 0.1));
      const offsetY = Math.min(100, Math.max(-100, (position.y - screenHeight / 2) * 0.1));
      
      dispatch(openWindow({
        id: `${type}-${Date.now()}`,
        type,
        position: {
          x: Math.max(50, centerX + offsetX),
          y: Math.max(60, centerY + offsetY),
        },
      }));
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer group pointer-events-auto touch-manipulation"
      style={{ position: 'absolute', left: position.x, top: position.y }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <motion.div
        className="w-20 h-20 xs:w-24 xs:h-24 sm:w-20 sm:h-20 md:w-20 md:h-20 flex items-center justify-center text-3xl xs:text-4xl sm:text-4xl md:text-5xl rounded-lg bg-black/30 backdrop-blur-sm border-2 border-transparent group-hover:border-green-400 active:border-green-400 transition-all duration-300"
        whileHover={{
          boxShadow: '0 0 30px rgba(34, 197, 94, 0.6), inset 0 0 20px rgba(34, 197, 94, 0.2)',
        }}
      >
        {icon}
      </motion.div>
      <motion.span
        className="mt-1 xs:mt-2 text-[10px] xs:text-xs sm:text-xs md:text-sm text-white font-medium text-center px-1.5 xs:px-2 py-0.5 xs:py-1 rounded bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

export default DesktopIcon;

