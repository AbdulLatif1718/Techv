'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Globe, Award, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import CEOContactCard from './CEOContactCard';

export default function CEOProfileView() {
  return (
    <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT SIDE: CEO Executive Bio (Visible on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 hidden lg:flex flex-col justify-center text-left"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-tech-accent font-bold tracking-[0.3em] uppercase text-xs">
              Executive Profile
            </span>
            <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold bg-white/[0.03] border border-white/10 px-3 py-1 rounded-full">
              <ShieldCheck size={12} className="text-tech-accent" />
              <span>Verified Official Card</span>
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold font-space text-white leading-tight tracking-tight mb-8">
            Abdul Latif <br />
            <span className="text-tech-accent italic text-glow">Sulley</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
            Co-founder & CEO of TechVerge Africa. Orchestrating the development of AI solutions, digital infrastructure, and autonomous systems designed to drive Africa&apos;s technological sovereignty and digital growth.
          </p>

          {/* Micro Pillars */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mb-10 border-t border-white/5 pt-8">
            <div className="flex flex-col">
              <div className="text-tech-accent mb-2"><Cpu size={20} /></div>
              <h4 className="text-white text-xs font-extrabold font-space uppercase tracking-wider mb-1">AI Systems</h4>
              <p className="text-[10px] text-gray-500 leading-normal">Building adaptive automation and local models.</p>
            </div>
            <div className="flex flex-col">
              <div className="text-tech-accent mb-2"><Globe size={20} /></div>
              <h4 className="text-white text-xs font-extrabold font-space uppercase tracking-wider mb-1">Infrastructure</h4>
              <p className="text-[10px] text-gray-500 leading-normal">Cloud platforms & secured institutional portals.</p>
            </div>
            <div className="flex flex-col">
              <div className="text-tech-accent mb-2"><Award size={20} /></div>
              <h4 className="text-white text-xs font-extrabold font-space uppercase tracking-wider mb-1">Sovereignty</h4>
              <p className="text-[10px] text-gray-500 leading-normal">Developing high-impact tech programs.</p>
            </div>
          </div>

          {/* Direct CTA */}
          <div>
            <Link href="/">
              <button className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 glass hover:border-tech-accent/40 hover:bg-tech-accent hover:text-tech-dark transition-all duration-300 rounded-full font-bold text-sm text-gray-300">
                <span>Visit TechVerge Website</span>
                <ExternalLink size={14} />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Interactive 3D Business Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-5 w-full flex flex-col items-center justify-center"
        >
          {/* Small header for mobile only */}
          <div className="lg:hidden flex flex-col items-center text-center mb-8">
            <span className="text-tech-accent font-bold tracking-[0.25em] uppercase text-[10px] mb-2">
              Executive Profile
            </span>
            <h1 className="text-3xl font-extrabold font-space text-white">
              Abdul Latif Sulley
            </h1>
            <p className="text-gray-400 text-xs mt-1">Co-founder & CEO, TechVerge Africa</p>
          </div>

          <CEOContactCard />
        </motion.div>

      </div>
    </div>
  );
}
