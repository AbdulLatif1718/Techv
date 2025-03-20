import Link from "next/link";
import { FaRegLightbulb, FaUsers, FaMapMarkerAlt, FaHandshake, FaLaptopCode, FaLeaf } from 'react-icons/fa';
import { MdOutlineContactMail } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-green-800 to-green-600">
        <div className="absolute inset-0 z-0">
          {/* Animated Particles */}
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/images/particles.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 bg-green-900 bg-opacity-70 p-8 text-center rounded-lg shadow-lg max-w-4xl mx-4">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            TechVerge Africa is dedicated to empowering African youth and driving global innovation. We harness emerging technologies to create solutions that tackle real-world challenges, foster collaboration, and provide transformative education for the next generation of leaders.
          </motion.p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 flex items-center justify-center gap-3 mb-12">
            <FaRegLightbulb className="text-green-500" /> Our Mission and Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              className="bg-green-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <FaRegLightbulb className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To empower African youth and drive global innovation by leveraging emerging technologies to create impactful solutions, foster collaboration, and provide transformative education.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-green-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <FaMapMarkerAlt className="text-green-500 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To become the greatest lab for innovation in Africa, where businesses, individuals, and startups bring their ideas and challenges, and we build solutions that create impact globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Focus & Offerings Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 flex items-center justify-center gap-3 mb-12">
            <FaHandshake className="text-green-500" /> Core Focus & Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLaptopCode className="text-green-500 text-5xl mx-auto mb-4" />,
                title: "Tech Product Development",
                description: "We build innovative software and digital tools for businesses and organizations to solve real-world challenges.",
              },
              {
                icon: <FaHandshake className="text-green-500 text-5xl mx-auto mb-4" />,
                title: "Collaborative Innovation",
                description: "We work with startups, businesses, and individuals to turn ideas into functional products.",
              },
              {
                icon: <FaUsers className="text-green-500 text-5xl mx-auto mb-4" />,
                title: "Digital Literacy",
                description: "We provide basic tech education to empower youth and communities with the skills to succeed.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                {item.icon}
                <h3 className="text-2xl font-bold text-green-800 mb-4">{item.title}</h3>
                <p className="text-lg text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 flex items-center justify-center gap-3 mb-12">
            <AiOutlineTeam className="text-green-500" /> Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sulley Abdul Latif',
                role: 'Co-founder & CEO',
                icon: <AiOutlineTeam className="text-green-500 text-5xl mx-auto mb-4" />,
              },
              {
                name: 'Abdul-Moomin Is-Haq',
                role: 'Co-founder & CTO',
                icon: <AiOutlineTeam className="text-green-500 text-5xl mx-auto mb-4" />,
              },
              {
                name: 'Abdallah Mustapha',
                role: 'Head of Programs',
                icon: <AiOutlineTeam className="text-green-500 text-5xl mx-auto mb-4" />,
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-8 rounded-lg shadow-md hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                {member.icon}
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/team">
              <span className="text-lg text-green-500 font-semibold hover:underline cursor-pointer">
                View All
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability & Impact Section */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Sustainability & Impact</h2>
        <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
          We are committed to creating sustainable impact through:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[
            {
              icon: <FaLeaf className="text-green-500 text-5xl mx-auto mb-4" />,
              title: 'Eco-Friendly Practices',
              description: 'Implementing sustainable tech and green solutions.',
            },
            {
              icon: <FaMapMarkerAlt className="text-green-500 text-5xl mx-auto mb-4" />,
              title: 'Long-Term Impact',
              description: 'Designing programs that create lasting change in communities.',
            },
            {
              icon: <FaUsers className="text-green-500 text-5xl mx-auto mb-4" />,
              title: 'Inclusive Growth',
              description: 'Ensuring equal opportunities for all youth, regardless of background.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-green-600">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-500 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold flex items-center justify-center gap-3 mb-6">
            <MdOutlineContactMail className="text-white" /> Join Us in Making a Difference
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Become a part of our journey to empower African youth through technology. Whether you want to learn, partner, or volunteer, there’s a place for you at TechVerge Africa.
          </p>
          <button className="mt-6 px-8 py-4 bg-white text-green-500 rounded-lg hover:bg-gray-100 transition-all text-lg">
            <Link href="/contact">
              <span>Get Involved</span>
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;