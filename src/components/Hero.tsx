'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Cinematic Visuals */}
      <div className="absolute inset-0 z-0">
        {/* Animated AI Grid */}
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-tech-accent/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-tech-glow/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-dark/50 to-tech-dark"></div>
      </div>

      {/* Floating Robotics/Particles Placeholder (Using CSS for now) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0, 
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-tech-accent rounded-full"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-tech-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-tech-accent/30"></span>
            Building the Future
            <span className="w-12 h-[1px] bg-tech-accent/30"></span>
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Building the Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-tech-accent to-tech-glow">
              for Everyone.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            TechVergers are building digital infrastructure, AI, and robotics systems 
            that empower Africa and the world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-4 bg-tech-accent text-tech-dark font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] hover:scale-105 transition-all duration-300">
              Explore Our Vision
            </button>
            <button className="px-10 py-4 border border-white/20 glass hover:bg-white/5 font-bold rounded-full transition-all duration-300">
              Join the Movement
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-tech-accent to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
