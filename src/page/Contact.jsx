// src/pages/ContactUsPage.js
import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-gradient-to-b from-blue-500 via-blue-700 to-blue-900 text-white min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>

        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-200">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-2 border-gray-300 p-3 text-gray-800 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-200">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-2 border-gray-300 p-3 text-gray-800 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-200">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border-2 border-gray-300 p-3 text-gray-800 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="How can we assist you today?"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
