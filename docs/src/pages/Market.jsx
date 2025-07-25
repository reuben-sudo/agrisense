// src/pages/Market.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Market = () => {
  const [crops, setCrops] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios.get("http://localhost:5000/api/crops")
      .then((res) => setCrops(res.data))
      .catch((err) => console.error("Error fetching crops:", err));
  }, []);

  // 🔍 Filter logic
  const filteredCrops = crops.filter(crop => {
    const matchesSearch = crop.cropName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || crop.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 📋 Extract unique categories
  const uniqueCategories = ["All", ...new Set(crops.map(crop => crop.category || "Uncategorized"))];

  return (
    <div className="px-4 md:px-16 py-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">🌽 Marketplace</h2>

      {/* 🔎 Search & Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="Search crops..."
          className="px-4 py-2 border rounded-md shadow-sm w-full md:w-1/2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-sm w-full md:w-1/3"
        >
          {uniqueCategories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* 📦 Crops Grid */}
      {filteredCrops.length === 0 ? (
        <p className="text-gray-600">No crops found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCrops.map((crop, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform hover:scale-105">
              <img
                src={crop.imageUrl}
                alt={crop.cropName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-800">{crop.cropName}</h3>
                <p className="text-sm text-gray-600 italic mb-2">{crop.category || "Uncategorized"}</p>
                <p className="text-gray-700 text-sm">{crop.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Market;
