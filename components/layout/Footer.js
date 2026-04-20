import React from 'react';
import Link from 'next/link'; // Import Link component from next/link
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-black text-white py-20 border-t border-white/5">
			<div className="max-w-7xl mx-auto px-6">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
					<div className="col-span-1 md:col-span-2">
						<h2 className="text-2xl font-bold tracking-tight mb-4">TechVerge <span className="text-emerald-500">Africa</span></h2>
						<p className="text-gray-400 max-w-sm font-light leading-relaxed">
							Building the foundational systems required for Africa&apos;s digital sovereignty—from AI-native talent pools to sovereign data systems.
						</p>
					</div>

					<div>
						<h3 className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-6">Navigation</h3>
						<ul className="space-y-4 text-sm font-medium text-gray-400">
							<li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
							<li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
							<li><Link href="/our-team" className="hover:text-white transition-colors">Our Team</Link></li>
							<li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
						</ul>
					</div>

					<div>
						<h3 className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-6">Connect</h3>
						<ul className="space-y-4 text-sm font-medium text-gray-400">
							<li><a href="mailto:info@techverge.africa" className="hover:text-white transition-colors">info@techverge.africa</a></li>
							<div className="flex space-x-4 pt-2">
								<a href="https://web.facebook.com/profile.php?id=61564878252192" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors"><FaFacebookF /></a>
								<a href="https://x.com/TechvergeAfrica" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors"><FaTwitter /></a>
								<a href="https://www.linkedin.com/company/techvergeafrica/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors"><FaLinkedinIn /></a>
							</div>
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="h-[1px] w-full bg-white/5 mb-8"></div>

				{/* Footer Bottom */}
				<div className="flex flex-col md:row justify-between items-center gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
					<p>&copy; {currentYear} TechVerge Africa. All rights reserved.</p>
					<div className="flex gap-6">
						<span>Privacy Policy</span>
						<span>Terms of Service</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
