import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBuilding, FaUniversity, FaGlobeAfrica, FaCode, FaRocket } from 'react-icons/fa';

const EcosystemSection = () => {
  const categories = [
    {
      title: 'Builders',
      icon: FaCode,
      items: ['Hackathons', 'Dev Resources'],
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: 'Ventures',
      icon: FaRocket,
      items: ['Venture Support', 'Infra Access'],
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: 'Institutions',
      icon: FaUniversity,
      items: ['Research', 'Curriculum'],
      className: "md:col-span-2 md:row-span-1"
    },
    {
      title: 'Sovereign Nodes',
      icon: FaGlobeAfrica,
      items: ['Advisory', 'Frameworks'],
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <section id="ecosystem" className="py-20 md:py-40 px-6 relative border-t border-white/5 overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 lg:sticky lg:top-40 mb-12 lg:mb-0"
          >
            <div className="text-emerald-500 font-mono text-[10px] mb-4 tracking-[0.4em] uppercase">Connectivity_Layer</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              The <span className="italic font-light opacity-50">Ecosystem</span>
              <br />Network.
            </h2>
            <p className="text-lg text-gray-400 mb-12 font-light leading-relaxed">
              We empower startups, enterprises, and governments to build on top of Africa&apos;s sovereign infrastructure.
            </p>
            
            <div className="flex items-center gap-6">
               <div className="h-12 w-12 rounded-full border border-emerald-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
               </div>
               <span className="text-sm font-mono text-emerald-400">Node_Sync: Active</span>
            </div>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-morphism p-8 rounded-[2rem] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 group ${cat.className}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all">
                    <cat.icon className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{cat.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-full text-[10px] text-emerald-400 font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
