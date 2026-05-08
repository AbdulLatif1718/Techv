'use client';

import Hero from '@/components/Hero';
import VisionSection from '@/components/VisionSection';
import WhatWeBuild from '@/components/WhatWeBuild';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <VisionSection />
      <WhatWeBuild />
      
      {/* Research Section - Cinematic Placeholder */}
      <section id="research" className="py-32 relative bg-tech-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-tech-glow font-bold tracking-widest uppercase text-sm mb-4">The Lab</h3>
            <h2 className="text-4xl md:text-5xl font-bold">Research & Innovation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'AI RESEARCH', value: 'Offline-First neural networks for edge devices.' },
              { label: 'ROBOTICS', value: 'Low-cost autonomous systems for agriculture.' },
              { label: 'INFRASTRUCTURE', value: 'Self-healing mesh networks for rural areas.' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-10 rounded-3xl glass-dark border border-white/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 blur-xl group-hover:opacity-40 transition-opacity">
                   <div className="w-20 h-20 bg-tech-glow rounded-full"></div>
                </div>
                <h4 className="text-tech-glow font-bold text-xs tracking-widest mb-4">{stat.label}</h4>
                <p className="text-xl font-bold text-gray-200 line-clamp-2">{stat.value}</p>
                <div className="mt-8 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                  <span>LATENCY: 12MS</span>
                  <span>SYNC: ACTIVE</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-32 relative bg-tech-deep/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">We Are TechVergers.</h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-16">
              A global collective of developers, researchers, students, and innovators working to ensure technology reaches everyone.
            </p>
            
            {/* Global Network Visual Placeholder */}
            <div className="relative h-64 md:h-96 w-full glass rounded-[40px] overflow-hidden group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.1)_0%,transparent_70%)]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full flex flex-wrap gap-4 p-10 justify-center">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          opacity: [0.3, 1, 0.3],
                          scale: [0.95, 1, 0.95]
                        }}
                        transition={{ 
                          duration: Math.random() * 3 + 2, 
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl md:text-3xl"
                      >
                        👤
                      </motion.div>
                    ))}
                  </div>
               </div>
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 glass-dark rounded-full border border-white/10 text-xs font-bold tracking-widest text-tech-accent animate-pulse-slow">
                  LIVE STATUS: 4,291 CONNECTIONS
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Section */}
      <section id="careers" className="py-32 bg-tech-accent text-tech-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 italic">Join the people building the future.</h2>
            <p className="text-tech-dark/70 font-semibold text-lg">Engineering, Research, Internships, Partnerships.</p>
          </div>
          <button className="px-12 py-5 bg-tech-dark text-white font-bold rounded-full hover:scale-105 transition-all text-xl shadow-2xl">
            View Roles
          </button>
        </div>
      </section>
    </div>
  );
}
