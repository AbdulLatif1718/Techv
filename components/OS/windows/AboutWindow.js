import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLightbulb, FaGlobe, FaHandshake, FaLaptopCode, FaChartLine } from 'react-icons/fa';

const AboutWindow = () => {
  return (
    <div className="p-4 xs:p-5 sm:p-6 md:p-8 text-white min-h-full bg-gradient-to-br from-green-950/50 to-black">
      {/* Mission Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 xs:mb-5 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-400">
          Our Mission
        </h1>
        <p className="text-sm xs:text-base sm:text-lg text-gray-300 leading-relaxed mb-4 xs:mb-5 sm:mb-6">
          At TechVerge Africa, we&apos;re building companies that create real change. Using technology, 
          creativity, and deep local insight, we invest in solutions that make life better across the continent.
        </p>
        <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
          <Image
            src="/images/mission.webp"
            alt="Our Mission"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Story Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-green-400 mb-4">The Story of TechVerge Africa</h2>
        <div className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
          <p className="text-gray-300 leading-relaxed mb-4">
            Founded with a vision to transform Africa through technology, TechVerge Africa emerged from 
            a simple belief: that the continent&apos;s challenges are best solved by Africans, using 
            cutting-edge technology and innovative thinking.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We started as a small team of entrepreneurs and technologists, united by a shared passion 
            for building solutions that matter. Today, we&apos;re a holding company backing bold, 
            tech-driven ventures that are solving real problems across Africa.
          </p>
        </div>
      </motion.div>

      {/* Values */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-green-400 mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: FaLightbulb, title: 'Innovation-First', description: 'We lead with ideas that push boundaries and deliver results.' },
            { icon: FaGlobe, title: 'Africa-Centered', description: 'Built by Africans, for Africans — with deep local understanding.' },
            { icon: FaHandshake, title: 'Founder-Friendly', description: 'We\'re long-term partners, not just funders.' },
            { icon: FaLaptopCode, title: 'Tech-Driven', description: 'We back startups built on future-ready technology.' },
            { icon: FaChartLine, title: 'Impact-Led', description: 'We care about numbers — but even more about people.' },
            { icon: FaGlobe, title: 'Sustainable Growth', description: 'Building for the long term, with sustainable business models.' },
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Icon className="text-green-400 text-3xl mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-green-400 mb-6">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: '3+', label: 'Ventures Launched', color: 'from-lime-400 to-green-500' },
            { number: '20+', label: 'Innovations Created', color: 'from-green-400 to-emerald-500' },
            { number: '2+', label: 'Countries Reached', color: 'from-emerald-400 to-teal-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-green-900/50 to-black/50 border border-green-500/30 rounded-lg p-8 text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className={`text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutWindow;

