/** @format */
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../features/language/languageSlice";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaArrowRight, FaLaptopCode, FaCog, FaUsers, FaCalendarAlt } from "react-icons/fa";

const Landing = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const englishLanguage = useSelector(selectLanguage);

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [fade, setFade] = useState(false);

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
			{/* Hero Section */}
			<div className="relative min-h-screen bg-gradient-to-b from-black/50 via-black/70 to-black/90">
				<motion.div
					className="absolute inset-0 z-[-1]"
					initial={{ opacity: 0 }}
					animate={{ opacity: fade ? 0 : 1 }}
					transition={{ duration: 1 }}
					style={{
						backgroundImage: `url(${backgroundImages[currentImageIndex].src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						height: "100vh",
					}}
				></motion.div>

				<div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white">
					<h1 className="text-5xl md:text-6xl font-extrabold leading-tight opacity-100 transition-opacity duration-1000 ease-in-out">
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
					>
						<span>{englishLanguage ? "Learn More" : "Μάθετε Περισσότερα"}</span>
						<FaArrowRight className="h-5 w-5" />
					</button>
				</div>
			</div>

			{/* Overview Section */}
			<section className="py-16 px-4 flex flex-col lg:flex-row-reverse items-center justify-center bg-white">
				<div className="lg:w-1/2 mb-8 lg:mb-0 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
					<img
						src="/images/mission.jpeg"
						alt="Mission"
						className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
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
					<img
						src="/images/vision.jpg"
						alt="Vision"
						className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
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
							image: "/images/program1.jpg"
						},
						{
							title: "Collaborative Innovation",
							description: "Work with startups, businesses, and individuals to turn ideas into functional products.",
							icon: <FaCog className="h-12 w-12 text-green-600 mb-4" />,
							image: "/images/program2.jpg"
						},
						{
							title: "Digital Literacy",
							description: "Provide basic tech education to empower youth and communities with the skills to succeed.",
							icon: <FaUsers className="h-12 w-12 text-green-600 mb-4" />,
							image: "/images/program4.jpg"
						},
					].map((program, index) => (
						<div
							key={index}
							className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
						>
							<div className="flex justify-center mb-4">
								<img
									src={program.image}
									alt={program.title}
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
			<section className="py-16 px-4 bg-white">
				<h2 className="text-4xl font-bold text-center mb-8">Upcoming Events</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{ title: "Training Program", date: "January 10, 2025", description: "Zero to mastery training on the most demanding tech skills.", icon: <FaCalendarAlt className="h-8 w-8 text-green-600 mb-4" />, image: "/images/event1.jpg" },
						{ title: "Webinar Meetup", date: "March 13, 2025", description: "Network with like-minded individuals.", icon: <FaCalendarAlt className="h-8 w-8 text-green-600 mb-4" />, image: "/images/event2.jpg" },
						{ title: "Hackathon 2025", date: "October 20-21, 2025", description: "Innovate and create with teams from across Africa.", icon: <FaCalendarAlt className="h-8 w-8 text-green-600 mb-4" />, image: "/images/event3.jpg" },
					].map((event, index) => (
						<div
							key={index}
							className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all transform hover:scale-105 flex flex-col items-center"
						>
							<img src={event.image} alt={event.title} className="h-40 w-40 object-cover rounded-full mb-4" />
							{event.icon}
							<h3 className="text-xl font-bold text-green-600">{event.title}</h3>
							<p className="mt-2 text-gray-600"><strong>Date:</strong> {event.date}</p>
							<p className="mt-2 text-gray-600">{event.description}</p>
						</div>
					))}
				</div>
			</section>

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
