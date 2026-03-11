import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { openWindow } from '../../features/windows/windowSlice';
import { FaHome, FaInfoCircle, FaBuilding, FaRobot, FaGlobe, FaBookOpen, FaHandshake, FaEnvelope, FaTerminal, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Dock = () => {
  const dispatch = useDispatch();
  const windows = useSelector((state) => state.windows.windows);
  const bootComplete = useSelector((state) => state.windows.bootComplete);

  const dockItems = [
    { id: 'home', icon: FaHome, label: 'Home', type: 'home' },
    { id: 'infrastructure', icon: FaBuilding, label: 'Infrastructure', type: 'infrastructure' },
    { id: 'platforms', icon: FaRobot, label: 'Platforms', type: 'platforms' },
    { id: 'ecosystem', icon: FaGlobe, label: 'Ecosystem', type: 'ecosystem' },
    { id: 'insights', icon: FaBookOpen, label: 'Insights', type: 'insights' },
    { id: 'contact', icon: FaEnvelope, label: 'Contact', type: 'contact' },
    { id: 'terminal', icon: FaTerminal, label: 'Terminal', type: 'terminal' },
  ];

  const socialItems = [
    { 
      id: 'facebook', 
      icon: FaFacebookF, 
      label: 'Facebook', 
      url: 'https://web.facebook.com/profile.php?id=61564878252192',
      color: 'hover:text-blue-500'
    },
    { 
      id: 'twitter', 
      icon: FaTwitter, 
      label: 'Twitter', 
      url: 'https://x.com/TechvergeAfrica',
      color: 'hover:text-blue-400'
    },
    { 
      id: 'linkedin', 
      icon: FaLinkedinIn, 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/techvergeafrica/',
      color: 'hover:text-blue-600'
    },
    { 
      id: 'instagram', 
      icon: FaInstagram, 
      label: 'Instagram', 
      url: 'https://www.instagram.com/techvergeafrica',
      color: 'hover:text-pink-500'
    },
  ];

  const handleClick = (type) => {
    const existingWindow = Object.values(windows).find(w => w.type === type);
    
    if (existingWindow) {
      // Restore existing window (handled in openWindow action)
      dispatch(openWindow({
        id: existingWindow.id,
        type: existingWindow.type,
        position: existingWindow.position,
      }));
    } else {
      // Open new window with better positioning
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      let position;
      
      if (isMobile) {
        // On mobile, center the window
        position = { x: 10, y: 60 };
      } else {
        // On desktop, cascade windows or center them nicely
        const existingWindows = Object.values(windows);
        const windowCount = existingWindows.length;
        
        // Cascade effect: offset each new window
        const offsetX = 30 * (windowCount % 5);
        const offsetY = 30 * Math.floor(windowCount / 5);
        
        // Center with slight offset for cascade
        const centerX = (typeof window !== 'undefined' ? window.innerWidth : 1200) / 2 - 400;
        const centerY = (typeof window !== 'undefined' ? window.innerHeight : 800) / 2 - 300;
        
        position = {
          x: Math.max(50, centerX + offsetX),
          y: Math.max(60, centerY + offsetY),
        };
      }
      
      dispatch(openWindow({
        id: `${type}-${Date.now()}`,
        type,
        position,
      }));
    }
  };

  const isWindowOpen = (type) => {
    return Object.values(windows).some(w => w.type === type && !w.minimized);
  };

  if (!bootComplete) return null;

  return (
    <motion.div
      className="fixed bottom-4 xs:bottom-6 left-0 right-0 sm:left-1/2 sm:right-auto sm:transform sm:-translate-x-1/2 z-[999] sm:max-w-4xl px-4 flex justify-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
    >
      <div className="flex items-center justify-center space-x-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-x-auto scrollbar-hide w-full max-w-fit">
        {/* App Icons */}
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isOpen = isWindowOpen(item.type);
          
          return (
            <motion.button
              key={item.id}
              className={`relative p-3 rounded-xl transition-all duration-200 group ${
                isOpen
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              onClick={() => handleClick(item.type)}
              whileHover={{ 
                scale: 1.2, 
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              title={item.label}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              {isOpen && (
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)]"
                  layoutId="activeIndicator"
                />
              )}
              {/* Tooltip on Hover */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.label}
              </span>
            </motion.button>
          );
        })}

        {/* Divider */}
        <div className="h-8 w-px bg-white/10 mx-2 flex-shrink-0" />

        {/* Social Media Icons */}
        {socialItems.map((item) => {
          const Icon = item.icon;
          
          return (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative p-3 rounded-xl transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/5 ${item.color}`}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              title={item.label}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Dock;

