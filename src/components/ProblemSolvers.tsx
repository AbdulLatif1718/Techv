'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe, ArrowRight } from 'lucide-react';

import TechVisual from './TechVisual';

const ProblemSolvers = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-tech-dark">
      {/* Subtle Background Decoration (Solid) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-tech-accent/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-tech-accent/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h3 className="text-tech-accent font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-tech-accent"></span>
              What We Do
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Technology That <br />
              <span className="text-white opacity-80 italic">
                Solves Real Problems.
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl opacity-80">
              At TechVerge Africa, we build intelligent systems that help organizations modernize, automate, and scale. From AI-powered business tools to digital infrastructure and workforce training, we are preparing Africa for the next generation of technology.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Link href="#why-us">
                <button aria-label="Explore our vision" className="text-tech-accent font-bold tracking-widest uppercase text-xs flex items-center gap-3 group transition-all">
                  Our Vision <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>

            <div className="mt-12 flex flex-wrap gap-4">
              {['Modernize', 'Automate', 'Scale'].map((tag) => (
                <div key={tag} className="px-6 py-2 rounded-full border border-white/10 glass-dark text-xs font-bold tracking-widest uppercase text-gray-500">
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="flex-1 relative w-full h-[400px] md:h-[500px]"
          >
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden glass border border-white/5 p-1 transition-all duration-700 hover:border-tech-accent/20">
               <div className="h-full w-full bg-tech-dark/40 rounded-[2.4rem] relative overflow-hidden flex flex-col items-center justify-center">
                  <div className="absolute inset-0 z-0">
                    <TechVisual />
                  </div>
                  <div className="relative z-10 text-center pointer-events-none mt-[200px]">
                    <div className="text-[10px] font-bold tracking-[0.4em] text-tech-accent animate-pulse uppercase">SYSTEM_OPTIMIZED: ACTIVE</div>
                  </div>
               </div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute -bottom-8 -left-8 p-6 glass-dark rounded-2xl border border-white/10 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-tech-accent/10 flex items-center justify-center text-tech-accent font-bold">
                  99%
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest">Efficiency</div>
                  <div className="text-sm font-extrabold text-white">Advanced Automation</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolvers;
