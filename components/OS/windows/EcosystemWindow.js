import { motion } from 'framer-motion';
import { FaUsers, FaBuilding, FaUniversity, FaGlobeAfrica, FaCode, FaRocket } from 'react-icons/fa';

const EcosystemWindow = () => {
  const categories = [
    {
      title: 'Builders & Developers',
      icon: FaCode,
      items: ['Community programs', 'Hackathons', 'Developer resources', 'Open infrastructure tools']
    },
    {
      title: 'Startups',
      icon: FaRocket,
      items: ['Venture support', 'Infrastructure access', 'Platform integrations']
    },
    {
      title: 'Enterprises',
      icon: FaBuilding,
      items: ['AI adoption partnerships', 'Infrastructure deployment', 'Enterprise innovation programs']
    },
    {
      title: 'Universities & Institutions',
      icon: FaUniversity,
      items: ['Research collaboration', 'Education partnerships', 'Curriculum development']
    },
    {
      title: 'Public Sector',
      icon: FaGlobeAfrica,
      items: ['Digital infrastructure advisory', 'AI adoption frameworks', 'Innovation programs']
    }
  ];



  return (
    <div className="p-6 text-white h-full overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-3">The Ecosystem</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We don&apos;t just build alone; we enable others. Our infrastructure powers an entire continent of innovators.
          </p>
        </motion.div>

        <div className="space-y-4">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center mb-3 sm:mb-0 sm:w-1/3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-3 text-green-400">
                  <cat.icon />
                </div>
                <h3 className="font-bold text-lg">{cat.title}</h3>
              </div>
              
              <div className="flex-1 flex flex-wrap gap-2 text-sm text-gray-300">
                {cat.items.map((item, i) => (
                  <span key={i} className="bg-black/30 px-3 py-1 rounded-full border border-white/5">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcosystemWindow;
