'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-48 pb-20 md:pt-56">
      {/* Background Cinematic Visuals */}
      <div className="absolute inset-0 z-0">
        {/* Animated AI Grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Subtle Depth Overlay (Solid variation) */}
        <div className="absolute inset-0 bg-tech-dark/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0, 
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
              opacity: Math.random() * 0.3
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: Math.random() * 10 + 15, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-tech-accent/40 rounded-full"
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
          <h1 className="text-[clamp(1.5rem,10vw,2.8rem)] md:text-[clamp(2.8rem,8vw,4.8rem)] lg:text-[clamp(4.5rem,7vw,6.5rem)] font-extrabold leading-[1.1] mb-10 tracking-tighter">
            Building AI & <br />
            <span className="text-white">
              Infrastructure.
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed opacity-80">
            Empowering businesses and communities through intelligent systems, automation, and advanced digital backbones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link href="/join">
              <button aria-label="Work with us" className="px-12 py-5 bg-tech-accent text-tech-dark font-bold rounded-full hover:bg-white transition-all duration-500 border border-tech-accent/10 shadow-[0_10px_30px_rgba(20,184,198,0.15)]">
                Work With Us
              </button>
            </Link>
            <Link href="#about">
              <button aria-label="Explore our vision" className="px-12 py-5 border border-white/10 glass-dark hover:bg-white/5 font-bold rounded-full transition-all duration-500">
                Explore Our Vision
              </button>
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-6 text-[10px] md:text-xs font-bold tracking-[0.3em] text-gray-500 uppercase"
          >
            {[
              "AI Solutions",
              "Digital Infrastructure",
              "Robotics",
              "Training",
              "Intelligent Systems"
            ].map((text, i) => (
              <div key={text} className="flex items-center gap-6">
                <span>{text}</span>
                {i < 4 && <span className="w-1 h-1 bg-tech-accent/30 rounded-full"></span>}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-gray-600 font-bold">Scroll</span>
        <div className="w-[1px] h-16 bg-tech-accent/20"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
