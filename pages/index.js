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
					content='TechVerge Africa is a startup focused on empowering African youth through accessible technology education. We aim to bridge the gap between talent and opportunity, helping young minds develop skills, build tech solutions, and drive positive change.'
				/>
				<link rel='icon' href='/favicon3.ico' />
			</Head>

			<HomePageComponent />
		</Fragment>
	);
}
