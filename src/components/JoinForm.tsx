'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Target, CheckCircle } from 'lucide-react';

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'developer',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-tech-deep/80 backdrop-blur-3xl border border-tech-accent/10 rounded-[2.5rem] p-12 text-center shadow-2xl"
      >
        <div className="w-20 h-20 bg-tech-accent/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-tech-accent/10">
          <CheckCircle size={40} className="text-tech-accent" strokeWidth={1.5} />
        </div>
        <h3 className="text-3xl font-extrabold mb-4 tracking-tight">Welcome to the Future!</h3>
        <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
          Thanks for joining our community, {formData.name.split(' ')[0]}. We&apos;ve received your application and will be in touch soon with next steps.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-tech-accent text-xs font-bold uppercase tracking-widest hover:underline"
        >
          Submit another application
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-tech-deep/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name Field */}
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-gray-500 flex items-center gap-3">
              <User size={14} className="text-tech-accent" /> Full Name
            </label>
            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-5 py-4 outline-none focus:border-tech-accent/30 focus:bg-white/[0.04] transition-all text-white placeholder:text-gray-700 font-medium"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-gray-500 flex items-center gap-3">
              <Mail size={14} className="text-tech-accent" /> Email Address
            </label>
            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="john@example.com"
              className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-5 py-4 outline-none focus:border-tech-accent/30 focus:bg-white/[0.04] transition-all text-white placeholder:text-gray-700 font-medium"
            />
          </div>
        </div>

        {/* Interest Field */}
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-gray-500 flex items-center gap-3">
            <Target size={14} className="text-tech-accent" /> Primary Interest
          </label>
          <div className="relative">
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-5 py-4 outline-none focus:border-tech-accent/30 focus:bg-white/[0.04] transition-all text-white appearance-none cursor-pointer"
            >
              <option value="developer" className="bg-tech-deep">Developer / Engineer</option>
              <option value="researcher" className="bg-tech-deep">AI Researcher</option>
              <option value="investor" className="bg-tech-deep">Investor / Partner</option>
              <option value="enthusiast" className="bg-tech-deep">Tech Enthusiast</option>
              <option value="student" className="bg-tech-deep">Student</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
              <div className="w-2 h-2 border-r-2 border-b-2 border-white rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-gray-500">Why do you want to be a TechVerger?</label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us a bit about yourself and your vision..."
            className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-5 py-4 outline-none focus:border-tech-accent/30 focus:bg-white/[0.04] transition-all text-white resize-none placeholder:text-gray-700 font-medium"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          disabled={isSubmitting}
          type="submit"
          className={`w-full py-5 rounded-2xl font-extrabold text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all ${
            isSubmitting 
              ? 'bg-tech-accent/50 text-tech-dark cursor-not-allowed' 
              : 'bg-tech-accent text-tech-dark hover:brightness-110 active:scale-[0.98]'
          }`}
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-tech-dark/30 border-t-tech-dark rounded-full animate-spin"></div>
          ) : (
            <>
              Send Application <Send size={16} />
            </>
          )}
        </button>

        <p className="text-center text-[10px] uppercase tracking-widest text-gray-700 font-bold">
          By joining, you agree to our <span className="text-gray-500">Terms</span> and <span className="text-gray-500">Privacy</span>.
        </p>
      </form>
    </motion.div>
  );
};

export default JoinForm;
