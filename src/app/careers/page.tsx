'use client';

import { motion } from 'framer-motion';
import { Briefcase, Sparkles, Clock, ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';

/*
====================================================================
CAREERS PAGE CODE SPECIFICATION & TEMPLATE (COMMENTED OUT FOR NOW)
====================================================================

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const openPositions: JobPosting[] = [
  // {
  //   id: 'ai-researcher-1',
  //   title: 'Senior AI Research Scientist',
  //   department: 'AI & Machine Intelligence',
  //   location: 'Kumasi / Remote',
  //   type: 'Full-time',
  //   description: 'Lead research in domain-adapted LLMs, computer vision, and autonomous agent frameworks.'
  // },
  // {
  //   id: 'robotics-eng-1',
  //   title: 'Embedded Robotics Systems Engineer',
  //   department: 'Robotics & Hardware',
  //   location: 'Kumasi, Ghana',
  //   type: 'Full-time',
  //   description: 'Design, prototype, and optimize real-time robotics controllers and sensor fusion pipelines.'
  // }
];

function CareersListPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">Open Positions at TechVerge Africa</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {openPositions.map((job) => (
            <div key={job.id} className="p-8 glass-dark rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold">{job.title}</h3>
              <p className="text-tech-accent text-sm mt-2">{job.department} • {job.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
====================================================================
*/

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-36 pb-24 flex items-center justify-center relative overflow-hidden bg-tech-dark">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-dark border border-white/10 rounded-[40px] p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tech-accent/10 border border-tech-accent/20 text-tech-accent text-xs font-bold tracking-[0.25em] uppercase mb-8">
            <Clock size={14} className="animate-spin-slow" />
            <span>Careers Portal Coming Soon</span>
          </div>

          <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-tech-accent shadow-inner">
            <Briefcase size={36} strokeWidth={1.5} />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Build the Future <br />
            <span className="text-tech-accent">With TechVerge</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            We are preparing to open applications for AI Researchers, Robotics Engineers, Full-Stack Developers, and Infrastructure Specialists. Get ready to join our mission.
          </p>

          {/* Stay updated / Join talent network */}
          <div className="max-w-md mx-auto mb-10">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter email to join our Talent Network"
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-sm outline-none focus:border-tech-accent/50 transition-all text-white flex-1 placeholder:text-gray-600"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-2xl bg-tech-accent text-tech-dark font-extrabold text-xs uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap flex items-center justify-center gap-2"
              >
                <Send size={14} /> Join Network
              </button>
            </form>
          </div>

          <div className="pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <Sparkles size={14} className="text-tech-accent" /> Remote & On-Site Roles
            </span>
            <Link href="/" className="text-tech-accent hover:underline flex items-center gap-1 font-bold">
              <ArrowLeft size={14} /> Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
