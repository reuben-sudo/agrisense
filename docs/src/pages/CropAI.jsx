import React, { useState } from "react";
import axios from "axios";

const CropAI = () => {
  const [formData, setFormData] = useState({
    temperature: "",
    humidity: "",
    soilType: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const response = await axios.post("http://localhost:5000/api/predict", formData);
      setResult(response.data.recommendedCrop);
    } catch (error) {
      setResult("Error getting recommendation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">
        🌿 AI Crop Advisor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Temperature (°C)</label>
          <input
            type="number"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Humidity (%)</label>
          <input
            type="number"
            name="humidity"
            value={formData.humidity}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Soil Type</label>
          <select
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            required
          >
            <option value="">Select soil type</option>
            <option value="Loam">Loam</option>
            <option value="Clay">Clay</option>
            <option value="Sandy">Sandy</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow"
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded dark:bg-green-800 dark:text-white">
          ✅ Recommended Crop: <strong>{result}</strong>
        </div>
      )}
    </div>
  );
};

export default CropAI;
