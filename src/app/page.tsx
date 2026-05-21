'use client';

import Hero from '@/components/Hero';
import ProblemSolvers from '@/components/ProblemSolvers';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { User } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ProblemSolvers />
      <ServicesSection />
      <WhyUsSection />
      
      {/* Community Section */}
      <section id="community" className="py-32 relative bg-tech-deep/10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-tech-accent font-bold tracking-widest uppercase text-sm mb-6">Our Collective</h3>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8">We Are TechVergers</h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-16">
              TechVergers are developers, researchers, creators, engineers, and innovators building the future through technology. Together, we are creating systems that empower businesses, communities, and the next generation of African innovators.
            </p>
            
            {/* Global Network Visual */}
            <div className="relative h-64 md:h-96 w-full glass rounded-[40px] overflow-hidden group">
               <div className="absolute inset-0 bg-tech-dark/40 backdrop-blur-sm"></div>
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
                          <User className="text-gray-500 group-hover:text-tech-accent transition-colors" size={32} />
                        </motion.div>
                    ))}
                  </div>
               </div>
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 glass-dark rounded-full border border-white/10 text-xs font-bold tracking-widest text-tech-accent animate-pulse-slow">
                  JOIN THE MOVEMENT
               </div>
            </div>

            <div className="mt-16">
              <Link href="/join">
                <button aria-label="Join the community" className="px-12 py-5 border border-tech-accent/30 glass hover:bg-tech-accent hover:text-tech-dark transition-all duration-500 rounded-full font-bold text-xl">
                  Join the Community
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join/Final CTA Section */}
      <section id="contact" className="py-40 relative overflow-hidden bg-tech-dark border-t border-white/5">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-grid"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-extrabold mb-6 text-white leading-tight">
                Ready to Build <br /> the <span className="text-tech-accent italic">Future?</span>
              </h2>
              <p className="text-gray-400 font-medium text-lg md:text-xl">
                Whether you&apos;re a business looking to adopt AI, an institution modernizing operations, or a visionary ready to innovate — TechVerge Africa is ready to help you move forward.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
              <Link href="/join">
                <button aria-label="Book a consultation" className="px-12 py-5 bg-tech-accent text-tech-dark font-bold rounded-full hover:bg-white transition-all text-xl w-full md:w-auto">
                  Book a Consultation
                </button>
              </Link>
              <Link href="/join">
                <button aria-label="Partner with us" className="px-12 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all text-xl w-full md:w-auto">
                  Partner With Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
