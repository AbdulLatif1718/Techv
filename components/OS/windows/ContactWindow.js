import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaBuilding, FaHandshake, FaCode } from 'react-icons/fa';

const ContactWindow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Enquiries',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', category: 'General Enquiries', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4 xs:p-5 sm:p-6 md:p-8 text-white min-h-full bg-gradient-to-br from-black via-green-950/20 to-black overflow-y-auto custom-scrollbar">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-400">
          Contact Us
        </h1>
        <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-6 xs:mb-7 sm:mb-8">
          Partner with us to build Africa&apos;s digital infrastructure layer.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-7 sm:gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl xs:text-2xl font-bold text-green-400 mb-4 xs:mb-5 sm:mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                placeholder="your.email@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">I am interested in...</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black/50 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors appearance-none"
              >
                <option>General Enquiries</option>
                <option>Strategic Partnerships</option>
                <option>Enterprise Solutions</option>
                <option>Developer Support & Ecosystem</option>
                <option>Media & Speaking</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-black/50 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors resize-none"
                placeholder="How can we build together?"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg shadow-green-900/40"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-green-400 mb-6">Direct Channels</h2>
          <div className="space-y-4">
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-green-500/30 transition-colors cursor-pointer group">
               <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4 group-hover:bg-green-500/20 transition-colors">
                     <FaHandshake className="text-green-400" />
                  </div>
                  <div>
                     <h3 className="font-bold text-white">Partnerships</h3>
                     <p className="text-sm text-gray-400">partners@techverge.africa</p>
                  </div>
               </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-green-500/30 transition-colors cursor-pointer group">
               <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-colors">
                     <FaBuilding className="text-blue-400" />
                  </div>
                  <div>
                     <h3 className="font-bold text-white">Enterprise Solutions</h3>
                     <p className="text-sm text-gray-400">enterprise@techverge.africa</p>
                  </div>
               </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-green-500/30 transition-colors cursor-pointer group">
               <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mr-4 group-hover:bg-purple-500/20 transition-colors">
                     <FaCode className="text-purple-400" />
                  </div>
                  <div>
                     <h3 className="font-bold text-white">Developer Support</h3>
                     <p className="text-sm text-gray-400">devs@techverge.africa</p>
                  </div>
               </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
               <h3 className="font-bold text-lg mb-4">Locations</h3>
               <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
                  <div className="flex items-start">
                     <FaMapMarkerAlt className="mt-1 mr-2 text-green-500" />
                     <div>
                        <span className="block font-bold text-white">Lagos</span>
                        <span className="text-xs">Headquarters</span>
                     </div>
                  </div>
                  <div className="flex items-start">
                     <FaMapMarkerAlt className="mt-1 mr-2 text-gray-500" />
                     <div>
                        <span className="block font-bold text-white">Nairobi</span>
                        <span className="text-xs">Hub</span>
                     </div>
                  </div>
                   <div className="flex items-start">
                     <FaMapMarkerAlt className="mt-1 mr-2 text-gray-500" />
                     <div>
                        <span className="block font-bold text-white">Accra</span>
                        <span className="text-xs">Hub</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Connect</h3>
              <div className="flex space-x-4">
                <motion.a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors" whileHover={{ scale: 1.1 }}>
                  <FaLinkedin className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors" whileHover={{ scale: 1.1 }}>
                  <FaTwitter className="w-5 h-5 text-white" />
                </motion.a>
                <motion.a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors" whileHover={{ scale: 1.1 }}>
                  <FaGithub className="w-5 h-5 text-white" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactWindow;

