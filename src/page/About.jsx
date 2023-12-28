// src/pages/AboutUsPage.js
import React from "react";
import AboutUs from "../images/AboutUs.jpg";
const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Text Content */}
          <div>
            <p className="text-lg text-gray-800 mb-4">
              Welcome to BlinkCart, where cutting-edge technology meets
              unparalleled customer experience. We're not just about selling
              smartphones; we're here to redefine the way you connect,
              communicate, and live in the digital era.
            </p>

            <p className="text-lg text-gray-800 mb-4">
              In a world dominated by technology, we envisioned a place where
              mobile enthusiasts could find the latest devices, accessories, and
              unparalleled service all under one digital roof. BlinkCart was
              born out of a passion for innovation and a commitment to
              delivering more than just products.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="w-1/2 m-auto">
            <img src={AboutUs} alt="Team" className="rounded-md shadow-md " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
