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
					content='TechVerge Africa is an organization that empowers youth, drives innovation, and creates impactful solutions using emerging technologies. Our goal is to be Africa’s leading innovation hub, fostering collaboration to benefit both local communities and the world.'
				/>
				<link rel='icon' href='/favicon3.ico' />
			</Head>

			<HomePageComponent />
		</Fragment>
	);
}
