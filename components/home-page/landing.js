import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { motion, useInView } from "framer-motion";
import { FaArrowRight, FaLaptopCode, FaCog, FaUsers, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Landing = () => {
  const router = useRouter();
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoSources = [
    {
      webm: "https://ik.imagekit.io/qge16wvk7/video1.webm",
      mp4: "https://ik.imagekit.io/qge16wvk7/video1.mp4",
    },
    {
      webm: "https://ik.imagekit.io/qge16wvk7/video2.webm",
      mp4: "https://ik.imagekit.io/qge16wvk7/video2.mp4",
    },
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
        <title>TechVerge Africa – Building the Africa Everyone Will Like to Live In</title>
        <meta name="description" content="TechVerge Africa is a holding company backing bold, tech-driven ventures solving real problems across Africa." />
        <meta property="og:image" content="/images/og-image.webp" />
      </Head>

      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-green-800 to-green-600">
        {/* Responsive Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            key={currentVideoIndex}
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover opacity-50 
                       sm:w-full sm:h-full sm:top-0 sm:left-0 sm:transform-none"
            muted
            playsInline
            autoPlay
            loop
            preload="auto"
            onEnded={handleVideoEnd}
            aria-label="Background video showing our work in action"
          >
            <source src={videoSources[currentVideoIndex].mp4} type="video/mp4" />
            <source src={videoSources[currentVideoIndex].webm} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-6xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building the Africa Everyone <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-500">
              Will Like to Live In
            </span>
          </motion.h1>

          <motion.button
            onClick={() => router.push("/about-us")}
            className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-lime-500 to-green-600 
                       text-base sm:text-lg font-semibold rounded-full flex items-center space-x-2 
                       hover:scale-105 transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Our Ventures</span>
            <FaArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>
        </div>
      </div>

      {/* Ventures We Back */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-100 via-orange-200 to-red-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-orange-800 tracking-wide mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            🚀 Ventures We Back
          </motion.h2>
          <p className="text-base sm:text-lg text-orange-900 mb-6">
            We support bold startups solving real problems in Africa, from AgriTech and FinTech to AI, Web3, and Robotics. We&apos;re not just investors, we&apos;re builders and long-term partners.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <Image
              src="/images/cooking-pot.webp"
              alt="Ventures Illustration"
              width={320}
              height={200}
              className="animate-pulse w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
              loading="lazy"
            />
          </motion.div>
          <p className="mt-6 text-sm sm:text-base text-orange-700 font-semibold">#AgriTech #FinTech #AI #Web3 #MoreToCome</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={missionRef}>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          animate={missionInView ? { opacity: 1, y: 0 } : {}}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:order-2">
            <Image
              src="/images/mission.webp"
              alt="Mission illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl w-full h-auto"
              priority
            />
          </div>

          <div className="lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-green-800">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              At TechVerge Africa, we&apos;re building companies that create real change. Using technology, creativity, and deep local insight, we invest in solutions that make life better across the continent.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: "💡", title: "Innovation-First", description: "We lead with ideas that push boundaries and deliver results." },
                { icon: "🌍", title: "Africa-Centered", description: "Built by Africans, for Africans — with deep local understanding." },
                { icon: "🤝", title: "Founder-Friendly", description: "We're long-term partners, not just funders." },
                { icon: "💻", title: "Tech-Driven", description: "We back startups built on future-ready technology." },
                { icon: "📈", title: "Impact-Led", description: "We care about numbers — but even more about people." },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-green-50 p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">{tech.icon}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-green-800">{tech.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* How We Operate */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-700 to-green-500">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-12">How We Operate</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Venture Building",
              icon: <FaLaptopCode />,
              description: "We build startups from scratch, from idea to launch, with hands-on support.",
            },
            {
              title: "Startup Support",
              icon: <FaCog />,
              description: "Mentorship, funding, and infrastructure to help our founders scale smart and fast.",
            },
            {
              title: "Tech Innovation",
              icon: <FaUsers />,
              description: "We apply AI, Web3, and Robotics to African challenges, with real results.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4 sm:mb-6 text-lime-400 text-3xl sm:text-4xl">{item.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-200">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-green-400">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-12">What Our Partners Say</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              quote: "TechVerge helped us launch faster and scale smarter. They're more than investors, they're partners.",
              author: "Aisha Adewale, Founder at AgriNova",
            },
            {
              quote: "Their team gets Africa. They move fast, but with purpose.",
              author: "David Mensah, CTO at PayBloc",
            },
            {
              quote: "Innovation with real-world impact, that's what TechVerge stands for.",
              author: "Lilian Chukwu, Advisor at EduTech Labs",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-lime-400 mb-3 sm:mb-4 text-xl sm:text-2xl" />
              <p className="text-sm sm:text-base text-gray-200 italic">{testimonial.quote}</p>
              <div className="flex justify-end">
                <FaQuoteRight className="text-lime-400 mt-3 sm:mt-4 text-xl sm:text-2xl" />
              </div>
              <p className="mt-3 sm:mt-4 font-bold text-white text-sm sm:text-base">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Landing;