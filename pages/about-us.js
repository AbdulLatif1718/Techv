import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaGlobe } from "react-icons/fa";

const team = [
  {
    name: "Sulley Abdul Latif",
    role: "Co-Founder & CEO",
    image: "/images/sulley.webp",
    social: {
      linkedin: "https://www.linkedin.com/in/sulley-abdul-latif-aa79b3222",
      twitter: "https://x.com/MrLogic1718",
      github: "https://github.com/AbdulLatif1718",
      website: "#",
    },
  },
  {
    name: "Abdul-Moomin Is-Haq",
    role: "Co-Founder & CTO",
    image: "/images/ishaq.webp",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Abdallah Mustapha",
    role: "COO",
    image: "/images/mustapha.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

const SocialIcon = ({ href, children }) => (
  <Link href={href} passHref legacyBehavior>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-700 hover:text-green-900 transition-colors"
      aria-label="Social media link"
    >
      {children}
    </a>
  </Link>
);

const About = () => {
  return (
    <>
      <Head>
        <title>About TechVerge Africa – Africa’s Boldest Venture Builder</title>
        <meta
          name="description"
          content="TechVerge Africa is a venture-building holding company co-creating the future of Africa through bold startups, deep tech, and local insight."
        />
      </Head>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-800 to-green-600 text-white overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
        >
          <source src="https://ik.imagekit.io/qge16wvk7/particles.webm" type="video/mp4" />
        </video>
        <div className="relative z-10 p-8 rounded-xl max-w-4xl text-center">
          <motion.h1
            className="text-4xl sm:text3xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Powering Africa&apos;s Future with Bold Tech Ventures
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            TechVerge Africa is a holding company launching and scaling future-facing
            startups tackling Africa&apos;s most urgent challenges, from food systems and finance to frontier technology.
          </motion.p>
        </div>
      </section>

{/* Why We Exist - Redesigned */}
<section className="relative py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-20 left-10 w-72 h-72 bg-green-600 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
  </div>
  
  <div className="relative max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -40, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative group"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-green-600 via-blue-600 to-emerald-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/images/about-vision.webp"
            alt="Why we exist - TechVerge Africa's vision"
            width={650}
            height={450}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
          >
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
            Our Purpose
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Why We{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Exist
            </span>
          </motion.h2>
        </div>

        {/* Main description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-6"
        >
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            Africa&apos;s challenges are immense, and so is its potential. At TechVerge Africa,
            we exist to build the companies that can solve real problems at scale.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We&apos;re not just investors, we co-create, co-build, and go the distance.
          </p>
        </motion.div>

        {/* Feature points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-4"
        >
          {[
            "We incubate bold, technology-first ventures.",
            "We partner with founders from zero to traction and scale.",
            "We operate at the intersection of business, tech, and impact.",
            "We tackle problems across AgriTech, FinTech, HealthTech, AI, and more.",
            "We're creating Africa-led innovations for global relevance."
          ].map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
              className="flex items-start gap-4 group cursor-pointer"
            >
              <div className="flex-shrink-0 w-6 h-6 mt-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="pt-4"
        >
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Learn More About Our Impact
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div> */}
      </motion.div>
    </div>
  </div>
</section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-green-50 text-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-700">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bold Thinking",
                description: "We challenge norms and pursue 10x solutions.",
              },
              {
                title: "Africa-Centered",
                description: "We build with deep local understanding and ownership.",
              },
              {
                title: "Execution Excellence",
                description: "We value speed, focus, and results.",
              },
              {
                title: "Tech-First",
                description: "We believe in the power of emerging technologies to drive change.",
              },
              {
                title: "Founder Empathy",
                description: "We stand beside our builders — as partners, not just funders.",
              },
              {
                title: "Impact at Scale",
                description: "We care about what matters — people, progress, and possibility.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-700 mb-12">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-green-100 rounded-xl p-6 shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-700 mb-4">{member.role}</p>

                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <SocialIcon href={member.social.linkedin}>
                      <FaLinkedin className="h-6 w-6" />
                    </SocialIcon>
                  )}
                  {member.social.twitter && (
                    <SocialIcon href={member.social.twitter}>
                      <FaTwitter className="h-6 w-6" />
                    </SocialIcon>
                  )}
                  {member.social.github && (
                    <SocialIcon href={member.social.github}>
                      <FaGithub className="h-6 w-6" />
                    </SocialIcon>
                  )}
                  {member.social.website && (
                    <SocialIcon href={member.social.website}>
                      <FaGlobe className="h-6 w-6" />
                    </SocialIcon>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <Link
            href="/team"
            className="mt-10 inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            View More
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-700 to-green-500 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build the Future of Africa?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Whether you’re a founder, operator, investor, or innovator — join us in shaping
            tomorrow’s Africa through bold, tech-driven companies.
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="mt-4 px-8 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Let&apos;s Build Together
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
