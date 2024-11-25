// SideBar.js
import { memo } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Close icon from React Icons
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
	setShowGreeceLanguageState,
	setShowEnglishLanguageState,
	selectLanguage,
} from "../../features/language/languageSlice";

import classes from "./MainNavigation.module.css";
import BackDrop from "../UI/backdrop";

const SideBar = ({ burgerMenuStatus, setBurgerMenuStatus }) => {
	const dispatch = useDispatch();
	const englishLanguage = useSelector(selectLanguage);

	const showEnglishLanguage = () => {
		dispatch(setShowEnglishLanguageState());
	};

	const showGreeceLanguage = () => {
		dispatch(setShowGreeceLanguageState());
	};

	return (
		<>
			{burgerMenuStatus && (
				<BackDrop>
					<nav
						className={classes["side-nav"]}
						style={{
							transform: !burgerMenuStatus
								? "translateX(100%)"
								: "translateX(0%)",
						}}
					>
						{/* Close Button */}
						<button
							onClick={() => setBurgerMenuStatus(false)} 
							className={classes.closeButton}
						>
							<AiOutlineClose size={24} />
						</button>

						{/* Menu Items in English */}
						{englishLanguage && (
							<ul>
								<li onClick={() => setBurgerMenuStatus(false)}>
									<Link href="/">Home</Link>
								</li>
								<li onClick={() => setBurgerMenuStatus(false)}>
									<Link href="/about-us">About us</Link>
								</li>
								{/* <li onClick={() => setBurgerMenuStatus(false)}>
									<Link href="/product">Products</Link>
								</li> */}
								<li onClick={() => setBurgerMenuStatus(false)}>
									<Link href="/contact">Contact</Link>
								</li>
								<li className="select">
									<select
										required
										onChange={() => {
											showGreeceLanguage();
											setBurgerMenuStatus(false);
										}}
									>
										<option selected disabled>
											English
										</option>
										<option>Greek</option>
									</select>
								</li>
							</ul>
						)}

						{/* Menu Items in Greek */}
						{!englishLanguage && (
							<ul>
								<li onClick={() => setBurgerMenuStatus(false)}>
									<Link href="/">Αρχική</Link>
								</li>
								<li onClick={() => setBurgerMenuStatus(false)}>
									<Link href="/about-us">Για εμάς</Link>
								</li>
								<li onClick={() => setBurgerMenuStatus(false)}>
									<Link href="/product">Προϊόντα</Link>
								</li>
								<li onClick={() => setBurgerMenuStatus(false)}>
									<Link href="/contact">Επικοινωνία</Link>
								</li>
								<li className="select">
									<select
										required
										onChange={() => {
											showEnglishLanguage();
											setBurgerMenuStatus(false);
										}}
									>
										<option selected disabled>
											Greek
										</option>
										<option>English</option>
									</select>
								</li>
							</ul>
						)}
					</nav>
				</BackDrop>
			)}
		</>
	);
};

export default memo(SideBar);
