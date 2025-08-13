/** @format */

import { Fragment } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ContactComponent from "../components/contact-page/contact";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Connect with TechVerge Africa</title>
        <meta
          name="description"
          content="Partner, collaborate, or innovate with TechVerge Africa—Africa’s venture-building holding company shaping bold tech startups."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative mt-15 h-96 flex items-center justify-center bg-gradient-to-br from-green-800 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-us.webp"
            alt="Partners collaborating on tech ventures in Africa"
            className="absolute object-cover opacity-50 z-0"
            fill
            priority
            quality={80}
          />
        </div>
        <div className="relative z-10 p-8 rounded-xl max-w-4xl text-center">
          <h1 className="text-4xl md:text-2xl font-extrabold tracking-tight mb-4">
            {/* Let’s Build the Future of Africa—Together */}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Whether you&apos;re a founder, investor, or partner, we&apos;re excited to connect
            and explore how we can co-create game‑changing ventures across the continent.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Interested in building impactful startups with us? Reach out using the form below, we’re ready to collaborate.
          </p>
        </div>
        <ContactComponent />
      </section>

      {/* Community & Channels Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-4xl font-bold text-green-500 mb-4">
              Join Our Network
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Stay connected via our WhatsApp, Telegram, and Discord communities.
              Be the first to hear about venture opportunities, insights, and exclusive events.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://whatsapp.com/channel/0029VaDhgTs17Emu85qOvN1s"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-700 text-white rounded-lg shadow hover:bg-green-600 transition-all"
              >
                Join WhatsApp
              </a>
              <a
                href="https://t.me/+KV1naaYhb68yOWQ0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-500 transition-all"
              >
                Join Telegram
              </a>
              <a
                href="https://discord.gg/your-discord-link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-400 transition-all"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">What Partners Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Hear from founders and partners who’ve built alongside us.
          </p>
          <div className="mt-8 space-y-8">
            {[
              {
                text: "Partnering with TechVerge provided guidance and support that helped us scale rapidly. They’re not just investors—they build alongside us.",
                name: "Founder, AgriNova",
                role: "AgriTech Startup",
              },
              {
                text: "TechVerge's ability to connect technology with real-world problems has been a game-changer for our business.",
                name: "CEO, PayBloc",
                role: "FinTech Startup",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700">{t.text}</p>
                <h4 className="mt-4 text-xl font-semibold">{t.name}</h4>
                <p className="text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-green-700 to-green-500 text-white py-16 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Launch the Next Big Venture?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            If you&apos;re an entrepreneur, innovator, or strategic partner, reach out today and let&apos;s make an impact.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </Fragment>
  );
}

export default ContactPage;
