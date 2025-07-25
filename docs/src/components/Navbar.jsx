// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 dark:bg-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700 dark:text-blue-300">
          AgriSense
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-700 dark:hover:text-blue-400">Home</Link>
          <Link to="/market" className="hover:text-blue-700 dark:hover:text-blue-400">Market</Link>
          <Link to="/upload" className="hover:text-blue-700 dark:hover:text-blue-400">Upload</Link>
          <Link to="/ai" className="hover:text-blue-700 dark:hover:text-blue-400 font-semibold">🧠 AI Assistant</Link>
          <Link to="/dashboard" className="hover:text-blue-700 dark:hover:text-blue-400">📊 Dashboard</Link>
          <Link to="/about" className="hover:text-blue-700 dark:hover:text-blue-400">About Us</Link> {/* ✅ New Link */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
