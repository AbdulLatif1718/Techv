/** @format */

import React, { memo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../features/language/languageSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const englishLanguage = useSelector(selectLanguage);

  // Form State to handle progress, submission, and which form to display
  const [progress, setProgress] = useState(0);
  const [activeForm, setActiveForm] = useState("partnership");

  const firstNameReference = useRef();
  const lastNameReference = useRef(null);
  const phoneNumberReference = useRef(null);
  const emailReference = useRef(null);
  const companyNameReference = useRef(null);
  const textReference = useRef(null);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredFirstName = firstNameReference.current.value;
    const enteredLastName = lastNameReference.current.value;
    const enteredPhoneNumber = phoneNumberReference.current.value;
    const enteredEmail = emailReference.current.value;
    const enteredCompanyName = companyNameReference.current.value;
    const enteredText = textReference.current.value;

    console.log(
      "Form submitted with:",
      "First Name: ", enteredFirstName,
      "Last Name: ", enteredLastName,
      "Phone Number: ", enteredPhoneNumber,
      "Email: ", enteredEmail,
      "Company Name: ", enteredCompanyName,
      "Message: ", enteredText
    );

    // Reset form fields and progress bar
    firstNameReference.current.value = "";
    lastNameReference.current.value = "";
    phoneNumberReference.current.value = "";
    emailReference.current.value = "";
    companyNameReference.current.value = "";
    textReference.current.value = "";
    setProgress(0);
  };

  return (
    <>
      {englishLanguage && (
        <>
          {/* Navigation Bar to switch between forms */}
          <nav className="flex justify-center space-x-8 py-4 bg-gray-200">
            <button
              onClick={() => setActiveForm("partnership")}
              className={`text-lg font-medium ${activeForm === "partnership" ? "text-blue-600" : "text-gray-600"}`}
            >
              Partnership
            </button>
            <button
              onClick={() => setActiveForm("volunteering")}
              className={`text-lg font-medium ${activeForm === "volunteering" ? "text-blue-600" : "text-gray-600"}`}
            >
              Volunteering
            </button>
            <button
              onClick={() => setActiveForm("learning")}
              className={`text-lg font-medium ${activeForm === "learning" ? "text-blue-600" : "text-gray-600"}`}
            >
              Learning
            </button>
          </nav>

          {/* Form Content - Only show the active form */}
          {activeForm === "partnership" && (
            <section className="py-20">
              <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-6">Partner with TechVerge Africa</h1>
                <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
                  Join us in empowering Africa&apos;s youth through technology. If you&apos;re interested in a partnership, fill out the form below.
                </p>
                <form
                  onSubmit={submitFormHandler}
                  className="space-y-8 bg-white p-8 rounded-lg shadow-xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input
                      ref={firstNameReference}
                      placeholder="First Name"
                      type="text"
                      id="firstName"
                      name="firstName"
                      minLength="2"
                      required
                      className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out"
                    />
                    <input
                      ref={lastNameReference}
                      placeholder="Last Name"
                      type="text"
                      id="lastName"
                      name="lastName"
                      minLength="2"
                      required
                      className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out"
                    />
                  </div>

                  <input
                    ref={companyNameReference}
                    placeholder="Company Name"
                    type="text"
                    id="companyName"
                    name="companyName"
                    minLength="2"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out"
                  />

                  <input
                    ref={phoneNumberReference}
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out"
                  />

                  <input
                    ref={emailReference}
                    placeholder="Email Address"
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out"
                  />

                  <textarea
                    ref={textReference}
                    placeholder="Tell us about your partnership idea..."
                    rows="4"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out"
                  ></textarea>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
                    <div
                      className="h-2 bg-blue-600 rounded-full transition-all ease-in-out"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  <button
                    onClick={() => setProgress(100)} // Mock progress completion
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                    type="submit"
                  >
                    Submit Partnership
                  </button>
                </form>
              </div>
            </section>
          )}

          {activeForm === "volunteering" && (
            <section className="py-20">
              <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-6">Volunteer with TechVerge Africa</h1>
                <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
                  Want to help change lives? Join us in our mission by volunteering. Fill out the form below to get started.
                </p>
                <form
                  onSubmit={submitFormHandler}
                  className="space-y-8 bg-white p-8 rounded-lg shadow-xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input
                      ref={firstNameReference}
                      placeholder="First Name"
                      type="text"
                      id="firstName"
                      name="firstName"
                      minLength="2"
                      required
                      className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ease-in-out"
                    />
                    <input
                      ref={lastNameReference}
                      placeholder="Last Name"
                      type="text"
                      id="lastName"
                      name="lastName"
                      minLength="2"
                      required
                      className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ease-in-out"
                    />
                  </div>

                  <input
                    ref={phoneNumberReference}
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ease-in-out"
                  />

                  <input
                    ref={emailReference}
                    placeholder="Email Address"
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ease-in-out"
                  />

                  <textarea
                    ref={textReference}
                    placeholder="Why do you want to volunteer with us?"
                    rows="4"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ease-in-out"
                  ></textarea>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
                    <div
                      className="h-2 bg-orange-600 rounded-full transition-all ease-in-out"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  <button
                    onClick={() => setProgress(100)} // Mock progress completion
                    className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-all duration-300"
                    type="submit"
                  >
                    Submit Volunteering Application
                  </button>
                </form>
              </div>
            </section>
          )}

          {activeForm === "learning" && (
            <section className="py-20">
              <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-6">Learn with TechVerge Africa</h1>
                <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
                  Ready to upskill? Let us know what you&apos;d like to learn and how we can help you achieve your goals.
                </p>
                <form
                  onSubmit={submitFormHandler}
                  className="space-y-8 bg-white p-8 rounded-lg shadow-xl"
                >
                  <input
                    ref={firstNameReference}
                    placeholder="First Name"
                    type="text"
                    id="firstName"
                    name="firstName"
                    minLength="2"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ease-in-out"
                  />

                  <input
                    ref={lastNameReference}
                    placeholder="Last Name"
                    type="text"
                    id="lastName"
                    name="lastName"
                    minLength="2"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ease-in-out"
                  />

                  <input
                    ref={emailReference}
                    placeholder="Email Address"
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ease-in-out"
                  />

                  <textarea
                    ref={textReference}
                    placeholder="What would you like to learn?"
                    rows="4"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ease-in-out"
                  ></textarea>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
                    <div
                      className="h-2 bg-teal-600 rounded-full transition-all ease-in-out"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  <button
                    onClick={() => setProgress(100)} // Mock progress completion
                    className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300"
                    type="submit"
                  >
                    Submit Learning Interest
                  </button>
                </form>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default memo(Contact);
