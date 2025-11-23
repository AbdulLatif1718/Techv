import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { openWindow } from '../../features/windows/windowSlice';
import { FaHome, FaInfoCircle, FaRocket, FaUsers, FaEnvelope, FaTerminal, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Dock = () => {
  const dispatch = useDispatch();
  const windows = useSelector((state) => state.windows.windows);
  const bootComplete = useSelector((state) => state.windows.bootComplete);

  const dockItems = [
    { id: 'home', icon: FaHome, label: 'Home', type: 'home' },
    { id: 'about', icon: FaInfoCircle, label: 'About', type: 'about' },
    { id: 'ventures', icon: FaRocket, label: 'Ventures', type: 'ventures' },
    { id: 'team', icon: FaUsers, label: 'Team', type: 'team' },
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
      className="fixed bottom-2 xs:bottom-3 sm:bottom-4 left-0 right-0 sm:left-1/2 sm:right-auto sm:transform sm:-translate-x-1/2 z-[999]   sm:max-w-4xl px-2 xs:px-4"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center justify-start sm:justify-center space-x-1 xs:space-x-2 bg-black/80 backdrop-blur-md border border-green-500/30 rounded-full px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 shadow-2xl overflow-x-auto scrollbar-hide w-full sm:w-auto sm:min-w-0">
        {/* App Icons */}
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isOpen = isWindowOpen(item.type);
          
          return (
            <motion.button
              key={item.id}
              className={`relative p-2 xs:p-2.5 sm:p-3 rounded-lg transition-all duration-300 touch-manipulation flex-shrink-0 ${
                isOpen
                  ? 'bg-green-500/30 text-green-400'
                  : 'text-white active:bg-green-500/20 active:text-green-400'
              }`}
              onClick={() => handleClick(item.type)}
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.9 }}
              title={item.label}
              aria-label={item.label}
            >
              <Icon className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5" />
              {isOpen && (
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full"
                  layoutId="activeIndicator"
                />
              )}
            </motion.button>
          );
        })}

        {/* Divider */}
        <div className="h-6 xs:h-8 w-px bg-green-500/30 mx-1 xs:mx-2 flex-shrink-0" />

        {/* Social Media Icons */}
        {socialItems.map((item) => {
          const Icon = item.icon;
          
          return (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative p-2 xs:p-2.5 sm:p-3 rounded-lg transition-all duration-300 touch-manipulation flex-shrink-0 text-white active:bg-green-500/20 ${item.color}`}
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.9 }}
              title={item.label}
              aria-label={item.label}
            >
              <Icon className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5" />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Dock;

