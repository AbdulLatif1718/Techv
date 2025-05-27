/** @format */

import Head from "next/head";
import Router from "next/router";
import { store } from "../app/store";
import { Provider } from "react-redux";
import { appWithTranslation } from 'next-i18next';

import "../styles/globals.css";
import Layout from "../components/layout/layout";

import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
	// The size (height) of the progress bar.
	// Numeric values get converted to px.
	size: 2,

	// Color of the progress bar.
	// Also used for the glow around the bar.
	color: "#ffff",

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
						content='TechVerge Africa is a startup solving Africa&apos;s most pressing challenges through technology. '
					/>
				</Head>

				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default appWithTranslation(MyApp);


