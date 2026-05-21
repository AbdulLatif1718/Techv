'use client';

import { motion } from 'framer-motion';
import { 
  Cpu, 
  Bot, 
  Globe, 
  TestTube, 
  GraduationCap, 
  BrainCircuit, 
  Smartphone, 
  Zap, 
  ArrowRight 
} from 'lucide-react';

const services = [
  { title: 'Artificial Intelligence', icon: Cpu, desc: 'Developing neural networks and LLMs optimized for diverse environments.' },
  { title: 'Robotics', icon: Bot, desc: 'Creating autonomous systems for industrial and agricultural transformation.' },
  { title: 'Digital Infrastructure', icon: Globe, desc: 'Building the connectivity backbone for the next billion users.' },
  { title: 'Research Labs', icon: TestTube, desc: 'Pushing the boundaries of theoretical and applied computer science.' },
  { title: 'Education Tech', icon: GraduationCap, desc: 'Intelligent platforms making knowledge accessible to everyone.' },
  { title: 'Intelligent Systems', icon: BrainCircuit, desc: 'Smart algorithms that solve complex real-world challenges.' },
  { title: 'Smart Platforms', icon: Smartphone, desc: 'The digital ecosystems of the future, born in Africa.' },
  { title: 'Edge Computing', icon: Zap, desc: 'High-performance processing at the source of data generation.' }
];

const WhatWeBuild = () => {
  return (
    <section className="py-32 bg-tech-deep/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-tech-accent font-bold tracking-widest uppercase text-sm mb-4"
          >
            Engineering Excellence
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            What We Build
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl glass border border-white/5 hover:border-tech-accent/30 hover:shadow-[0_0_40px_rgba(0,242,255,0.1)] transition-all group duration-500"
            >
              <div className="mb-6 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110 duration-500">
                <item.icon size={40} strokeWidth={1.5} className="text-tech-accent" />
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-tech-accent transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-xs font-bold text-tech-accent tracking-widest uppercase flex items-center gap-2">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
