import React from 'react';
import { motion } from 'framer-motion';

const ModernHero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 md:pt-32 md:pb-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center z-10 max-w-6xl w-full"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-[10px] font-mono mb-8 md:mb-12 tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(16,185,129,0.1)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Infrastructure v4.0.2 // Initialized
        </motion.div>

        <h1 className="text-[2.2rem] leading-[1.15] sm:text-6xl md:text-[80px] lg:text-[100px] xl:text-[120px] font-black tracking-tight mb-8 md:mb-12 md:leading-[0.9] text-white">
          <span className="block opacity-40 font-light text-lg sm:text-4xl md:text-5xl uppercase tracking-[0.1em] mb-2 md:mb-0">BUILDING THE</span>
          <span className="bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent italic mr-2 md:mr-4">FOUNDATIONAL</span>
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent text-glow uppercase">Systems</span>
        </h1>

        <p className="text-base md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 md:mb-16 font-light leading-relaxed tracking-tight px-4 md:px-0">
          TechVerge Africa builds the underlying layers required for Africa&apos;s digital sovereignty—from AI-native talent pools to sovereign data systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <motion.button 
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/contact'}
            className="group relative w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-emerald-600 text-white text-sm sm:text-base font-bold rounded-xl transition-all border-glow overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="relative uppercase">Deploy Infrastructure</span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.02, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 glass-morphism text-white text-sm sm:text-base font-bold rounded-xl hover:bg-white/5 transition-all border border-white/10 uppercase"
          >
            View Ecosystem
          </motion.button>
        </div>
      </motion.div>

      {/* Engineering Watermark */}
      <div className="absolute bottom-12 left-12 hidden xl:block">
        <div className="flex items-center gap-4 text-[10px] font-mono text-emerald-500/20 tracking-[0.3em]">
          <div className="w-12 h-[1px] bg-emerald-500/20" />
          <span>SYS_ORIGIN: 09.0820N / 08.6753E</span>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
