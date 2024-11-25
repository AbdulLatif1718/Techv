import Image from 'next/image';

const AboutPage = () => {
	return (
		<div className="overflow-x-hidden mt-20">
			{/* Hero Section */}
			<section
				className="relative bg-gray-900 text-white flex items-center justify-center h-60 bg-cover bg-center"
				style={{
					backgroundImage: `url('/path/to/your/hero-image.jpg')`, // Replace this with your hero image
				}}
			>
				<div className="bg-black bg-opacity-60 p-6 text-center rounded-lg shadow-lg">
					<h1 className="text-5xl font-extrabold">About TechVerge Africa</h1>
					<p className="mt-4 text-lg">Empowering the next generation through technology education.</p>
				</div>
			</section>

			{/* Mission and Vision Section */}
			<section className="py-16 px-4 bg-white">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-bold">Our Mission and Vision</h2>
					<p className="mt-4 text-gray-700 max-w-2xl mx-auto">
						Our mission is to empower African youth through accessible technology education and drive global innovation. We envision a future where technology bridges the gap between opportunities and aspirations, fostering a community of skilled individuals ready to make an impact.
					</p>
				</div>
			</section>

			{/* Objectives Section */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-bold">Objectives</h2>
					<ul className="mt-8 space-y-4 text-left max-w-2xl mx-auto">
						{[
							'Reduce youth unemployment through digital literacy training and job placement.',
							'Develop innovative tech solutions addressing Africa’s unique challenges.',
							'Foster partnerships with educational institutions and businesses.',
							'Create a supportive community for knowledge sharing and collaboration.',
						].map((objective, index) => (
							<li key={index} className="text-gray-600">
								<span className="font-semibold">• </span>{objective}
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* Our Team Section */}
			<section className="py-16 px-4 bg-white">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-bold">Meet Our Team</h2>
					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
						{[
							{
								name: 'Sulley Abdul Latif',
								role: 'Co-founder & CEO',
								image: '/path/to/sulley-image.jpg', // Replace with Sulley's image
							},
							{
								name: 'Abdul-Moomin Is-Haq',
								role: 'Co-founder & CTO',
								image: '/path/to/abdul-image.jpg', // Replace with Abdul-Moomin's image
							},
							{
								name: 'Mustapha',
								role: 'Head of Programs',
								image: '/path/to/mustapha-image.jpg', // Replace with Mustapha's image
							},
						].map((member, index) => (
							<div
								key={index}
								className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
							>
								{/* Using the next/image component */}
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

			{/* Call to Action Section */}
			<section className="bg-green-500 text-white py-16 px-4">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-bold">Join Us in Making a Difference</h2>
					<p className="mt-4 text-lg max-w-2xl mx-auto">
						Become a part of our journey to empower African youth through technology. Whether you want to learn, partner, or volunteer, there’s a place for you at TechVerge Africa.
					</p>
					<button className="mt-8 px-6 py-3 bg-white text-green-500 rounded-lg hover:bg-gray-100 transition-all">
						Get Involved
					</button>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
