import { motion } from 'framer-motion';
import { FaHandshake, FaGlobe, FaUniversity, FaBuilding } from 'react-icons/fa';

const PartnersWindow = () => {
  return (
    <div className="p-8 text-white h-full overflow-y-auto custom-scrollbar flex flex-col items-center justify-center min-h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="inline-block p-4 rounded-full bg-green-500/10 mb-6">
          <FaHandshake className="text-4xl text-green-400" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner to Build Africa&apos;s Infrastructure Layer</h2>
        
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          We collaborate with Telcos, Universities, Tech Companies, and Enterprise leaders to deploy the systems that will define the continent&apos;s digital future.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
           <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <FaUniversity className="text-2xl text-blue-400 mx-auto mb-3" />
              <h3 className="font-bold">Universities</h3>
              <p className="text-xs text-gray-400 mt-2">AI Education & Research</p>
           </div>
           <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <FaBuilding className="text-2xl text-purple-400 mx-auto mb-3" />
              <h3 className="font-bold">Enterprises</h3>
              <p className="text-xs text-gray-400 mt-2">Innovation Programs</p>
           </div>
           <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <FaGlobe className="text-2xl text-green-400 mx-auto mb-3" />
              <h3 className="font-bold">Public Sector</h3>
              <p className="text-xs text-gray-400 mt-2">Infrastructure Deployment</p>
           </div>
        </div>

        <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg shadow-green-900/40">
          Become a Strategic Partner
        </button>
      </motion.div>
    </div>
  );
};

export default PartnersWindow;
