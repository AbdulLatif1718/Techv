import React from 'react';
import Link from 'next/link'; // Import Link component from next/link
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-800 text-white py-12">
			<div className="max-w-7xl mx-auto px-4">
				{/* Main Footer Content */}
				<div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
					<div className="text-center md:text-left">
						<h2 className="text-2xl font-bold">TechVerge Africa</h2>
						<p className="mt-2 text-gray-400">Where African Knowledge and Innovation Sparks Global Impact</p>
					</div>

					<ul className="flex space-x-8 text-gray-400 mb-6 md:mb-0">
						<li><Link href="/" className="hover:text-green-400">Home</Link></li>
						<li><Link href="/about-us" className="hover:text-green-400">About</Link></li>
						{/* <li><Link href="/courses" className="hover:text-green-400">Courses</Link></li>
						<li><Link href="/blog" className="hover:text-green-400">Blog</Link></li>
						<li><Link href="/jobs" className="hover:text-green-400">Jobs/Internships</Link></li> */}
						<li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
					</ul>

					{/* Email Section */}
					<div className="text-center md:text-left">
						<p className="text-gray-400 mb-2">Contact us:</p>
						<a href="mailto:info@techverge.africa" className="hover:text-green-400">
							info@techverge.africa
						</a>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-gray-700 my-6"></div>

				{/* Social Media Links */}
				<div className="flex justify-center space-x-4">
					<a
						href="https://web.facebook.com/profile.php?id=61564878252192"
						aria-label="Facebook"
						className="hover:text-green-400"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebookF className="text-xl" />
					</a>
					<a
						href="https://x.com/TechvergeAfrica"
						aria-label="Twitter"
						className="hover:text-green-400"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter className="text-xl" />
					</a>
					<a
						href="https://www.linkedin.com/company/techvergeafrica/"
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

				{/* Footer Bottom */}
				<div className="text-center mt-6 text-gray-400">
					<p>&copy; {currentYear} TechVerge Africa. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
