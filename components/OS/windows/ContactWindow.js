import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const ContactWindow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4 xs:p-5 sm:p-6 md:p-8 text-white min-h-full bg-gradient-to-br from-green-950/50 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-400">
          Contact Us
        </h1>
        <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-6 xs:mb-7 sm:mb-8">
          Get in touch with us. We&apos;d love to hear from you!
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
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
              />
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
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all"
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
          <h2 className="text-2xl font-bold text-green-400 mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-green-400 text-2xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:info@techverge.africa" className="text-gray-300 hover:text-green-400 transition-colors">
                    info@techverge.africa
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <FaPhone className="text-green-400 text-2xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <a href="tel:+234123456789" className="text-gray-300 hover:text-green-400 transition-colors">
                    +234 (0) 123 456 789
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-green-400 text-2xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                  <p className="text-gray-300">
                    Lagos, Nigeria<br />
                    Accra, Ghana<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-black/30 backdrop-blur-sm border border-green-500/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

            {/* Press Inquiries */}
            <div className="bg-gradient-to-br from-green-900/50 to-black/50 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Press Inquiries</h3>
              <p className="text-gray-300 text-sm mb-4">
                For media and press inquiries, please contact our communications team.
              </p>
              <a href="mailto:press@techverge.africa" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                press@techverge.africa →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactWindow;

