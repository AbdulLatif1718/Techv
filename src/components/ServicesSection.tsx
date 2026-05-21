'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Bot, 
  Globe, 
  GraduationCap, 
  FlaskConical, 
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    title: 'AI Solutions for Businesses',
    desc: 'We help businesses integrate AI into their operations through automation, AI assistants, customer support systems, document intelligence, and smart workflows.',
    items: ['AI Chatbots', 'Business Automation', 'AI Customer Support', 'Smart Data Systems', 'AI Agents', 'Workflow Optimization'],
    icon: Bot
  },
  {
    title: 'Digital Infrastructure',
    desc: 'We design scalable digital systems that power modern organizations.',
    items: ['Cloud Platforms', 'Enterprise Systems', 'Smart Portals', 'Backend Infrastructure', 'Secure Digital Platforms', 'Government & Institutional Systems'],
    icon: Globe
  },
  {
    title: 'Training & Workforce Development',
    desc: 'We train teams, students, and organizations to thrive in the AI era.',
    items: ['AI Training Programs', 'Corporate Workshops', 'Staff Upskilling', 'Robotics Education', 'Software Engineering Training', 'Digital Transformation Programs'],
    icon: GraduationCap
  },
  {
    title: 'Research & Innovation',
    desc: 'We explore future technologies designed for Africa and emerging markets.',
    items: ['Offline AI Systems', 'Edge AI', 'Robotics Research', 'Intelligent Infrastructure', 'Low-Resource Computing', 'Human-Centered AI'],
    icon: FlaskConical
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 bg-tech-deep/10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Services & <span className="text-white">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            Delivering advanced technological capabilities to empower the next generation of African enterprises.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-10 rounded-[2.5rem] glass-dark border border-white/5 relative overflow-hidden group`}
            >
              {/* Subtle Depth Variation */}
              <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <service.icon size={44} strokeWidth={1.2} className="text-tech-accent opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4 group-hover:text-tech-accent transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-sm lg:text-base opacity-80">{service.desc}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group/item">
                       <div className="w-1.5 h-1.5 rounded-full bg-tech-accent/20 group-hover/item:bg-tech-accent transition-colors"></div>
                       <span className="text-xs lg:text-sm text-gray-500 group-hover/item:text-gray-300 transition-colors uppercase tracking-tight font-bold">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/join">
                  <button aria-label={`Learn more about ${service.title}`} className="text-[10px] font-bold text-tech-accent tracking-[0.2em] uppercase flex items-center gap-3 group-hover:gap-4 transition-all">
                    Explore Details <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
