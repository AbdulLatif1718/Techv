import Link from 'next/link';
import Image from 'next/image';
import { X, Globe, Code2, Camera, Send } from 'lucide-react';

const Footer = () => {
  const socials = [
    { name: 'Twitter', icon: X },
    { name: 'LinkedIn', icon: Globe },
    { name: 'Github', icon: Code2 },
    { name: 'Instagram', icon: Camera },
  ];

  return (
    <footer className="relative bg-tech-deep pt-20 pb-10 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image 
                src="/images/logo.png" 
                alt="TechVerge Africa Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">TechVerge Africa</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Building intelligent systems that empower Africa and the world.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={`Follow us on ${social.name}`}
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/5 bg-white/[0.02] hover:border-tech-accent/50 hover:text-tech-accent transition-all duration-500 group"
              >
                <social.icon size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="flex flex-col gap-4">
              {[{ name: 'About', href: '/#about' }, { name: 'Services', href: '/#services' }, { name: 'Research', href: '/#services' }].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-tech-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="flex flex-col gap-4">
              {[{ name: 'Careers', href: '/#careers' }, { name: 'Community', href: '/#community' }, { name: 'Join', href: '/join' }].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 text-sm hover:text-tech-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Stay updated with our latest innovations.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-tech-accent/50 transition-all text-white"
            />
            <button className="bg-tech-accent text-tech-dark font-bold py-2.5 rounded-lg hover:shadow-[0_0_15px_rgba(0,242,255,0.4)] transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs text-center md:text-left">
          © 2026 TechVerge Africa. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs font-bold tracking-[0.3em] uppercase">
          Built by <span className="text-white">TechVergers.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
