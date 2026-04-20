import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaBrain, FaDatabase, FaLightbulb, FaMicrochip } from 'react-icons/fa';

const InfrastructureSection = () => {
  const sections = [
    {
      id: 'human',
      title: 'Human Layer',
      icon: FaBrain,
      items: ['AI-native education', 'Developer ecosystems', 'Workforce dev'],
      description: "Building the talent pipelines for Africa.",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      id: 'applied',
      title: 'Applied AI',
      icon: FaMicrochip,
      items: ['AI Biz OS', 'Automation', 'Industry solutions'],
      description: "Accessible advanced tools.",
      className: "md:col-span-1 md:row-span-2"
    },
    {
      id: 'data',
      title: 'Data Ops',
      icon: FaDatabase,
      items: ['Language datasets', 'Research infra'],
      description: "Fuel for African AI.",
      className: "md:col-span-1 md:row-span-1"
    },
    {
      id: 'innovation',
      title: 'Venture Infra',
      icon: FaLightbulb,
      items: ['Startup incubation', 'Innovation networks'],
      description: "Scaling African enterprises.",
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  return (
    <section id="infrastructure" className="py-20 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              A New <span className="bg-emerald-500/20 px-2 sm:px-4 italic text-emerald-400">Foundation</span>
              <br />for Innovation.
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              We build the underlying layers—talent, data, and compute—that make African digital sovereignty possible.
            </p>
          </div>
          <div className="hidden md:block pb-4">
             <div className="flex items-center gap-3 text-[10px] font-mono text-emerald-500 tracking-[0.3em] uppercase">
                <span className="w-12 h-[1px] bg-emerald-500/30" />
                Infrastructure_Matrix_v1
             </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[300px]">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl glass-morphism p-6 sm:p-8 border border-white/5 hover:border-emerald-500/30 transition-all duration-700 ${section.className}`}
            >
              {/* Card Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl group-hover:bg-emerald-500/10 transition-all" />
              
              <div className="relative h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all">
                    <section.icon className="text-xl text-gray-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{section.title}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{section.description}</p>
                </div>

                <div className="space-y-2">
                   <div className="h-[1px] w-full bg-white/5" />
                   <div className="flex flex-wrap gap-2 pt-2">
                      {section.items.map((item, i) => (
                        <span key={i} className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">{item}</span>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Special CTA Bento Card */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             onClick={() => window.location.href = '/contact'}
             className="md:col-span-1 md:row-span-1 rounded-3xl bg-emerald-600 p-8 flex flex-col justify-between group overflow-hidden relative cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent transition-opacity group-hover:opacity-100 opacity-50" />
            <h3 className="text-2xl font-bold text-white relative z-10">Build the future with us.</h3>
            <div className="flex items-center gap-2 text-white/80 font-mono text-xs relative z-10 group-hover:gap-4 transition-all">
               PARTNER_NOW <span className="text-xl">→</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
