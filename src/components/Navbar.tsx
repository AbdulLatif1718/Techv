'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Why Us', href: '/#why-us' },
  { name: 'Store', href: '/store' },
  { name: 'Careers', href: '/#careers' },
  { name: 'Join', href: '/join' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass-dark border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/logo.png" 
              alt="TechVerge Africa Logo" 
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-extrabold tracking-tighter outfit group-hover:text-tech-accent transition-colors">
            TechVerge <span className="text-tech-accent">Africa</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-tech-accent transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:block">
          <Link href="/join">
            <button aria-label="Become a TechVerger" className="px-6 py-2.5 rounded-full border border-tech-accent/20 text-tech-accent text-xs tracking-widest uppercase font-bold glass hover:bg-tech-accent hover:text-tech-dark transition-all duration-500">
              Become a TechVerger
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 transition-transform active:scale-90"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Side Bar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Overlay Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 200,
                mass: 0.8
              }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm z-50 bg-[#0a0a0a] border-l border-white/5 lg:hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
              
              {/* Menu Header with Close Button */}
              <div className="flex items-center justify-between p-8 border-b border-white/5 relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-gray-500">Navigation</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 bg-white/5 rounded-2xl text-white hover:bg-white/10 transition-all active:scale-90"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto px-8 py-10 relative z-10 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-3xl font-extrabold text-white group-hover:text-tech-accent transition-colors tracking-tighter">
                        {link.name}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                        <Menu size={16} className="text-tech-accent" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Menu Footer */}
              <div className="p-8 border-t border-white/5 relative z-10 bg-black/40">
                <Link href="/join" onClick={() => setIsMobileMenuOpen(false)}>
                  <button aria-label="Become a TechVerger" className="w-full py-5 rounded-2xl bg-tech-accent text-tech-dark font-extrabold text-xs uppercase tracking-[0.3em] hover:brightness-110 active:scale-[0.98] transition-all">
                    Become a TechVerger
                  </button>
                </Link>
                <div className="mt-8 flex justify-center gap-6">
                  <div className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center text-gray-500">
                    <span className="text-[10px] font-bold">X</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center text-gray-500">
                    <span className="text-[10px] font-bold">IG</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center text-gray-500">
                    <span className="text-[10px] font-bold">LN</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
