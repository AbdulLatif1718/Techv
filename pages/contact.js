/** @format */

import { Fragment } from "react";
import Head from "next/head";
import ContactComponent from "../components/contact-page/contact";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact TechVerge Africa</title>
        <meta
          name="description"
          content="Partner with us, explore educational opportunities, or ask questions about our programs. Connect with TechVerge Africa to empower youth through technology."
        />
      </Head>

      {/* Hero Section */}
      <section
        className="mt-20 relative bg-gray-900 text-white flex items-center justify-center h-60 bg-cover bg-center"
        style={{ backgroundImage: `url('/path-to-your-image.jpg')` }} // Replace with your image path
      >
        <div className="bg-black bg-opacity-60 p-6 text-center rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-lg">
            Have questions or ideas? Let’s collaborate to empower African youth through technology.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Interested in our programs, partnerships, or volunteering? Fill out the form below, and our team will connect with you soon.
          </p>
        </div>
        <ContactComponent />
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Our Partners</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our mission is supported by incredible partners. Together, we are creating meaningful opportunities for African youth.
          </p>

          {/* Partner Logos */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Example Partner logos */}
            {[1, 2, 3, 4, 5].map((partner, index) => (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={`/path-to-partner-logo-${partner}.jpg`} // Replace with actual image paths
                  alt={`Partner ${partner}`}
                  className="w-full h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">What Our Partners Say</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            See how our partnerships are driving change and making a real difference.
          </p>
          <div className="mt-8 space-y-8">
            {[
              {
                text: "Working with TechVerge Africa has been an amazing experience. Their commitment to empowering youth through technology is inspiring.",
                name: "John Doe",
                role: "CEO, Partner Organization",
              },
              {
                text: "TechVerge Africa's innovative programs are opening doors for thousands of young people, and we’re proud to be part of that mission.",
                name: "Jane Smith",
                role: "Director of Partnerships",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700">{testimonial.text}</p>
                <h4 className="mt-4 text-xl font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-500 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Join Us in Making a Difference</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Partner with us to equip African youth with the skills and opportunities to thrive in the tech world. Your contribution makes a difference.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-green-500 rounded-lg hover:bg-gray-100 transition-all">
            Get Involved
          </button>
        </div>
      </section>
    </Fragment>
  );
}

export default ContactPage;
