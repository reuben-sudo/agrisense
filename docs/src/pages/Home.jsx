// src/pages/Home.jsx
import React from "react";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-100 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-200 mb-4">
            AgriSense: Your Smart Farming Partner
          </h1>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-6">
            Empowering farmers with intelligent tools to monitor crop health, manage sales, and optimize yields.
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow-md">
            Get Started
          </button>
        </div>
      </section>

      {/* Weather Insights Section */}
      <section className="mt-8 px-4 md:px-16">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">🌦️ Weather Insights</h2>
        <WeatherCard city="Nairobi" />
      </section>
    </div>
  );
};

export default Home;
