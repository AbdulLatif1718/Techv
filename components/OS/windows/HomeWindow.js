import { motion } from 'framer-motion';
import { FaBuilding, FaRocket, FaDatabase, FaLightbulb, FaUserGraduate } from 'react-icons/fa';

const HomeWindow = () => {
  return (
    <div className="p-4 xs:p-6 sm:p-8 text-white min-h-full bg-gradient-to-br from-black via-green-950/20 to-black overflow-y-auto custom-scrollbar">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12 sm:mb-16 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-green-200 to-green-400 max-w-4xl mx-auto leading-tight">
          Building the Infrastructure Behind Africa&apos;s Digital and AI Future
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
          TechVerge Africa develops the platforms, talent systems, applied AI tools, and innovation infrastructure that power African startups, enterprises, and digital economies.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white rounded-full font-medium transition-colors shadow-lg shadow-green-900/40 w-full sm:w-auto">
            Explore Infrastructure
          </button>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full font-medium transition-colors w-full sm:w-auto">
            View Platforms
          </button>
        </div>
      </motion.div>

      {/* What We Build */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-sm font-bold text-green-500 uppercase tracking-widest mb-6 text-center">What We Build</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: FaUserGraduate, title: "Human Infrastructure", desc: "AI-native education and talent pipelines" },
            { icon: FaRocket, title: "Applied AI Platforms", desc: "Tools powering businesses and startups" },
            { icon: FaDatabase, title: "Data Infrastructure", desc: "African datasets and AI knowledge systems" },
            { icon: FaLightbulb, title: "Innovation Infrastructure", desc: "Startup ecosystems and founder platforms" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors"
              whileHover={{ y: -5 }}
            >
              <item.icon className="text-2xl text-green-400 mb-3" />
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Infrastructure Matters */}
      <motion.div
        className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Infrastructure Matters</h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          <span className="text-green-400 font-semibold">Africa doesn&apos;t lack ideas — it lacks enabling systems.</span><br />
          We build the foundational layers that allow thousands of companies to innovate faster and scale globally.
        </p>
      </motion.div>

      {/* Who We Work With */}
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Who We Work With</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          {['Startups', 'Enterprises', 'Governments', 'Universities', 'Builders'].map((tag, i) => (
             <span key={i} className="px-5 py-2 rounded-full border border-white/10 bg-black/40 text-gray-300 text-sm sm:text-base">
                {tag}
             </span>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Build With Africa&apos;s Infrastructure Layer</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <button className="text-green-400 hover:text-green-300 font-medium flex items-center transition-colors">
              Partner With Us <span className="ml-2">→</span>
           </button>
           <span className="hidden sm:inline text-gray-600">|</span>
           <button className="text-white hover:text-gray-300 font-medium flex items-center transition-colors">
              Join Our Ecosystem <span className="ml-2">→</span>
           </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeWindow;

