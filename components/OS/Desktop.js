import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import DesktopIcon from './DesktopIcon';
import { useSelector } from 'react-redux';

const Desktop = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const desktopRef = useRef(null);
  const bootComplete = useSelector((state) => state.windows.bootComplete);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (desktopRef.current) {
        const rect = desktopRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const handleTouchMove = (e) => {
      if (desktopRef.current && e.touches[0]) {
        const rect = desktopRef.current.getBoundingClientRect();
        const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
        const y = ((e.touches[0].clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    if (bootComplete) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [bootComplete]);

  const desktopIcons = [
    { id: 'home', label: 'Home', type: 'home', icon: '🏠' },
    { id: 'about', label: 'About Us', type: 'about', icon: '📖' },
    { id: 'ventures', label: 'Our Ventures', type: 'ventures', icon: '🚀' },
    { id: 'team', label: 'Team', type: 'team', icon: '👥' },
    { id: 'news', label: 'News', type: 'news', icon: '📰' },
    { id: 'contact', label: 'Contact', type: 'contact', icon: '✉️' },
  ];

  return (
    <div
      ref={desktopRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-green-950 via-black to-green-900"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
      }}
    >
      {/* Animated Wallpaper Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 197, 94, 0.03) 2px, rgba(34, 197, 94, 0.03) 4px),
              repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(34, 197, 94, 0.03) 2px, rgba(34, 197, 94, 0.03) 4px)
            `,
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      </div>

      {/* African Tech Motif Overlay */}
      <div className="absolute inset-0 opacity-10">
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <defs>
            <pattern id="african-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="rgba(34, 197, 94, 0.3)" />
              <path d="M20,50 L80,50 M50,20 L50,80" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#african-pattern)" />
        </motion.svg>
      </div>

      {/* Desktop Icons */}
      {bootComplete && (
        <motion.div
          className="absolute inset-0 p-4 xs:p-6 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {desktopIcons.map((icon, index) => {
            // Responsive grid: 2 cols on mobile, 3 on tablet, 4+ on desktop
            // Use CSS-based responsive positioning instead of JS
            const cols = 3; // Will be overridden by responsive classes
            const iconWidth = 120;
            const iconHeight = 120;
            const startX = 20;
            const startY = 60;
            const x = (index % cols) * iconWidth + startX;
            const y = Math.floor(index / cols) * iconHeight + startY;
            
            return (
              <DesktopIcon
                key={icon.id}
                id={icon.id}
                label={icon.label}
                type={icon.type}
                icon={icon.icon}
                position={{ x, y }}
              />
            );
          })}
        </motion.div>
      )}

      {/* Window Container */}
      <div className="absolute inset-0 pointer-events-none">
        {children}
      </div>
    </div>
  );
};

export default Desktop;

