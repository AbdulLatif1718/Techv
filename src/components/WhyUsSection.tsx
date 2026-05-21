'use client';

import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-32 relative overflow-hidden bg-tech-dark">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h3 className="text-tech-glow font-bold tracking-widest uppercase text-sm mb-6">Why TechVerge Africa</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Built for African Realities. <br />
              <span className="text-white opacity-90 border-b-2 border-tech-accent/20">Designed for Global Impact.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We understand the challenges of connectivity, infrastructure, access, and scalability. That’s why we build practical, intelligent systems that work in real-world environments — not just ideal conditions.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-3xl glass-dark border border-white/5 relative overflow-hidden group hover:border-tech-accent/20 transition-all duration-500"
            >
               <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Target size={60} strokeWidth={1} className="text-tech-accent" />
               </div>
               <h4 className="text-xs font-extrabold tracking-[0.2em] text-tech-accent uppercase mb-4">Our Mission</h4>
               <p className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                 To make advanced technology accessible, useful, and impactful for everyone.
               </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Connectivity', value: 'Offline-First' },
              { label: 'Access', value: 'Low-Resource' },
              { label: 'Scalability', value: 'Enterprise-Ready' },
              { label: 'Impact', value: 'Community-Driven' }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-[2rem] glass-dark border border-white/5 flex flex-col justify-between aspect-square group hover:border-tech-accent/30 transition-all">
                <div className="text-tech-accent text-3xl font-mono opacity-30 group-hover:opacity-60 transition-opacity">0{i+1}</div>
                <div>
                  <div className="text-xs text-gray-500 font-extrabold uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="text-lg md:text-xl font-extrabold text-white">{stat.value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
