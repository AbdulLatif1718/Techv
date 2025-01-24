import Image from 'next/image';
import Link from "next/link";
import { FaRegLightbulb, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineContactMail } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';

const AboutPage = () => {
	return (
		<div className="overflow-x-hidden mt-15">
			{/* Hero Section */}
			<section className="relative bg-gray-900 text-white flex items-center justify-center bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url('/images/bg1.jpg')`, height: '70vh', backgroundSize: 'cover' }}
			>
				<div className="bg-gray-900 bg-opacity-70 p-8 text-center rounded-lg shadow-lg">
					<h1 className="text-6xl font-extrabold text-white leading-tight">
						About Us
					</h1>
					<p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
						TechVerge Africa is dedicated to empowering African youth and driving global innovation. We harness emerging technologies to create solutions that tackle real-world challenges, foster collaboration, and provide transformative education for the next generation of leaders. Our vision is to be Africa&apos;s leading hub for innovation, where ideas are co-created to benefit both African communities and the world.
					</p>
				</div>
			</section>

			{/* Mission and Vision Section */}
			<section className="py-16 px-6 bg-gray-900 text-white">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-16">
					<div className="lg:w-1/2 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
						<Image
							src="/images/mission.png"
							alt="Mission"
							width={600}
							height={400}
							className="rounded-lg shadow-xl w-full h-auto object-cover"
						/>
					</div>
					<div className="lg:w-1/2">
						<h2 className="text-4xl text-yellow-500 font-bold flex items-center justify-center gap-3 mb-6">
							<FaRegLightbulb className="text-yellow-500" /> Our Mission and Vision
						</h2>
						<p className="text-lg">
							<strong>Mission:</strong> To empower African youth and drive global innovation by leveraging emerging technologies to create impactful solutions, foster collaboration, and provide transformative education.
						</p>
						<p className="mt-6 text-lg">
							<strong>Vision:</strong> To become the greatest lab for innovation in Africa, where businesses, individuals, and startups bring their ideas and challenges, and we build solutions that create impact globally.
						</p>
					</div>
				</div>
			</section>

			{/* Core Focus & Secondary Offerings Section */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="text-center">
					<h2 className="text-4xl font-bold flex items-center justify-center gap-3 mb-12">
						<FaMapMarkerAlt className="text-green-500" /> Core Focus & Secondary Offerings
					</h2>

					{/* Tech Product Development */}
					<div className="mb-12">
						<h3 className="text-3xl font-semibold text-green-600">Tech Product Development</h3>
						<div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-12">
							<div className="lg:w-1/2 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
								<Image
									src="/images/program1.jpg"
									alt="Tech Product Development"
									width={600}
									height={400}
									className="w-full h-auto object-cover rounded-lg shadow-lg"
								/>
							</div>
							<div className="lg:w-1/2 text-lg text-gray-700">
								We build innovative software and digital tools for businesses and organizations. Through proactive development of proprietary products using emerging technologies, we aim to address Africa’s unique challenges and provide scalable solutions.
							</div>
						</div>
					</div>

					{/* Collaborative Innovation */}
					<div className="mb-12 py-16 px-4 flex flex-col lg:flex-row-reverse items-center justify-center bg-white rounded-lg shadow-xl">
						<div className="lg:w-1/2 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
							<Image
								src="/images/program2.jpg"
								alt="Collaborative Innovation"
								width={600}
								height={400}
								className="w-full h-auto object-cover rounded-lg shadow-lg"
							/>
						</div>
						<div className="lg:w-1/2 text-lg text-gray-700">
							<h4 className="text-2xl font-semibold mb-4">Collaborative Innovation</h4>
							We work with startups, businesses, and individuals to transform innovative ideas into functional products that solve real-world challenges. Together, we can create a sustainable future for Africa through collaborative innovation.
						</div>
					</div>

					{/* Digital Literacy */}
					<div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-12">
						<div className="lg:w-1/2 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
							<Image
								src="/images/program4.jpg"
								alt="Digital Literacy"
								width={600}
								height={400}
								className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
							/>
						</div>
						<div className="lg:w-1/2 text-lg text-gray-700">
							<h4 className="text-2xl font-semibold mb-4">Digital Literacy Programs</h4>
							We provide foundational tech education to youth and communities, empowering them with the skills to thrive in a rapidly advancing digital economy. Our programs aim to bridge the digital divide and unlock new opportunities.
						</div>
					</div>

					{/* Community Engagement */}
					<div className="py-16 px-4 flex flex-col lg:flex-row-reverse items-center justify-center bg-white rounded-lg shadow-xl mt-12">
						<div className="lg:w-1/2 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
							<Image
								src="/images/program3.jpg"
								alt="Community Engagement"
								width={600}
								height={400}
								className="w-full h-auto object-cover rounded-lg shadow-lg"
							/>
						</div>
						<div className="lg:w-1/2 text-lg text-gray-700">
							<h4 className="text-2xl font-semibold mb-4">Community Engagement</h4>
							We foster innovation through community engagement by organizing workshops, hackathons, and events that inspire collaboration, knowledge sharing, and problem-solving. Together, we are creating a platform for Africa’s innovators.
						</div>
					</div>
				</div>
			</section>

			{/* Meet Our Team Section */}
			<section className="py-16 px-4 bg-white">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-bold flex items-center justify-center gap-3 mb-12">
						<AiOutlineTeam className="text-green-500" /> Meet Our Team
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
						{[
							{
								name: 'Sulley Abdul Latif',
								role: 'Co-founder & CEO',
								image: '/images/latif.jpeg', // Replace with Sulley's image
							},
							{
								name: 'Abdul-Moomin Is-Haq',
								role: 'Co-founder & CTO',
								image: '/images/cto.jpg', // Replace with Abdul-Moomin's image
							},
							{
								name: 'Abdallah Mustapha',
								role: 'Head of Programs',
								image: '/images/hop.jpg', // Replace with Mustapha's image
							},
						].map((member, index) => (
							<div
								key={index}
								className="bg-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-transform"
							>
								<Image
									src={member.image}
									alt={member.name}
									width={150}
									height={150}
									className="mx-auto rounded-full border-4 border-green-500"
								/>
								<h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
								<p className="text-gray-600">{member.role}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Sustainability & Impact Section */}
			<section className="bg-gray-50 py-16 px-4 text-center">
				<h2 className="text-4xl font-bold mb-6">Sustainability & Impact</h2>
				<p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
					We are committed to creating sustainable impact through:
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
					{[
						{
							title: 'Eco-Friendly Practices',
							description:
								'Implementing sustainable tech and green solutions.',
						},
						{
							title: 'Long-Term Impact',
							description:
								'Designing programs that create lasting change in communities.',
						},
						{
							title: 'Inclusive Growth',
							description:
								'Ensuring equal opportunities for all youth, regardless of background.',
						},
					].map((item, index) => (
						<div key={index} className="bg-white p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold text-green-600">
								{item.title}
							</h3>
							<p className="mt-2 text-gray-600">{item.description}</p>
						</div>
					))}
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="bg-green-500 text-white py-16 px-4">
				<div className="container mx-auto text-center">
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
