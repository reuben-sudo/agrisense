// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-4">About AgriSense</h1>
      <p className="mb-4 text-lg">
        🌾 <strong>AgriSense</strong> is a smart farming platform that empowers Kenyan farmers using AI.
        With features like crop prediction, market uploads, weather updates, and data visualization,
        AgriSense supports smart and sustainable agriculture.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">💬 Support</h2>
      <p className="text-lg">
        Need help? Reach out to us at <a href="mailto:kokanir97@gmail.com" className="text-blue-600 underline">kokanir97@gmail.com</a>.
        We're happy to assist with technical issues, AI features, or feedback.
      </p>
    </div>
  );
};

export default About;
