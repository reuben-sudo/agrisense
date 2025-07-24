// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Upload from "./pages/Upload";
import CropAI from "./pages/CropAI";       // ✅ AI Page
import Dashboard from "./pages/Dashboard"; // ✅ Dashboard Page
import About from "./pages/About";         // ✅ About Page

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/market" element={<Market />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/ai" element={<CropAI />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} /> {/* ✅ About Page Route */}
          </Routes>
        </main>

        <footer className="bg-blue-800 text-white text-center py-4 dark:bg-blue-900">
          &copy; 2025 AgriSense. Empowering Farmers in Kenya 🇰🇪.
        </footer>

        {/* 🌙 Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed bottom-4 right-4 bg-gray-800 dark:bg-gray-100 text-white dark:text-black px-4 py-2 rounded-full shadow-lg"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </Router>
  );
}

export default App;
