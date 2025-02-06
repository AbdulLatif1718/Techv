/** @format */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../features/language/languageSlice";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaArrowRight, FaLaptopCode, FaCog, FaUsers, FaCalendarAlt, FaHandshake } from "react-icons/fa";

const Landing = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const englishLanguage = useSelector(selectLanguage);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const backgroundImages = [
    {
      src: "/images/bg1.jpg",
      text: "Empowering African Youth Through Technology",
    },
    {
      src: "/images/bg2.jpg",
      text: "Building a Brighter Future Through Education",
    },
    {
      src: "/images/bg3.jpg",
      text: "Innovation and Growth for Africa's Future",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    router.push("/about-us");
  };

  return (
    <section className="relative">
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
      <div className="relative min-h-screen bg-gradient-to-b from-black/50 via-black/70 to-black/90">
        <motion.div
          className="absolute inset-0 z-[-1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: fade ? 0 : 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex].src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        ></motion.div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight opacity-100 transition-opacity duration-1000 ease-in-out">
            {backgroundImages[currentImageIndex].text}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            {englishLanguage
              ? "Join us in building a brighter future through education and innovation."
              : "Συμμετέχετε μαζί μας στη δημιουργία ενός φωτεινότερου μέλλοντος μέσω της εκπαίδευσης και της καινοτομίας."}
          </p>
          <button
            onClick={handleClick}
            className="mt-6 px-8 py-3 bg-green-600 hover:bg-green-700 text-lg font-semibold rounded-lg flex items-center space-x-2 transform hover:scale-105 transition-all"
            aria-label={englishLanguage ? "Learn More" : "Μάθετε Περισσότερα"}
          >
            <span>{englishLanguage ? "Learn More" : "Μάθετε Περισσότερα"}</span>
            <FaArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 px-4 flex flex-col lg:flex-row-reverse items-center justify-center bg-white">
        <div className="lg:w-1/2 mb-8 lg:mb-0 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
          <Image
            src="/images/mission.jpg"
            alt="Mission"
            width={500}
            height={500}
            className={`rounded-lg shadow-xl w-full h-auto object-cover max-h-[400px] lg:max-h-[500px] ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() => setIsImageLoaded(true)}
            priority
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
            To empower African youth and drive global innovation by leveraging emerging technologies to create impactful solutions, foster collaboration, and provide transformative education.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 flex flex-col lg:flex-row items-center justify-center bg-gray-50">
        <div className="lg:w-1/2 mb-8 lg:mb-0 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
          <Image
            src="/images/vision.jpg"
            alt="Vision"
            width={500}
            height={500}
            className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
            priority
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
            To become the greatest lab for innovation in Africa, where businesses, individuals, and startups bring their ideas and challenges, and we build solutions that create impact globally.
          </p>
        </div>
      </section>

      {/* Programs and Offerings Section */}
      <section className="py-16 px-4 text-center bg-gray-100">
        <h2 className="text-4xl font-bold mb-8">Our Programs and Offerings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Tech Product Development",
              description: "Build innovative software and digital tools for clients to solve real-world challenges.",
              icon: <FaLaptopCode className="h-12 w-12 text-green-600 mb-4" />,
              image: "/images/program1.jpg",
            },
            {
              title: "Collaborative Innovation",
              description: "Work with startups, businesses, and individuals to turn ideas into functional products.",
              icon: <FaCog className="h-12 w-12 text-green-600 mb-4" />,
              image: "/images/program2.jpg",
            },
            {
              title: "Digital Literacy",
              description: "Provide basic tech education to empower youth and communities with the skills to succeed.",
              icon: <FaUsers className="h-12 w-12 text-green-600 mb-4" />,
              image: "/images/program4.jpg",
            },
          ].map((program, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={program.image}
                  alt={program.title}
                  width={160}
                  height={160}
                  className="h-40 w-40 object-cover rounded-full shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-green-600">{program.title}</h3>
              <p className="mt-2 text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Training Program", date: "January 10, 2025", description: "Zero to mastery training on the most demanding tech skills.", icon: <FaCalendarAlt className="h-8 w-8 text-green-600 mb-4" /> },
            { title: "Webiner Meetup", date: "March 13, 2025", description: "Network with like-minded individuals.", icon: <FaCalendarAlt className="h-8 w-8 text-green-600 mb-4" /> },
            { title: "Hackathon 2025", date: "October 20-21, 2025", description: "Innovate and create with teams from across Africa.", icon: <FaCalendarAlt className="h-8 w-8 text-green-600 mb-4" /> },
          ].map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all transform hover:scale-105 flex flex-col items-center text-center"
            >
              {event.icon}
              <h3 className="text-xl font-bold text-green-600">{event.title}</h3>
              <p className="mt-2 text-gray-600">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="mt-2 text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Section */}
      {/* <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-4xl font-bold mb-8">Our Partners</h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          We are proud to collaborate with leading organizations and institutions that share our vision for innovation and growth.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12">
          {[
            { name: "Partner 1", logo: "/images/partner1.png" },
            { name: "Partner 2", logo: "/images/partner2.png" },
            { name: "Partner 3", logo: "/images/partner3.png" },
            { name: "Partner 4", logo: "/images/partner4.png" },
            { name: "Partner 5", logo: "/images/partner5.png" },
          ].map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={80}
                className="object-contain h-16 sm:h-20"
              />
            </div>
          ))}
        </div>
        <button className="mt-12 px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all text-lg">
          <Link href="/partnerships">
            <span>Become a Partner</span>
          </Link>
        </button>
      </section> */}

      {/* Call to Action Section */}
      <section className="py-16 px-4 text-center bg-green-500 text-white">
        <h2 className="text-4xl font-bold mb-4">Join Our Movement</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Be part of the next wave of innovation in Africa. Whether you want to learn, partner, or volunteer, there is a place for you.
        </p>
        <button className="mt-6 px-8 py-4 bg-white text-green-500 rounded-lg hover:bg-gray-100 transition-all text-lg">
          <Link href="/contact">
            <span>Get Involved</span>
          </Link>
        </button>
      </section>
    </section>
  );
};

export default Landing;