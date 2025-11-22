import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const TeamWindow = () => {
  const teamMembers = [
    {
      name: 'Sulley',
      role: 'CEO & Co-Founder',
      image: '/images/sulley.webp',
      bio: 'Visionary leader passionate about building Africa\'s tech future.',
      social: { linkedin: '#', twitter: '#', github: '#' },
    },
    
    {
      name: 'Ishaq',
      role: 'CTO & Co-Founder',
      image: '/images/ishaq.webp',
      bio: 'Tech innovator driving cutting-edge solutions across the continent.',
      social: { linkedin: '#', twitter: '#', github: '#' },
    },


    {
      name: 'Mustapha',
      role: 'COO',
      image: '/images/mustapha.jpg',
      bio: 'Operations expert ensuring smooth execution of our ventures',
      social: { linkedin: '#', twitter: '#', github: '#' },
    },

    // {
    //   name: 'Latif',
    //   role: 'Head of Ventures',
    //   image: '/images/latif.jpeg',
    //   bio: 'Venture builder identifying and nurturing the next big ideas.',
    //   social: { linkedin: '#', twitter: '#', github: '#' },
    // },
  ];

  return (
    <div className="p-4 xs:p-5 sm:p-6 md:p-8 text-white min-h-full bg-gradient-to-br from-green-950/50 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-400">
          Our Team
        </h1>
        <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-6 xs:mb-7 sm:mb-8">
          Meet the passionate team building Africa&apos;s tech future, one venture at a time.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 text-center hover:border-green-500/40 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-500/30">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-sm text-green-400 mb-3">{member.role}</p>
            <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
            <div className="flex justify-center space-x-3">
              <motion.a
                href={member.social.linkedin}
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={member.social.twitter}
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={member.social.github}
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Join Us Section */}
      <motion.div
        className="mt-12 bg-gradient-to-br from-green-900/50 to-black/50 border border-green-500/30 rounded-lg p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-green-400 mb-4">Join Our Team</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          We&apos;re always looking for talented individuals passionate about building Africa&apos;s tech future. 
          If you&apos;re ready to make an impact, we&apos;d love to hear from you.
        </p>
        <motion.button
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Open Positions
        </motion.button>
      </motion.div>
    </div>
  );
};

export default TeamWindow;

