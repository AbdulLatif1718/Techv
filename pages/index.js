/** @format */
import Head from "next/head";
import React, { Fragment } from "react";
import HomePageComponent from "../components/home-page/home-page";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <title>TechVerge Africa | Building Africa Everyone Would Want To Live Through Technology</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="TechVerge Africa is a startup solving Africa's most pressing challenges through technology."
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techverge.africa/" />
        <meta property="og:title" content="TechVerge Africa | Leading Digital Innovation Ecosystem" />
        <meta property="og:description" content="Developing Africa's tech future through robotics, smart agriculture solutions, edutech, Fintech,healthtech innovations and smart infrastructures. Join our innovation community." />
        <meta property="og:image" content="https://cdn.techverge.africa/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://techverge.africa/" />
        <meta name="twitter:title" content="TechVerge Africa | Empowering Digital Creators" />
        <meta name="twitter:description" content="Africa's hub for emerging tech development — AI labs, blockchain solutions, and youth innovation programs." />
        <meta name="twitter:image" content="https://cdn.techverge.africa/twitter-card.jpg" />

        {/* Preconnect and Preload */}
        <link rel="preconnect" href="https://cdn.techverge.africa" />
        <link rel="preload" href="/videos/video1.webm" as="video" type="video/webm" />
        
        {/* Favicon Modernization */}
        <link rel="icon" type="image/ico" sizes="192x192" href="/favicon3.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.webp" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <HomePageComponent />
    </Fragment>
  );
}