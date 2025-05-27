import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { motion, useInView } from "framer-motion";
import {
  FaArrowRight,
  FaLaptopCode,
  FaCog,
  FaUsers,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

const Landing = () => {
  const router = useRouter();
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoSources = [
    "https://ik.imagekit.io/qge16wvk7/video1.webm",
    "https://ik.imagekit.io/qge16wvk7/video2.webm",
  ];

  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoSources.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      playPromise.catch(() => (videoRef.current.controls = true));
    }
  }, [currentVideoIndex]);

  return (
    <section className="relative overflow-hidden">
      <Head>
        <title>Empowering African Youth Through Technology</title>
        <meta
          name="description"
          content="Join us in building a brighter future through education and innovation."
        />
        <meta property="og:image" content="/images/og-image.webp" />
        <link rel="preload" as="video" href={videoSources[0]} />
      </Head>

      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-green-800 to-green-600">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            key={currentVideoIndex}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            muted
            playsInline
            preload="metadata"
            onEnded={handleVideoEnd}
            aria-label="Background video showing our work in action"
          >
            <source src={videoSources[currentVideoIndex]} type="video/webm" />
            <source
              src={videoSources[currentVideoIndex].replace(".webm", ".mp4")}
              type="video/mp4"
            />
          </video>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building the Africa Everyone
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-500">
              Will Like to Live
            </span>
          </motion.h1>

          <motion.button
            onClick={() => router.push("/about-us")}
            className="mt-8 px-8 py-3 bg-gradient-to-r from-lime-500 to-green-600 text-lg font-semibold rounded-full flex items-center space-x-2 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Learn more about our organization"
          >
            <span>Learn More</span>
            <FaArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      {/* 🔥 Cooking Project Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-yellow-100 via-orange-200 to-red-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-extrabold text-orange-800 tracking-wide mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            🍲 Cooking Project
          </motion.h2>
          <p className="text-lg text-orange-900 mb-6">
            Something spicy is brewing in the labs! We&apos;re combining the power of{" "}
            <strong>AgriTech</strong> and <strong>FinTech</strong> to deliver
            game-changing solutions for farmers and communities across Africa.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <Image
              src="/images/cooking-pot.webp"
              alt="Cooking Project Illustration"
              width={320}
              height={200}
              className="animate-pulse"
              loading="lazy"
            />
          </motion.div>
          <p className="mt-6 text-orange-700 font-semibold">
            #AgriTech #FinTech #ComingSoon
          </p>
        </div>
      </section>

      {/* Mission Section */}
<section className="py-20 px-4 bg-white" ref={missionRef}>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          animate={missionInView ? { opacity: 1, y: 0 } : {}}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:order-2">
            <Image
              src="/images/mission.webp"
              alt="Students learning technology"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl w-full h-auto"
              priority
              placeholder="blur"
              blurDataURL="/images/mission-blur.webp"
            />
          </div>

          <div className="lg:order-1">
            <h2 className="text-4xl font-bold mb-6 text-green-800">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our mission is to harness{" "}
              <strong>technology, creativity, and innovation</strong> to solve
              real-life challenges across Africa, from:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: "📚",
                  title: "EdTech",
                  description:
                    "AI-driven education platforms for African youth.",
                },
                {
                  icon: "💳",
                  title: "FinTech",
                  description: "Blockchain solutions for financial inclusion.",
                },
                {
                  icon: "🏥",
                  title: "HealthTech",
                  description: "Telemedicine and AI diagnostics systems.",
                },
                {
                  icon: "🌾",
                  title: "AgriTech",
                  description: "IoT solutions for sustainable farming.",
                },
                {
                  icon: "🚀",
                  title: "More & Beyond",
                  description:
                    "From smart cities to clean energy — we explore emerging tech to solve tomorrow’s problems.",
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-green-50 p-6 rounded-lg hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{tech.icon}</span>
                    <h3 className="text-xl font-bold text-green-800">
                      {tech.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
          <section className="py-20 px-4 bg-gradient-to-br from-green-700 to-green-500">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          We Also Do These
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Tech Development",
              icon: <FaLaptopCode />,
              description:
                "Building the next generation of African tech leaders through hands-on training and development.",
            },
            {
              title: "Innovation Labs",
              icon: <FaCog />,
              description:
                "Collaborative workshops, hackathons, and innovation challenges to solve real-world problems.",
            },
            {
              title: "Internships & Seminars",
              icon: <FaUsers />,
              description:
                "Providing internships and seminars that empower youth with practical skills and industry insights.",
            },
          ].map((program, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6 text-lime-400 text-4xl">
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {program.title}
              </h3>
              <p className="text-gray-200">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
        Our Valued Partners
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {["bee", "bomle", "logo12", "logo13"].map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 bg-gray-100 rounded-lg hover:shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
              <Image
                src={`/images/${logo}.webp`}
                alt={`Partner ${index + 1}`}
                width={160}
                height={90}
                className="object-contain h-14 sm:h-20"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/logos/placeholder.webp"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-400">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Success Stories
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "TechVerge Africa is doing greate thing in Africa.",
              author: "Kofi Paul",
            },
            {
              quote: "Making real impact across Africa.",
              author: "Jeje Micheal",
            },
            {
              quote: "Proud to support this initiative.",
              author: "Sarah Johnson",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-lime-400 mb-4 text-2xl" />
              <p className="text-gray-200 italic">{testimonial.quote}</p>
              <FaQuoteRight className="text-lime-400 mt-4 ml-auto text-2xl" />
              <p className="mt-4 font-bold text-white">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Landing;