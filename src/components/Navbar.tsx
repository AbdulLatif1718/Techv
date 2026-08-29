'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Building2, Cpu, FlaskConical, ShoppingBag, Briefcase, ArrowRight, Info, Zap } from 'lucide-react';

// ── Primary links shown directly in the nav bar ──────────────────────────────
const primaryLinks = [
  { name: 'Research', href: '/research', icon: FlaskConical },
  { name: 'Store',    href: '/store',    icon: ShoppingBag  },
  { name: 'Careers',  href: '/careers',  icon: Briefcase    },
];

// ── Items grouped under the "Company" dropdown ───────────────────────────────
const companyLinks = [
  {
    name: 'About Us',
    href: '/#about',
    icon: Info,
    desc: 'Our mission, story, and team',
  },
  {
    name: 'Services',
    href: '/#services',
    icon: Zap,
    desc: 'AI, digital infra & intelligent platforms',
  },
  {
    name: 'Why TechVerge',
    href: '/#why-us',
    icon: Cpu,
    desc: 'What makes us different',
  },
];

// ── All links for mobile sidebar ─────────────────────────────────────────────
const allMobileLinks = [
  { name: 'About Us',       href: '/#about'    },
  { name: 'Services',       href: '/#services' },
  { name: 'Why TechVerge',  href: '/#why-us'   },
  { name: 'Research',       href: '/research'  },
  { name: 'Store',          href: '/store'     },
  { name: 'Careers',        href: '/careers'   },
];

const Navbar = () => {
  const [isScrolled,       setIsScrolled]       = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [companyOpen,      setCompanyOpen]      = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'py-3 glass-dark border-b border-white/5' : 'py-5 bg-transparent'
        }`}
        style={{ top: 'var(--banner-height)' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-9 h-9 group-hover:scale-105 transition-transform duration-300">
              <Image src="/images/logo.png" alt="TechVerge Africa Logo" fill className="object-contain" />
            </div>
            <span className="text-lg font-extrabold tracking-tighter group-hover:text-tech-accent transition-colors">
              TechVerge <span className="text-tech-accent">Africa</span>
            </span>
          </Link>

          {/* ── Desktop nav ──────────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Company dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setCompanyOpen(v => !v)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12px] font-bold tracking-widest uppercase transition-all duration-200 ${
                  companyOpen ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Building2 size={13} />
                Company
                <motion.span animate={{ rotate: companyOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={12} />
                </motion.span>
              </button>

              <AnimatePresence>
                {companyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0 mt-2 w-64 glass-dark rounded-2xl border border-white/8 shadow-2xl overflow-hidden p-2"
                  >
                    {companyLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setCompanyOpen(false)}
                        className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-tech-accent/10 border border-tech-accent/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-tech-accent/20 transition-colors">
                          <item.icon size={14} className="text-tech-accent" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-bold leading-none mb-1">{item.name}</p>
                          <p className="text-gray-500 text-xs leading-snug">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Primary links */}
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12px] font-bold tracking-widest uppercase text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <link.icon size={13} />
                {link.name}
              </Link>
            ))}
          </div>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <div className="hidden lg:block">
            <Link href="/join">
              <button
                aria-label="Become a TechVerger"
                className="px-5 py-2.5 rounded-full bg-tech-accent text-tech-dark text-xs tracking-widest uppercase font-extrabold hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center gap-1.5"
              >
                Join Us <ArrowRight size={12} />
              </button>
            </Link>
          </div>

          {/* ── Mobile toggle ─────────────────────────────────────────────── */}
          <button
            className="lg:hidden text-white p-2 transition-transform active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile sidebar ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-md lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.8 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm z-[100] bg-[#0a0a0a] border-l border-white/5 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between p-8 border-b border-white/5 relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-gray-500">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 bg-white/5 rounded-2xl text-white hover:bg-white/10 transition-all active:scale-90"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-8 py-10 relative z-10 flex flex-col gap-4">
                {/* Category label */}
                <p className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-gray-600 mb-2">Company</p>
                {companyLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-4 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-9 h-9 rounded-xl bg-tech-accent/10 border border-tech-accent/20 flex items-center justify-center shrink-0">
                        <link.icon size={16} className="text-tech-accent" />
                      </div>
                      <span className="text-xl font-extrabold text-white group-hover:text-tech-accent transition-colors tracking-tighter">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}

                <div className="w-full h-px bg-white/5 my-4" />

                <p className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-gray-600 mb-2">Platform</p>
                {primaryLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (companyLinks.length + i) * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-4 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <link.icon size={16} className="text-gray-400 group-hover:text-tech-accent transition-colors" />
                      </div>
                      <span className="text-xl font-extrabold text-white group-hover:text-tech-accent transition-colors tracking-tighter">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="p-8 border-t border-white/5 relative z-10 bg-black/40">
                <Link href="/join" onClick={() => setIsMobileMenuOpen(false)}>
                  <button
                    aria-label="Become a TechVerger"
                    className="w-full py-4 rounded-2xl bg-tech-accent text-tech-dark font-extrabold text-xs uppercase tracking-[0.3em] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    Become a TechVerger <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
