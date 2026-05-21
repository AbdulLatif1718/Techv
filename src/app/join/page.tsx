'use client';

import { motion } from 'framer-motion';
import { Users, Cpu, Globe, Award } from 'lucide-react';
import JoinForm from '@/components/JoinForm';
import Image from 'next/image';

const benefits = [
  {
    icon: <Users size={24} />,
    title: "Global Network",
    description: "Connect with world-class engineers, researchers, and innovators across Africa and beyond."
  },
  {
    icon: <Cpu size={24} />,
    title: "Early Access",
    description: "Be the first to test our new AI systems, robotics kits, and infrastructure protocols."
  },
  {
    icon: <Globe size={24} />,
    title: "Impact Projects",
    description: "Contribute to real-world projects that are building the next generation of African digital economy."
  },
  {
    icon: <Award size={24} />,
    title: "Certified Lab",
    description: "Gain access to our virtual labs and earn certifications in frontier technologies."
  }
];

export default function JoinPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-tech-dark">
      {/* Background Decor (Simplified) */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-tech-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">
              Be Part of the Evolution
            </span>
            <h1 className="text-5xl lg:text-8xl font-extrabold mb-10 leading-[0.95] tracking-tighter">
              Join the <br />
              <span className="text-tech-accent italic">Movement</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl opacity-80">
              Building the foundation for Africa&apos;s technological sovereignty. As a TechVerger, you&apos;re at the forefront of the digital revolution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-tech-accent mb-6 group-hover:bg-tech-accent group-hover:text-tech-dark transition-all duration-500 border border-white/5">
                    {benefit.icon}
                  </div>
                  <h3 className="text-white font-bold mb-3 tracking-tight">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <div className="relative">
            {/* Form Container (Replaces gradient glow) */}
            <div className="absolute -inset-4 bg-white/[0.02] rounded-[40px] -z-10"></div>
            <JoinForm />
            
            {/* Visual Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 hidden md:block"
            >
              <div className="relative h-48 w-full rounded-2xl overflow-hidden glass border border-white/5 p-8 flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold mb-1">Building Since 2024</h4>
                  <p className="text-gray-400 text-sm">Empowering over 10k+ innovators</p>
                </div>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-tech-dark bg-tech-deep flex items-center justify-center overflow-hidden">
                      <Image 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} 
                        alt="Member" 
                        width={48} 
                        height={48} 
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-tech-dark bg-tech-accent flex items-center justify-center text-tech-dark text-xs font-bold">
                    +10k
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
