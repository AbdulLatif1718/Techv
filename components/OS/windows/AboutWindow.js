import { motion } from 'framer-motion';
import { FaServer, FaGlobeAfrica, FaNetworkWired, FaPeopleArrows } from 'react-icons/fa';

const AboutWindow = () => {
  return (
    <div className="p-4 xs:p-5 sm:p-6 md:p-8 text-white min-h-full bg-gradient-to-br from-black via-green-950/20 to-black overflow-y-auto custom-scrollbar">
      
      {/* Intro */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Who We Are</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          TechVerge Africa is an African technology infrastructure company focused on building the foundational systems needed for a scalable digital economy.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
           className="bg-white/5 border border-white/10 p-6 rounded-2xl"
        >
          <div className="flex items-center mb-4 text-green-400">
            <FaGlobeAfrica className="text-2xl mr-3" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Enable Africa to move from technology consumption to infrastructure ownership and global innovation leadership.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.2 }}
           className="bg-white/5 border border-white/10 p-6 rounded-2xl"
        >
          <div className="flex items-center mb-4 text-blue-400">
            <FaServer className="text-2xl mr-3" />
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            An Africa powered by locally built infrastructure, AI systems, and globally competitive innovation ecosystems.
          </p>
        </motion.div>
      </div>

      {/* Our Approach */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: FaNetworkWired, title: "Infrastructure-first innovation" },
            { icon: FaPeopleArrows, title: "Ecosystem-driven growth" },
            { icon: FaGlobeAfrica, title: "Africa-focused design" },
            { icon: FaServer, title: "Long-term systems building" }
          ].map((item, index) => (
             <motion.div
                key={index}
                className="bg-black/40 border border-white/5 rounded-xl p-5 text-center hover:border-green-500/30 transition-colors"
                whileHover={{ scale: 1.02 }}
             >
                <item.icon className="mx-auto text-3xl text-gray-500 mb-3" />
                <h3 className="font-semibold text-gray-200">{item.title}</h3>
             </motion.div>
          ))}
        </div>
      </motion.div>

       {/* Team Section Placeholder (Simplified) */}
       <motion.div
        className="mt-16 text-center border-t border-white/10 pt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-8">Built By</h2>
        <div className="flex justify-center gap-10">
          <div>
            <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-3 animate-pulse"></div>
            <p className="font-bold">Leadership</p>
          </div>
          <div>
            <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-3 animate-pulse"></div>
            <p className="font-bold">Advisors</p>
          </div>
          <div>
            <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-3 animate-pulse"></div>
            <p className="font-bold">Builders</p>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default AboutWindow;

