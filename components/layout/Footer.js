import React from 'react';
import Link from 'next/link'; // Import Link component from next/link
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-center md:text-left mb-6 md:mb-0">
						<h2 className="text-2xl font-bold">TechVerge Africa</h2>
						<p className="mt-2">Empowering Africa with top-notch tech education</p>
					</div>
					<ul className="flex space-x-8 mb-6 md:mb-0">
						<li><Link href="/"><a className="hover:text-green-400">Home</a></Link></li>
						<li><Link href="/courses"><a className="hover:text-green-400">Courses</a></Link></li>
						<li><Link href="/blog"><a className="hover:text-green-400">Blog</a></Link></li>
						<li><Link href="/jobs"><a className="hover:text-green-400">Jobs/Internships</a></Link></li>
						<li><Link href="/contact"><a className="hover:text-green-400">Contact</a></Link></li>
					</ul>
				</div>
				<div className="flex flex-col md:flex-row justify-between items-center mt-6">
					<p className="text-center md:text-left mb-6 md:mb-0">
						&copy; {new Date().getFullYear()} TechVerge Africa. All rights reserved.
					</p>
					<div className="flex space-x-4">
						<a href="https://www.facebook.com" className="hover:text-green-400" target="_blank" rel="noopener noreferrer">
							<FaFacebookF size="1.5em" />
						</a>
						<a href="https://www.twitter.com" className="hover:text-green-400" target="_blank" rel="noopener noreferrer">
							<FaTwitter size="1.5em" />
						</a>
						<a href="https://www.linkedin.com" className="hover:text-green-400" target="_blank" rel="noopener noreferrer">
							<FaLinkedinIn size="1.5em" />
						</a>
						<a href="https://www.instagram.com" className="hover:text-green-400" target="_blank" rel="noopener noreferrer">
							<FaInstagram size="1.5em" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
