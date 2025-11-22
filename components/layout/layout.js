/** @format */

import { Fragment } from "react";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/next';
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

function Layout(props) {
	const router = useRouter();
	const isHomePage = router.pathname === '/';
	
	// Hide navigation and footer on home page (OS interface takes full control)
	if (isHomePage) {
		return (
			<Fragment>
				<main className="relative">{props.children}</main>
				<Analytics />
			</Fragment>
		);
	}

	return (
		<Fragment>
			<MainNavigation />
			<main>{props.children}</main>
			<Footer />
			<Analytics />
		</Fragment>
	);
}

export default Layout;
