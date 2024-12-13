/** @format */

import Head from "next/head";
import React, { Fragment } from "react";

import HomePageComponent from "../components/home-page/home-page";

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>TechVerge Africa</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<meta
					name='description'
					content='TechVerge Africa is a startup dedicated to empowering African youth and driving global innovation through technology education, digital solutions, and community building.'
				/>
				<link rel='icon' href='/favicon3.ico' />
			</Head>

			<HomePageComponent />
		</Fragment>
	);
}
