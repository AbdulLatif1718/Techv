import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';

const AdvancedToggle = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group relative flex items-center gap-4 px-6 sm:px-10 py-4 sm:py-5 glass-morphism rounded-xl border border-emerald-500/20 hover:border-emerald-500/60 overflow-hidden transition-all duration-500"
    >
      {/* Animated Glow Backdrop */}
      <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-500" />
      
      <div className="relative z-10 flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all">
          <FaTerminal className="text-xl animate-pulse" />
        </div>
        
        <div className="flex flex-col items-start">
          <span className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-[0.3em] mb-1">
            Access System
          </span>
          <span className="text-lg font-bold text-white tracking-wide">
            ADVANCED OS MODE
          </span>
        </div>
      </div>
      
      {/* Little corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-emerald-500/40" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-emerald-500/40" />
    </motion.button>
  );
};

export default AdvancedToggle;
