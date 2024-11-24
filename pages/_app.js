/** @format */

import Head from "next/head";
import Router from "next/router";
import { store } from "../app/store";
import { Provider } from "react-redux";

import "../styles/globals.css";
import Layout from "../components/layout/layout";

import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
	// The size (height) of the progress bar.
	// Numeric values get converted to px.
	size: 2,

	// Color of the progress bar.
	// Also used for the glow around the bar.
	color: "#006aff",

	// Class name used for the progress bar element.
	className: "bar-of-progress",

	// How many milliseconds to wait before the progress bar
	// animation starts after calling .start().
	delay: 80,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<Head>
					<title>TechVerge Africa</title>
					<meta
						name='description'
						content='TechVerge Africa is a startup focused on empowering African youth through accessible technology education. We aim to bridge the gap between talent and opportunity, helping young minds develop skills, build tech solutions, and drive positive change.'
					/>
				</Head>

				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;

// adobe link
// https://xd.adobe.com/view/f8520c0a-fab2-4362-ab7f-f9b4540030ec-ad01/
