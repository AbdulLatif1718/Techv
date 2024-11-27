import { memo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook
import { useDispatch, useSelector } from "react-redux";
import {
	setShowGreeceLanguageState,
	setShowEnglishLanguageState,
	selectLanguage,
} from "../../features/language/languageSlice";
import BackDrop from "../UI/backdrop";

const SideBar = ({ burgerMenuStatus, setBurgerMenuStatus }) => {
	const currentYear = new Date().getFullYear();
	const dispatch = useDispatch();
	const englishLanguage = useSelector(selectLanguage);
	const router = useRouter(); // Get the current route

	const showEnglishLanguage = () => {
		dispatch(setShowEnglishLanguageState());
	};

	const showGreeceLanguage = () => {
		dispatch(setShowGreeceLanguageState());
	};

	// Function to check if a link is active
	const isActive = (path) => router.pathname === path;

	return (
		<>
			{burgerMenuStatus && (
				<BackDrop>
					<div
						className={`fixed top-0 right-0 h-full bg-gradient-to-b from-gray-50 to-gray-100 shadow-2xl z-50 w-4/5 max-w-xs transform transition-transform duration-300 ${burgerMenuStatus ? "translate-x-0" : "translate-x-full"
							}`}
						aria-hidden={!burgerMenuStatus}
					>
						{/* Close Button */}
						<button
							onClick={() => setBurgerMenuStatus(false)}
							className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
							aria-label="Close Sidebar"
						>
							<AiOutlineClose size={28} />
						</button>

						{/* Header */}
						<div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
							<h2 className="text-lg font-semibold text-gray-700">
								{englishLanguage ? "Menu" : "Μενού"}
							</h2>
						</div>

						{/* Menu Items */}
						<ul className="mt-4 px-6 space-y-4">
							<li>
								<Link
									href="/"
									className={`block font-medium px-4 py-2 rounded-lg transition ${isActive("/")
											? "bg-blue-500 text-white"
											: "text-gray-800 hover:bg-gray-200 hover:text-gray-900"
										}`}
									onClick={() => setBurgerMenuStatus(false)}
								>
									{englishLanguage ? "Home" : "Αρχική"}
								</Link>
							</li>
							<li>
								<Link
									href="/about-us"
									className={`block font-medium px-4 py-2 rounded-lg transition ${isActive("/about-us")
											? "bg-blue-500 text-white"
											: "text-gray-800 hover:bg-gray-200 hover:text-gray-900"
										}`}
									onClick={() => setBurgerMenuStatus(false)}
								>
									{englishLanguage ? "About Us" : "Για εμάς"}
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className={`block font-medium px-4 py-2 rounded-lg transition ${isActive("/contact")
											? "bg-blue-500 text-white"
											: "text-gray-800 hover:bg-gray-200 hover:text-gray-900"
										}`}
									onClick={() => setBurgerMenuStatus(false)}
								>
									{englishLanguage ? "Contact" : "Επικοινωνία"}
								</Link>
							</li>
						</ul>

						{/* Language Selector */}
						<div className="mt-6 px-6">
							<label
								htmlFor="language-select"
								className="block text-sm font-medium text-white"
							>
								{englishLanguage ? "Language" : "Γλώσσα"}:
							</label>
							<select
								id="language-select"
								className="mt-2 block w-full p-2 text-white bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
								onChange={(e) => {
									e.target.value === "English"
										? showEnglishLanguage()
										: showGreeceLanguage();
									setBurgerMenuStatus(false);
								}}
							>
								<option value="English" selected={englishLanguage}>
									English
								</option>
								<option value="Greek" selected={!englishLanguage}>
									Greek
								</option>
							</select>
						</div>

						{/* Footer */}
						<footer className="absolute bottom-4 w-full px-6 text-center text-sm text-gray-500">

							<p className="text-center md:text-left mb-6 md:mb-0">
								&copy; {currentYear} TechVerge Africa. All rights reserved.
							</p>

						</footer>
					</div>
				</BackDrop>
			)}
		</>
	);
};

export default memo(SideBar);
