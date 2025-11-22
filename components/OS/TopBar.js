import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBell, FaPowerOff } from 'react-icons/fa';
import Image from 'next/image';

const TopBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const handlePowerClick = () => {
    if (confirm('Are you sure you want to shut down TechVerge OS?')) {
      // Could implement actual shutdown logic here
      window.location.reload();
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-10 xs:h-11 sm:h-12 bg-black/80 backdrop-blur-md border-b border-green-500/30 z-[1000] flex items-center justify-between px-2 xs:px-3 sm:px-4 md:px-6"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3">
        <div className="w-10 h-10 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative">
          <Image
            src="/images/logotva.svg"
            alt="TechVerge Africa"
            fill
            className="object-contain"
          />
        </div>
        <span className="text-green-400 font-bold text-xs xs:text-sm sm:text-sm md:text-base hidden xs:inline">
          TechVerge OS
        </span>
      </div>

      {/* Time */}
      <div className="flex flex-col items-center">
        <motion.span
          className="text-white font-mono text-[10px] xs:text-xs sm:text-xs md:text-sm"
          key={currentTime.getTime()}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {formatTime(currentTime)}
        </motion.span>
        <span className="text-green-400 text-[9px] xs:text-xs hidden sm:inline">
          {formatDate(currentTime)}
        </span>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
        {/* Notifications */}
        <div className="relative">
          <motion.button
            className="text-white hover:text-green-400 transition-colors relative touch-manipulation"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Notifications"
          >
            <FaBell className="w-4 h-4 xs:w-5 xs:h-5" />
            <span className="absolute -top-0.5 -right-0.5 xs:-top-1 xs:-right-1 w-1.5 h-1.5 xs:w-2 xs:h-2 bg-red-500 rounded-full animate-pulse" />
          </motion.button>

          {showNotifications && (
            <motion.div
              className="absolute right-0 top-10 xs:top-11 sm:top-12 w-56 xs:w-64 bg-black/90 backdrop-blur-md border border-green-500/30 rounded-lg p-3 xs:p-4 shadow-xl z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-green-400 font-bold mb-2 text-sm xs:text-base">Notifications</h3>
              <div className="text-white text-xs xs:text-sm space-y-2">
                <p>Welcome to TechVerge Africa OS</p>
                <p className="text-gray-400 text-[10px] xs:text-xs">System ready</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Power */}
        <motion.button
          className="text-white hover:text-red-400 transition-colors touch-manipulation"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePowerClick}
          aria-label="Power"
        >
          <FaPowerOff className="w-4 h-4 xs:w-5 xs:h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TopBar;

