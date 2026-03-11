import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import DesktopIcon from './DesktopIcon';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const Desktop = ({ children }) => {
  const desktopRef = useRef(null);
  const bootComplete = useSelector((state) => state.windows.bootComplete);

  // Motion values for specialized smooth tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the glow effect
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Templates for styles
  const maskImage = useMotionTemplate`radial-gradient(ellipse at ${mouseX}px ${mouseY}px, black 40%, transparent 80%)`;
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (desktopRef.current) {
        const rect = desktopRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const handleTouchMove = (e) => {
      if (desktopRef.current && e.touches[0]) {
        const rect = desktopRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
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
  }, [bootComplete, mouseX, mouseY]);

  const desktopIcons = [
    { id: 'home', label: 'Home', type: 'home', icon: '🏠' },
    { id: 'infrastructure', label: 'Infrastructure', type: 'infrastructure', icon: '🏗️' },
    { id: 'platforms', label: 'Platforms', type: 'platforms', icon: '🤖' },
    { id: 'ecosystem', label: 'Ecosystem', type: 'ecosystem', icon: '🌍' },
    { id: 'about', label: 'About', type: 'about', icon: '📖' },
    { id: 'insights', label: 'Insights', type: 'insights', icon: '📚' },
    { id: 'partners', label: 'Partners', type: 'partners', icon: '🤝' },
    { id: 'contact', label: 'Contact', type: 'contact', icon: '✉️' },
  ];

  return (
    <div
      ref={desktopRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Base Gradient Layer */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black via-[#051005] to-[#0a200a]"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, #0a1f0a 0%, #000000 70%),
            linear-gradient(to bottom right, #000000 0%, #051005 50%, #000000 100%)
          `
        }}
      />

      {/* Grid Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage
        }}
      />

      {/* Cursor Light Effect */}
      <motion.div 
        className="absolute pointer-events-none w-[400px] h-[400px] rounded-full blur-[80px] opacity-20 z-0 bg-green-500"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          mixBlendMode: 'screen'
        }}
      />

      {/* Floating Data Nodes (simulated) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
         {[...Array(6)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-64 h-64 bg-green-500/10 rounded-full blur-3xl"
               animate={{
                 x: [Math.random() * 100, Math.random() * -100],
                 y: [Math.random() * 100, Math.random() * -100],
                 scale: [1, 1.5, 1],
               }}
               transition={{
                 duration: 15 + Math.random() * 10,
                 repeat: Infinity,
                 repeatType: "reverse",
                 ease: "linear"
               }}
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
               }}
             />
         ))}
      </div>

      {/* African Tech Motif Overlay (Subtle) */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] opacity-5 pointer-events-none">
        <Image src="/images/logotva.svg" fill alt="Background Logo" className="object-contain grayscale" />
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
            // Responsive grid: 3 cols layout
            const cols = 3; 
            const iconWidth = 120;
            const iconHeight = 120;
            const startX = 20;
            const startY = 80; // Pushed down a bit for top bar
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

