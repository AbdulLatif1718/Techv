import React, { useState } from 'react';

const Contact = () => {
  const [activeForm, setActiveForm] = useState('founder');
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    website: '',
    inquiryType: '',
    message: '',
  });

  const formLabel = {
    founder: 'For Founders & Innovators',
    partner: 'For Investors & Partners',
    general: 'General Inquiries',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProgress(50);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: activeForm, ...formData }),
      });
      if (res.ok) {
        alert('Message sent! We’ll get back in 1 business day.');
        setProgress(100);
        setFormData({
          name: '',
          email: '',
          organization: '',
          website: '',
          inquiryType: '',
          message: '',
        });
      } else throw new Error();
    } catch {
      alert('Submission error. Please try again.');
      setProgress(0);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        {Object.keys(formLabel).map((key) => (
          <button
            key={key}
            onClick={() => setActiveForm(key)}
            className={`px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 
              ${
                activeForm === key
                  ? 'bg-green-700 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
          >
            {formLabel[key]}
          </button>
        ))}
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {formLabel[activeForm]}
        </h2>

        <p className="text-sm text-gray-500 mb-6 text-center">
          We typically respond within 1 business day.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
              className="p-3 border rounded"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              type="email"
              required
              className="p-3 border rounded"
            />
          </div>

          <input
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
            placeholder={
              activeForm === 'general'
                ? 'Your Organization (Optional)'
                : 'Organization / Startup'
            }
            className="w-full p-3 border rounded"
          />

          <input
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            placeholder="Website (Optional)"
            className="w-full p-3 border rounded"
          />

          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleInputChange}
            required
            className="w-full p-3 border rounded"
          >
            <option value="">Select Inquiry Type</option>
            <option value="build">We want to build</option>
            <option value="partner">Explore partnership</option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us more..."
            rows="4"
            required
            className="w-full p-3 border rounded"
          />

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-1 rounded mb-4">
            <div
              className="h-full bg-green-600 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition">
            {activeForm === 'founder'
              ? 'Share Your Idea'
              : activeForm === 'partner'
              ? 'Start Partnership'
              : 'Send Message'}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600 text-sm">
          Or reach us via{' '}
          <a
            href="mailto:info@techverge.africa"
            className="text-green-700 underline"
          >
            email
          </a>{' '}
          or connect on social media.
        </div>
      </div>
    </div>
  );
};

export default Contact;
