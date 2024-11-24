/** @format */

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../features/language/languageSlice";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Landing = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const englishLanguage = useSelector(selectLanguage);

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [fade, setFade] = useState(false);

	// Array of background images and corresponding text
	const backgroundImages = [
		{
			src: "/images/bg1.jpg", // Image 1
			text: "Empowering African Youth Through Technology",
		},
		{
			src: "/images/bg2.jpg", // Image 2
			text: "Building a Brighter Future Through Education",
		},
		{
			src: "/images/bg3.jpg", // Image 3
			text: "Innovation and Growth for Africa's Future",
		},
		// {
		//   src: "/images/bg4.jpg", // Image 4 (new addition)
		//   text: "Shaping the Future with Creativity and Skills",
		// },
	];

	// Change the background image and text every 4 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setFade(true); // Trigger fade out
			setTimeout(() => {
				setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
				setFade(false); // Trigger fade in after image has changed
			}, 500); // Wait for fade-out animation to finish
		}, 4000); // Change every 4 seconds

		return () => clearInterval(interval); // Cleanup on component unmount
	}, []);

	const handleClick = () => {
		router.push("/product");
	};

	return (
		<section className="relative">
			{/* Hero Section */}
			<div className="relative min-h-screen">
				{/* Background Image with Framer Motion for transition */}
				<motion.div
					className="absolute inset-0 z-[-1]"
					initial={{ opacity: 0 }}
					animate={{ opacity: fade ? 0 : 1 }}
					transition={{ duration: 1 }}
					style={{
						backgroundImage: `url(${backgroundImages[currentImageIndex].src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						height: "100vh", // Full viewport height
					}}
				></motion.div>

				{/* Dark Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90 z-0"></div>

				{/* Text Section */}
				<div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-center px-4">
					<h1
						className={`text-5xl md:text-6xl font-bold transition-opacity duration-1000 ease-in-out ${fade ? "opacity-0" : "opacity-100"}`}
					>
						{backgroundImages[currentImageIndex].text}
					</h1>
					<p className="mt-4 text-lg md:text-xl max-w-3xl">
						{englishLanguage
							? "Join us in building a brighter future through education and innovation."
							: "Συμμετέχετε μαζί μας στη δημιουργία ενός φωτεινότερου μέλλοντος μέσω της εκπαίδευσης και της καινοτομίας."}
					</p>
					<button
						onClick={handleClick}
						className="mt-6 px-8 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-lg font-medium transition-all"
					>
						{englishLanguage ? "Learn More" : "Μάθετε Περισσότερα"}
					</button>
				</div>
			</div>

			{/* Overview Section */}
			<section className="bg-white py-16 px-4 text-center">
				<h2 className="text-4xl font-bold">Our Mission</h2>
				<p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
					To empower African youth and drive global innovation through technology education, digital solutions, and community building.
				</p>
			</section>

			{/* Key Programs Section */}
			<section className="bg-gray-50 py-16 px-4">
				<h2 className="text-4xl font-bold text-center mb-8">Our Programs</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{ title: "Digital Literacy Training", description: "Equipping youth with essential tech skills." },
						{ title: "Tech Solutions", description: "Developing innovative software and digital tools." },
						{ title: "Community Engagement", description: "Building a strong network through events and workshops." },
					].map((program, index) => (
						<div
							key={index}
							className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-transform transform hover:scale-105"
						>
							<h3 className="text-xl font-bold text-green-600">{program.title}</h3>
							<p className="mt-2 text-gray-600">{program.description}</p>
						</div>
					))}
				</div>
			</section>

			{/* Success Stories Section */}
			<section className="bg-white py-16 px-4">
				<h2 className="text-4xl font-bold text-center mb-8">Success Stories</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{[
						{
							quote: "TechVerge Africa changed my life! I learned how to code and now work at one of the top tech companies.",
							name: "Sarah Mensah",
							role: "Software Engineer",
						},
						{
							quote: "The training was phenomenal, and I gained skills that helped me launch my own startup!",
							name: "John Doe",
							role: "Entrepreneur",
						},
						{
							quote: "TechVerge has built a strong community of learners and innovators, making a real difference.",
							name: "Amanda Kwame",
							role: "Community Leader",
						},
					].map((story, index) => (
						<div key={index} className="bg-gray-50 shadow-lg p-6 rounded-lg hover:shadow-xl">
							<p className="text-gray-600 text-lg italic">“{story.quote}”</p>
							<div className="mt-4">
								<h3 className="font-semibold text-lg text-green-700">{story.name}</h3>
								<p className="text-gray-500 text-sm">{story.role}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Upcoming Events Section */}
			<section className="bg-gray-50 py-16 px-4">
				<h2 className="text-4xl font-bold text-center mb-8">Upcoming Events</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{ title: "Tech Workshop", date: "June 15, 2024", description: "Hands-on training in web development." },
						{ title: "Hackathon 2024", date: "July 20-21, 2024", description: "Innovate and create with teams from across Africa." },
						{ title: "Community Meetup", date: "August 5, 2024", description: "Network with like-minded individuals." },
					].map((event, index) => (
						<div
							key={index}
							className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-transform transform hover:scale-105"
						>
							<h3 className="text-xl font-bold text-green-600">{event.title}</h3>
							<p className="mt-2 text-gray-600">
								<strong>Date:</strong> {event.date}
							</p>
							<p className="mt-2 text-gray-600">{event.description}</p>
						</div>
					))}
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="bg-green-500 text-white py-16 px-4 text-center">
				<h2 className="text-4xl font-bold mb-4">Join Our Movement</h2>
				<p className="mt-4 text-lg max-w-2xl mx-auto">
					Be part of the next wave of innovation in Africa. Whether you want to learn, partner, or volunteer, there is a place for you.
				</p>
				<button className="mt-6 px-8 py-4 bg-white text-green-500 rounded-lg hover:bg-gray-100 transition-all text-lg">
					Get Involved
				</button>
			</section>
		</section>
	);
};

export default Landing;
