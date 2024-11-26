import React, { useState } from "react";

const Contact = () => {
  const [activeForm, setActiveForm] = useState("partnership");
  const [progress, setProgress] = useState(0);

  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    partnershipInterest: "",
    details: "",
    country: "",
    skillset: "",
    availability: "",
    education: "",
    fieldOfInterest: "",
    learningGoals: "",
  });

  // Update state with form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission to Formspree
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProgress(50); // Update the progress bar to 50% when submission starts

    try {
      // Send form data to Formspree using fetch
      const response = await fetch("https://formspree.io/f/mwpkrldb", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setProgress(100); // Update the progress bar to 100% on successful submission
        
        // Clear the form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          partnershipInterest: "",
          details: "",
          country: "",
          skillset: "",
          availability: "",
          education: "",
          fieldOfInterest: "",
          learningGoals: "",
        });
      } else {
        alert("There was an error submitting the form.");
        setProgress(0); // Reset progress bar on error
      }
    } catch (error) {
      alert("Error occurred while submitting the form.");
      setProgress(0); // Reset progress bar on error
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className="flex justify-center space-x-8 py-4 bg-gray-200">
        <button
          onClick={() => setActiveForm("partnership")}
          className={`text-lg font-medium ${
            activeForm === "partnership" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          Partnership
        </button>
        <button
          onClick={() => setActiveForm("volunteering")}
          className={`text-lg font-medium ${
            activeForm === "volunteering" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          Volunteering
        </button>
        <button
          onClick={() => setActiveForm("learning")}
          className={`text-lg font-medium ${
            activeForm === "learning" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          Learning
        </button>
      </nav>

      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Partnership Form Section */}
          {activeForm === "partnership" && (
            <section className="space-y-8 bg-white p-8 rounded-lg shadow-xl">
              <h1 className="text-4xl font-bold text-center mb-4">
                Partner with TechVerge Africa
              </h1>
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/manypegv" // Formspree endpoint
                method="POST"
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company/Organization Name"
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="Website (Optional)"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  name="partnershipInterest"
                  value={formData.partnershipInterest}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Partnership Interest</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="investment">Investment</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Details about your Partnership Idea..."
                  rows="4"
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
                  type="submit"
                >
                  Submit Partnership
                </button>
              </form>
            </section>
          )}

          {/* Volunteering Form Section */}
          {activeForm === "volunteering" && (
            <section className="space-y-8 bg-white p-8 rounded-lg shadow-xl">
              <h1 className="text-4xl font-bold text-center mb-4">
                Volunteer with TechVerge Africa
              </h1>
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xqakypvj" // Formspree endpoint for volunteering
                method="POST"
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Country of Residence"
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="skillset"
                  value={formData.skillset}
                  onChange={handleInputChange}
                  placeholder="Skillset and Expertise"
                  rows="4"
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <textarea
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  placeholder="Why do you want to volunteer?"
                  rows="4"
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
                  type="submit"
                >
                  Submit Volunteering
                </button>
              </form>
            </section>
          )}

          {/* Learning Form Section */}
          {activeForm === "learning" && (
            <section className="space-y-8 bg-white p-8 rounded-lg shadow-xl">
              <h1 className="text-4xl font-bold text-center mb-4">
                Learn with TechVerge Africa
              </h1>
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/mwpkrldb"  // Formspree endpoint for learning
                method="POST"
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Educational Background</option>
                  <option value="highschool">High School</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                  <option value="other">Other</option>
                </select>
                <select
                  name="fieldOfInterest"
                  value={formData.fieldOfInterest}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Field of Interest</option>
                  <option value="webdev">Web Development</option>
                  <option value="datascience">Data Science</option>
                  <option value="ai">AI/ML</option>
                  <option value="uiux">UI/UX</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="learningGoals"
                  value={formData.learningGoals}
                  onChange={handleInputChange}
                  placeholder="What do you hope to achieve through learning?"
                  rows="4"
                  required
                  className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
                  type="submit"
                >
                  Submit Learning Application
                </button>
              </form>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
