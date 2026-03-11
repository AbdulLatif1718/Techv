import { motion } from 'framer-motion';
import { FaRobot, FaRocket, FaGraduationCap, FaCogs } from 'react-icons/fa';

const PlatformsWindow = () => {
  const platforms = [
    {
      id: 'school',
      title: 'AI School / AI-Native Learning',
      icon: FaGraduationCap,
      features: ['Project-based AI learning', 'Industry-aligned education', 'Certification pathways'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'sme',
      title: 'SME AI Automation Platform',
      icon: FaCogs,
      features: ['AI for African businesses', 'Workflow automation', 'Voice-first business tools'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'startup',
      title: 'Startup Ecosystem Platform',
      icon: FaRocket,
      features: ['Founder resources', 'Venture building tools', 'Mentorship networks'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'applied',
      title: 'Applied AI Solutions',
      icon: FaRobot,
      features: ['Fintech AI', 'Agritech intelligence', 'SME analytics', 'Automation agents'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="p-6 text-white h-full overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold mb-2">Our Platforms</h2>
          <p className="text-gray-400">Tools that people can actually use to build and scale.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-white/20 transition-colors"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${platform.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <platform.icon className="text-white text-xl" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{platform.title}</h3>
                
                <ul className="space-y-3">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${platform.color} mr-2`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 text-sm font-medium text-white/70 hover:text-white flex items-center transition-colors">
                  Learn more <span className="ml-2">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformsWindow;
