'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Research', href: '#research' },
  { name: 'AI & Robotics', href: '#robotics' },
  { name: 'Infrastructure', href: '#infrastructure' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
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
        isScrolled ? 'py-4 glass-dark shadow-2xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
            <Image 
              src="/images/logo.png" 
              alt="TechVerge Africa Logo" 
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            />
          </div>
          <span className="text-xl font-bold tracking-tighter outfit group-hover:text-tech-accent transition-colors">
            TechVerge <span className="text-tech-accent">Africa</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-tech-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-accent transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden lg:block">
          <button className="px-6 py-2.5 rounded-full border border-tech-accent/30 text-tech-accent font-semibold glass hover:bg-tech-accent hover:text-tech-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,242,255,0.2)] hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]">
            Become a TechVerger
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-tech-dark lg:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-white hover:text-tech-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="mt-4 px-8 py-4 rounded-xl bg-tech-accent text-tech-dark font-bold text-lg">
                Become a TechVerger
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
