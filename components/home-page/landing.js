import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { FaArrowRight, FaLaptopCode, FaCog, FaUsers, FaCalendarAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Landing = () => {
  const router = useRouter();
  const controls = useAnimation();
  const videoRefs = useRef([]); // Array to hold video refs
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to handle video end
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % 3); // Loop through 3 videos
  };

  // Effect to play the next video when the current one ends
  useEffect(() => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (currentVideo) {
      currentVideo.play();
    }
  }, [currentVideoIndex]);

  const handleClick = () => {
    router.push("/about-us");
  };

  // Scroll-triggered animations
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        controls.start({ opacity: 1, y: 0 });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section className="relative overflow-hidden">
      {/* SEO and Meta Tags */}
      <Head>
        <title>Empowering African Youth Through Technology</title>
        <meta name="description" content="Join us in building a brighter future through education and innovation." />
        <meta property="og:title" content="Empowering African Youth Through Technology" />
        <meta property="og:description" content="Join us in building a brighter future through education and innovation." />
        <meta property="og:image" content="/images/bg1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-green-800 to-green-600">
        {/* Video Container */}
        <div className="absolute inset-0 z-0">
          {[
            "/images/video1.mp4",
            "/images/video2.mp4",
            "/images/video3.mp4",
          ].map((src, index) => (
            <video
              key={index}
              ref={(el) => (videoRefs.current[index] = el)}
              className={`absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-1000 ${
                index === currentVideoIndex ? "opacity-100" : "opacity-0"
              }`}
              muted
              onEnded={handleVideoEnd}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering African Youth
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-500">
              Through Technology
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Join us in building a brighter future through education and innovation.
          </motion.p>
          <motion.button
            onClick={handleClick}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-lime-500 to-green-600 text-lg font-semibold rounded-full flex items-center space-x-2 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Learn More</span>
            <FaArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="lg:order-2">
            <Image
              src="/images/mission.jpeg" // African tech image
              alt="Mission"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:order-1">
            <h2 className="text-4xl font-bold mb-6 text-green-800">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              We are leveraging <strong>emerging technologies</strong> to solve Africa&apos;s most pressing problems in the following sectors:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  icon: "📚", 
                  title: "EdTech", 
                  description: "Using AI and digital platforms to revolutionize education and empower the next generation of African leaders.",
                },
                { 
                  icon: "💳", 
                  title: "FinTech", 
                  description: "Driving financial inclusion through blockchain, mobile payments, and digital banking solutions.",
                },
                { 
                  icon: "🏥", 
                  title: "HealthTech", 
                  description: "Improving healthcare access with telemedicine, AI diagnostics, and health data analytics.",
                },
                { 
                  icon: "🌾", 
                  title: "AgriTech", 
                  description: "Transforming agriculture with IoT, drones, and data-driven farming techniques to ensure food security.",
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-green-50 p-6 rounded-lg hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{tech.icon}</span>
                    <h3 className="text-xl font-bold text-green-800">{tech.title}</h3>
                  </div>
                  <p className="text-gray-700">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-700 to-green-500">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Programs</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Tech Product Development",
              description: "Build innovative software and digital tools for clients to solve real-world challenges.",
              icon: <FaLaptopCode className="h-12 w-12 text-lime-400 mb-4" />,
            },
            {
              title: "Collaborative Innovation",
              description: "Work with startups, businesses, and individuals to turn ideas into functional products.",
              icon: <FaCog className="h-12 w-12 text-lime-400 mb-4" />,
            },
            {
              title: "Digital Literacy",
              description: "Provide basic tech education to empower youth and communities with the skills to succeed.",
              icon: <FaUsers className="h-12 w-12 text-lime-400 mb-4" />,
            },
          ].map((program, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-6">{program.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
              <p className="text-gray-200">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Our Partners</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {[
            { name: "Partner 1", logo: "/images/bee.png" },
            { name: "Partner 2", logo: "/images/bomle.png" },
            { name: "Partner 3", logo: "/images/logo12.jpg" },
            { name: "Partner 4", logo: "/images/logo13.jpg" },
            // { name: "Partner 5", logo: "/images/partner5.png" },
          ].map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 bg-gray-100 rounded-lg hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={80}
                className="object-contain h-16 sm:h-20"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-400">
        <h2 className="text-4xl font-bold text-center text-white mb-12">What People Are Saying</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "This initiative has transformed my life and given me the skills to succeed in the tech industry.",
              author: "Jane Doe",
              role: "Beneficiary",
            },
            {
              quote: "A fantastic organization that is truly making a difference in Africa.",
              author: "John Smith",
              role: "Partner",
            },
            {
              quote: "I'm proud to support such an impactful and forward-thinking program.",
              author: "Sarah Johnson",
              role: "Volunteer",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FaQuoteLeft className="h-8 w-8 text-lime-400 mb-4" />
              <p className="text-gray-200 italic">{testimonial.quote}</p>
              <FaQuoteRight className="h-8 w-8 text-lime-400 mt-4 ml-auto" />
              <p className="mt-4 text-lg font-bold text-white">{testimonial.author}</p>
              <p className="text-gray-300">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="bg-gradient-to-br from-green-700 to-green-500 text-white py-16 px-4">
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
      </section> */}
    </section>
  );
};

export default Landing;