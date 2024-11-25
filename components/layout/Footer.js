import React from 'react';
import Link from 'next/link'; // Import Link component from next/link
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-800 text-white py-12">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-center md:text-left mb-6 md:mb-0">
						<h2 className="text-2xl font-bold">TechVerge Africa</h2>
						<p className="mt-2">Empowering Africa with top-notch tech education</p>
					</div>
					<ul className="flex space-x-8 mb-6 md:mb-0">
						<li><Link href="/" className="hover:text-green-400">Home</Link></li>
						<li><Link href="/about" className="hover:text-green-400">About</Link></li>
						{/* <li><Link href="/courses" className="hover:text-green-400">Courses</Link></li>
						<li><Link href="/blog" className="hover:text-green-400">Blog</Link></li>
						<li><Link href="/jobs" className="hover:text-green-400">Jobs/Internships</Link></li> */}
						<li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
					</ul>
				</div>
				<div className="flex flex-col md:flex-row justify-between items-center mt-6">
					<p className="text-center md:text-left mb-6 md:mb-0">
						&copy; {currentYear} TechVerge Africa. All rights reserved.
					</p>
					<div className="flex space-x-4">
						<a
							href="https://www.facebook.com"
							aria-label="Facebook"
							className="hover:text-green-400"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebookF className="text-xl" />
						</a>
						<a
							href="https://www.twitter.com"
							aria-label="Twitter"
							className="hover:text-green-400"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitter className="text-xl" />
						</a>
						<a
							href="https://www.linkedin.com"
							aria-label="LinkedIn"
							className="hover:text-green-400"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedinIn className="text-xl" />
						</a>
						<a
							href="https://www.instagram.com"
							aria-label="Instagram"
							className="hover:text-green-400"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram className="text-xl" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
