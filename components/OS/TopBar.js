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
      className="fixed top-2 xs:top-3 sm:top-4 left-2 right-2 xs:left-3 xs:right-3 sm:left-4 sm:right-4 h-11 bg-black/60 backdrop-blur-xl border border-white/10 z-[1000] flex items-center justify-between px-4 rounded-xl shadow-lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 relative opacity-90">
          <Image
            src="/images/logotva.svg"
            alt="TechVerge Africa"
            fill
            className="object-contain"
          />
        </div>
        <span className="text-white/90 font-medium text-sm hidden xs:inline tracking-wide">
          TechVerge OS <span className="text-white/30 text-xs ml-1">v2.0</span>
        </span>
      </div>

      {/* Time */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-4">
         <span className="text-white/80 text-xs font-mono">{formatDate(currentTime)}</span>
         <span className="w-1 h-1 bg-white/20 rounded-full"></span>
         <motion.span
          className="text-white font-mono text-sm tracking-widest"
          key={currentTime.getTime()}
        >
          {formatTime(currentTime)}
        </motion.span>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        {/* Connection Status (Fake) */}
         <div className="hidden sm:flex items-center space-x-2 mr-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            <span className="text-[10px] text-white/50 uppercase tracking-wider">Online</span>
         </div>

        {/* Notifications */}
        <div className="relative">
          <motion.button
            className="text-white/70 hover:text-white transition-colors relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Notifications"
          >
            <FaBell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-black" />
          </motion.button>

          {showNotifications && (
            <motion.div
              className="absolute right-0 top-12 w-64 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-xl p-4 shadow-2xl z-50 ring-1 ring-white/5"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-medium text-sm">Notifications</h3>
                  <span className="text-[10px] text-white/40">Clear All</span>
              </div>
              <div className="space-y-3">
                <div className="flex space-x-3 items-start p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
                   <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                   <div>
                       <p className="text-xs text-white leading-tight">System Update Complete</p>
                       <p className="text-[10px] text-white/40 mt-1">TechVerge OS v2.0 is live.</p>
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Power */}
        <motion.button
          className="text-white/70 hover:text-red-400 transition-colors"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePowerClick}
          aria-label="Power"
        >
          <FaPowerOff className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TopBar;

