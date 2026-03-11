import { motion } from 'framer-motion';
import { FaNewspaper, FaChartLine, FaGavel, FaLightbulb } from 'react-icons/fa';

const InsightsWindow = () => {
  const insights = [
    {
      category: 'Research Reports',
      icon: FaChartLine,
      title: 'State of AI Infrastructure in Africa 2025',
      date: 'Oct 12, 2025',
      summary: 'A comprehensive analysis of compute capacity, data sovereignty, and talent pipelines across the continent.'
    },
    {
      category: 'Policy & Governance',
      icon: FaGavel,
      title: 'Frameworks for Sovereign Digital Systems',
      date: 'Sep 28, 2025',
      summary: 'Why African nations need to own their digital layers to compete in the AI economy.'
    },
    {
      category: 'Founder Resources',
      icon: FaLightbulb,
      title: 'Building AI-Native Startups in Low-Bandwidth Environments',
      date: 'Sep 15, 2025',
      summary: 'Practical architectural patterns for deploying advanced models where connectivity is constrained.'
    },
     {
      category: 'Case Studies',
      icon: FaNewspaper,
      title: 'Scaling Agritech Intelligence: A Kenya Pilot',
      date: 'Aug 30, 2025',
      summary: 'How applied AI tools increased smallholder yields by 40% using local data infrastructure.'
    }
  ];

  return (
    <div className="p-6 text-white h-full overflow-y-auto custom-scrollbar">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-b border-white/10 pb-4">Insights & Research</h2>

        <div className="space-y-6">
          {insights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 text-green-400 group-hover:scale-105 transition-transform">
                  <item.icon className="text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-green-500 uppercase tracking-wider">{item.category}</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-green-400 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.summary}</p>
                </div>
              </div>
              {index < insights.length - 1 && <div className="h-px bg-white/5 mx-4 mt-4" />}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsWindow;
