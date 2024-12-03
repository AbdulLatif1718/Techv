/** @format */

import { Fragment } from "react";
import { Analytics } from '@vercel/analytics/next';
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

function Layout(props) {
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
