import Image from 'next/image';
import Link from "next/link";
import { FaRegLightbulb, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineContactMail } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';

const AboutPage = () => {
	return (
		<div className="overflow-x-hidden mt-20">
			{/* Hero Section */}
			<section
				className="relative bg-gray-900 text-white flex items-center justify-center h-60 bg-cover bg-center"
				style={{
					backgroundImage: `url('/path/to/your/hero-image.jpg')`, // Replace with your hero image
				}}
			>
				<div className="bg-black bg-opacity-60 p-6 text-center rounded-lg shadow-lg">
					<h1 className="text-5xl font-extrabold">About TechVerge Africa</h1>
					<p className="mt-4 text-lg">
						Empowering the next generation through technology education.
					</p>
				</div>
			</section>

			{/* Mission and Vision Section */}
			<section className="py-16 px-4 bg-white">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-bold flex items-center justify-center gap-3">
						<FaRegLightbulb className="text-green-500" /> Our Mission and Vision
					</h2>
					<p className="mt-4 text-gray-700 max-w-2xl mx-auto">
						Our mission is to empower African youth through accessible
						technology education and drive global innovation. We envision a
						future where technology bridges the gap between opportunities and
						aspirations, fostering a community of skilled individuals ready to
						make an impact.
					</p>
				</div>
			</section>

			{/* Objectives Section */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-bold flex items-center justify-center gap-3">
						<FaMapMarkerAlt className="text-green-500" /> Objectives
					</h2>
					<ul className="mt-8 space-y-6 text-left max-w-2xl mx-auto">
						{[
							'Reduce youth unemployment through digital literacy training and job placement.',
							'Develop innovative tech solutions addressing Africa’s unique challenges.',
							'Foster partnerships with educational institutions and businesses.',
							'Create a supportive community for knowledge sharing and collaboration.',
						].map((objective, index) => (
							<li
								key={index}
								className="text-gray-600 flex items-start gap-3"
							>
								<span className="text-green-500 text-lg mt-1">•</span>
								{objective}
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Our Team Section */}
			<section className="py-16 px-4 bg-white">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-bold flex items-center justify-center gap-3">
						<AiOutlineTeam className="text-green-500" /> Meet Our Team
					</h2>
					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
								name: 'Mustapha',
								role: 'Head of Programs',
								image: '/images/hop.jpg', // Replace with Mustapha's image
							},
						].map((member, index) => (
							<div
								key={index}
								className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
							>
								<Image
									src={member.image}
									alt={member.name}
									width={150} // Set fixed width
									height={150} // Set fixed height
									className="mx-auto rounded-full border-4 border-green-500"
								/>
								<h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
								<p className="text-gray-600">{member.role}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Sustainability and Impact Section */}
			<section className="bg-gray-50 py-16 px-4 text-center">
				<h2 className="text-4xl font-bold">Sustainability & Impact</h2>
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
					<h2 className="text-4xl font-bold flex items-center justify-center gap-3">
						<MdOutlineContactMail className="text-white" /> Join Us in Making a
						Difference
					</h2>
					<p className="mt-4 text-lg max-w-2xl mx-auto">
						Become a part of our journey to empower African youth through
						technology. Whether you want to learn, partner, or volunteer,
						there’s a place for you at TechVerge Africa.
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
