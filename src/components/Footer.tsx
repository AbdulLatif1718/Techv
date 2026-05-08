import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-tech-deep pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tech-glow/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
      
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
            Building digital infrastructure, AI, and robotics systems meant to empower Africa and shape the future of humanity.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 hover:border-tech-accent hover:text-tech-accent transition-all duration-300"
              >
                <span className="sr-only">{social}</span>
                {/* SVG placeholders or icons could go here */}
                <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="flex flex-col gap-4">
            {['Vision', 'Research', 'AI & Robotics', 'Infrastructure', 'Ventures'].map((link) => (
              <li key={link}>
                <Link href="#" className="text-gray-400 text-sm hover:text-tech-accent transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="flex flex-col gap-4">
            {['About Us', 'Careers', 'Community', 'Our Labs', 'Contact'].map((link) => (
              <li key={link}>
                <Link href="#" className="text-gray-400 text-sm hover:text-tech-accent transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Stay updated with our latest innovations.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-tech-accent/50 transition-all"
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
        <p className="text-gray-500 text-xs font-medium tracking-widest uppercase">
          Built by <span className="text-white">TechVergers</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
