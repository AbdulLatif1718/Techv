'use client';

import { motion } from 'framer-motion';

const VisionSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-tech-accent font-bold tracking-widest uppercase text-sm mb-6">Our Vision</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">
              Technology Should <br />
              <span className="text-white">Reach Everyone.</span>
            </h2>
            
            <div className="space-y-8">
              {[
                { title: 'AI for underserved communities', desc: 'Bringing intelligent systems to regions without consistent connectivity.' },
                { title: 'Offline AI systems', desc: 'Developing edge computing solutions that run without high-speed internet.' },
                { title: 'Robotics for Africa', desc: 'Custom robotics designed for African agriculture, logistics, and healthcare.' },
                { title: 'Future-focused innovation', desc: 'Not just catching up, but leading the global technological frontier.' }
              ].map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-tech-accent group-hover:bg-tech-accent/10 group-hover:border-tech-accent/50 transition-all duration-300">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold mb-2 group-hover:text-tech-accent transition-colors">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass border border-white/10 relative">
              {/* Dynamic Animated Content Placeholder */}
              <div className="absolute inset-0 bg-tech-glow/5 animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                   <motion.div 
                     animate={{ rotate: 360 }} 
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0 border-2 border-dashed border-tech-accent/30 rounded-full"
                   ></motion.div>
                   <motion.div 
                     animate={{ rotate: -360 }} 
                     transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-4 border-2 border-dashed border-tech-glow/30 rounded-full"
                   ></motion.div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-tech-accent rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(0,242,255,0.4)]">
                         <div className="w-8 h-8 bg-tech-dark rounded rotate-[-45deg]"></div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Float Tags */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 glass px-6 py-3 rounded-full border border-tech-accent/20"
              >
                <span className="text-xs font-bold text-tech-accent tracking-tighter">AI AGENTS</span>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-10 glass px-6 py-3 rounded-full border border-tech-glow/20"
              >
                <span className="text-xs font-bold text-tech-glow tracking-tighter">ROBOTICS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
