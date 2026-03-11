import { motion } from 'framer-motion';
import { FaServer, FaBrain, FaDatabase, FaLightbulb, FaMicrochip } from 'react-icons/fa';

const InfrastructureWindow = () => {
  const sections = [
    {
      id: 'human',
      title: 'Human Infrastructure',
      icon: FaBrain,
      items: [
        'AI-native education systems',
        'Developer ecosystems',
        'Technical workforce development',
        'Founder training'
      ],
      description: "Building the talent pipelines that will build Africa's future."
    },
    {
      id: 'applied',
      title: 'Applied AI Infrastructure',
      icon: FaMicrochip,
      items: [
        'AI business operating systems',
        'Automation platforms',
        'Industry-specific AI solutions',
        'Low-bandwidth AI tools'
      ],
      description: "Tools that make advanced technology accessible and usable."
    },
    {
      id: 'data',
      title: 'Data Infrastructure',
      icon: FaDatabase,
      items: [
        'African language datasets',
        'Business and economic datasets',
        'AI training data systems',
        'Research and knowledge infrastructure'
      ],
      description: "The fuel for locally relevant artificial intelligence."
    },
    {
      id: 'innovation',
      title: 'Innovation Infrastructure',
      icon: FaLightbulb,
      items: [
        'Startup incubation systems',
        'Innovation networks',
        'Builder communities',
        'Ecosystem development platforms'
      ],
      description: "Systems that turn ideas into scalable enterprises."
    },
    {
      id: 'future',
      title: 'Future Infrastructure',
      icon: FaServer,
      items: [
        'AI deployment environments',
        'Compute partnerships',
        'Sovereign digital systems',
        'AI governance technology'
      ],
      description: "Preparing Africa for the next wave of technological sovereignty."
    }
  ];

  return (
    <div className="p-6 text-white h-full overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            The Infrastructure Layer
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            TechVerge Africa builds enabling infrastructure — the systems that power innovation, AI adoption, and digital transformation across Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <section.icon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-4 text-sm font-light italic border-l-2 border-green-500/30 pl-3">
                {section.description}
              </p>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfrastructureWindow;
