/** @format */

import { Fragment } from "react";
import Head from "next/head";

import ContactComponent from "../components/contact-page/contact";

function ContactPage() {
	return (
		<Fragment>
			<Head>
				<title>Contact TechVerge Africa</title>
				<meta
					name='description'
					content="Whether you're interested in partnering with us, exploring educational opportunities, or have questions about our programs, we’d love to hear from you. Get in touch today and join us in empowering African youth through technology."
				/>
			</Head>

			{/* Hero Section for Contact Page */}
			<section className="mt-20 relative bg-gray-900 text-white flex items-center justify-center h-60 bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}>
				<div className="bg-black bg-opacity-60 p-6 text-center rounded-lg shadow-lg">
					<h1 className="text-5xl font-extrabold">Contact TechVerge Africa</h1>
					<p className="mt-4 text-lg">We are here to answer your questions and collaborate on opportunities to empower African youth through technology education.</p>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className="py-16 px-4 bg-white">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-bold">Get in Touch</h2>
					<p className="mt-4 text-gray-700 max-w-2xl mx-auto">
						Whether you want to learn more about our programs, explore partnership opportunities, or have any questions, our team is ready to connect with you. Fill out the form below, and we’ll get back to you shortly.
					</p>
				</div>
				<ContactComponent />
			</section>

			{/* Partners Section */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-bold">Our Partners</h2>
					<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
						We collaborate with organizations that share our mission of empowering African youth through technology. Together, we can make a bigger impact.
					</p>

					{/* Partners logos can go here */}
					<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
						{/* Example Partner logos */}
						{/* Replace these with actual partner logos */}
						<div className="relative bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105">
							<img src="/path-to-your-partner-logo.jpg" alt="Partner 1" className="w-full h-32 object-contain" />
						</div>
						{/* Add more logos */}
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="bg-green-500 text-white py-16 px-4">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-bold">Join Us in Making a Difference</h2>
					<p className="mt-4 text-lg max-w-2xl mx-auto">
						Become part of our mission to equip African youth with the skills and opportunities they need to succeed in the tech world. Whether you’re a student, educator, or organization, there’s a place for you to contribute.
					</p>
					<button className="mt-8 px-6 py-3 bg-white text-green-500 rounded-lg hover:bg-gray-100 transition-all">
						Get Involved
					</button>
				</div>
			</section>
		</Fragment>
	);
}

export default ContactPage;
