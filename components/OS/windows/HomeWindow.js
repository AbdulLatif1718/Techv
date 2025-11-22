import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight, FaRocket, FaLightbulb, FaGlobe } from 'react-icons/fa';

const HomeWindow = () => {
  return (
    <div className="p-4 xs:p-5 sm:p-6 md:p-8 text-white min-h-full bg-gradient-to-br from-green-950/50 to-black">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-6 xs:mb-7 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 xs:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400 px-2">
          Powering Africa&apos;s Tech Future
        </h1>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
          Building the Africa everyone will like to live in through technology, innovation, and deep local insight.
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 mb-6 xs:mb-7 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {[
          { icon: FaRocket, label: 'Ventures', value: '3+' },
          { icon: FaLightbulb, label: 'Innovations', value: '30+' },
          { icon: FaGlobe, label: 'Countries', value: '3+' },
          { icon: FaArrowRight, label: 'Impact', value: '∞' },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 xs:p-4 text-center"
              whileHover={{ scale: 1.05, borderColor: 'rgba(34, 197, 94, 0.6)' }}
            >
              <Icon className="text-green-400 text-xl xs:text-2xl mx-auto mb-1 xs:mb-2" />
              <div className="text-xl xs:text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs xs:text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Recent Updates */}
      <motion.div
        className="mb-6 xs:mb-7 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl xs:text-2xl font-bold text-green-400 mb-3 xs:mb-4 px-2">Recent Updates</h2>
        <div className="space-y-3 xs:space-y-4">
          {[
            {
              title: 'New Venture Launch',
              description: 'We\'re excited to announce our latest AgriTech startup focused on sustainable farming solutions.',
              date: '2 days ago',
            },
            {
              title: 'Partnership Announcement',
              description: 'TechVerge Africa partners with leading universities to foster innovation across the continent.',
              date: '1 week ago',
            },
            {
              title: 'Team Expansion',
              description: 'Welcome to our new team members joining us from across Africa to build the future.',
              date: '2 weeks ago',
            },
          ].map((update, index) => (
            <motion.div
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-3 xs:p-4 hover:border-green-500/40 transition-colors"
              whileHover={{ x: 5 }}
            >
              <h3 className="text-base xs:text-lg font-semibold text-white mb-1">{update.title}</h3>
              <p className="text-gray-300 text-xs xs:text-sm mb-2">{update.description}</p>
              <span className="text-[10px] xs:text-xs text-green-400">{update.date}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-xl xs:text-2xl font-bold text-green-400 mb-3 xs:mb-4 px-2">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4">
          {[
            { title: 'Our Ventures', description: 'Explore the startups we\'ve built', icon: '🚀' },
            { title: 'Our Team', description: 'Meet the people behind TechVerge', icon: '👥' },
            { title: 'Contact Us', description: 'Get in touch with our team', icon: '✉️' },
          ].map((link, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-green-900/50 to-black/50 border border-green-500/30 rounded-lg p-4 xs:p-5 sm:p-6 text-center cursor-pointer touch-manipulation"
              whileHover={{ scale: 1.05, borderColor: 'rgba(34, 197, 94, 0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-3xl xs:text-4xl mb-2">{link.icon}</div>
              <h3 className="text-base xs:text-lg font-semibold text-white mb-1">{link.title}</h3>
              <p className="text-xs xs:text-sm text-gray-400">{link.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomeWindow;

