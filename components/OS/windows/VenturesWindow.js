import { motion } from 'framer-motion';
import { FaRocket, FaArrowRight, FaSeedling, FaCoins, FaRobot, FaCode } from 'react-icons/fa';

const VenturesWindow = () => {
  const ventures = [
    {
      name: 'AgriNova',
      category: 'AgriTech',
      description: 'Revolutionizing sustainable farming across Africa with AI-powered crop management and smart irrigation systems.',
      icon: FaSeedling,
      status: 'Active',
      color: 'from-green-400 to-emerald-500',
    },
    {
      name: 'PayBloc',
      category: 'FinTech',
      description: 'Next-generation payment solutions making financial services accessible to millions across the continent.',
      icon: FaCoins,
      status: 'Active',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      name: 'RoboTech Africa',
      category: 'Robotics',
      description: 'Building autonomous systems and robotics solutions for agriculture, manufacturing, and logistics.',
      icon: FaRobot,
      status: 'Active',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      name: 'EduTech Labs',
      category: 'EdTech',
      description: 'Transforming education delivery through AI-powered learning platforms and virtual classrooms.',
      icon: FaCode,
      status: 'Active',
      color: 'from-purple-400 to-pink-500',
    },
    {
      name: 'Web3 Ventures',
      category: 'Web3',
      description: 'Pioneering blockchain solutions for supply chain transparency, digital identity, and decentralized finance.',
      icon: FaRocket,
      status: 'Active',
      color: 'from-indigo-400 to-purple-500',
    },
    {
      name: 'HealthTech Solutions',
      category: 'HealthTech',
      description: 'Leveraging technology to improve healthcare access and delivery in underserved communities.',
      icon: FaRocket,
      status: 'Coming Soon',
      color: 'from-red-400 to-pink-500',
    },
  ];

  return (
    <div className="p-4 xs:p-5 sm:p-6 md:p-8 text-white min-h-full bg-gradient-to-br from-green-950/50 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-400">
          Our Ventures
        </h1>
        <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-6 xs:mb-7 sm:mb-8">
          We support bold startups solving real problems in Africa, from AgriTech and FinTech to AI, Web3, and Robotics.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ventures.map((venture, index) => {
          const Icon = venture.icon;
          return (
            <motion.div
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${venture.color} flex items-center justify-center text-2xl`}>
                  <Icon />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  venture.status === 'Active' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                }`}>
                  {venture.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{venture.name}</h3>
              <p className="text-sm text-green-400 mb-3 font-semibold">{venture.category}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{venture.description}</p>
              
              <motion.button
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-2"
                whileHover={{ x: 5 }}
              >
                <span className="text-sm font-semibold">Learn More</span>
                <FaArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* Categories */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-green-400 mb-4">Focus Areas</h2>
        <div className="flex flex-wrap gap-3">
          {['AgriTech', 'FinTech', 'AI', 'Web3', 'Robotics', 'EdTech', 'HealthTech', 'More to Come'].map((category, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 197, 94, 0.3)' }}
            >
              #{category}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default VenturesWindow;

