import React, { useState, useEffect } from 'react';
import ModernHero from './ModernHero';
import InfrastructureSection from './InfrastructureSection';
import EcosystemSection from './EcosystemSection';
import AdvancedToggle from './AdvancedToggle';
import BackgroundEffects from './BackgroundEffects';
import { motion, useScroll, useSpring } from 'framer-motion';

const ModernLanding = ({ onToggleAdvanced }) => {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-emerald-500/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 z-[100] origin-left"
        style={{ scaleX }}
      />
      <BackgroundEffects />

      {/* Main Content */}
      <main className="relative z-10">
        <ModernHero />
        <InfrastructureSection />
        <EcosystemSection />
        
        {/* Footer with Toggle */}
        <footer className="py-20 border-t border-white/5 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Ready to Access the System?
            </h2>
            <AdvancedToggle onClick={onToggleAdvanced} />
            <p className="mt-8 text-gray-500 text-sm font-mono">
              © {year} TECHVERGE AFRICA. BEYOND INFRASTRUCTURE.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ModernLanding;
