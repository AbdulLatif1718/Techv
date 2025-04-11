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
      linkedin: "#",
      twitter: "#",
      github: "#",
      website: "#"
    }
  },
  {
    name: "Abdul-Moomin Is-Haq",
    role: "Co-Founder & CTO",
    image: "/images/ishaq.webp",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Abdallah Mustapha",
    role: "COO",
    image: "/images/mustapha.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  // {
  //   name: "Linda Okoro",
  //   role: "Education Specialist",
  //   image: "/images/team/linda.webp",
  // },
];
// Social media icon components
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
        <title>About Us - TechVerge Africa</title>
        <meta
          name="description"
          content="Learn more about how we're empowering African youth and solving Africa’s biggest challenges through technology."
        />
      </Head>

      {/* Hero Section with Optimized Video */}
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
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Africa Through Technology & Innovation
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We&apos;re on a mission to build an Africa where everyone will want to
            live — a continent of opportunity, innovation, and inclusion.
          </motion.p>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/about-vision.webp"
              alt="Empowering youth through innovation"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-green-800">
              Why We Exist
            </h2>
            <p className="mb-4 text-lg">
              Africa is rich with talent and potential — yet many face barriers.
              At TechVerge Africa, we believe technology is the key to unlocking
              that potential. We work at the intersection of innovation,
              education, and impact.
            </p>
            <ul className="list-disc ml-5 text-green-700 font-medium space-y-2">
              <li>AI-powered learning tools.</li>
              <li>Smart AgriTech solutions.</li>
              <li>AI diagnostics for healthcare.</li>
              <li>Startup Incubation Labs & Hackathons.</li>
              <li>Creating a tech-savvy generation.</li>
            </ul>
          </motion.div>
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
                title: "Innovation",
                description: "Solving problems creatively using bold ideas.",
              },
              {
                title: "Empowerment",
                description: "Equipping youth to shape their future.",
              },
              {
                title: "Collaboration",
                description: "Amplifying impact through strong partnerships.",
              },
              {
                title: "Sustainability",
                description: "Driving long-term change with eco-consciousness.",
              },
              {
                title: "Inclusion",
                description: "Opportunities for all, regardless of background.",
              },
              {
                title: "Excellence",
                description: "World-class quality in everything we do.",
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

                {/* Social Media Links */}
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
            Join Us in Shaping the Future
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Whether you&apos;re a student, developer, mentor, partner — there&apos;s a
            place for you here.
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="mt-4 px-8 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Get Involved
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
