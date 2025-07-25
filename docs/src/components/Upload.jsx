// src/pages/Upload.jsx
import React, { useState } from "react";

const Upload = () => {
  const [formData, setFormData] = useState({
    cropName: "",
    price: "",
    category: "Vegetable",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    console.log("Submitted crop:", formData);
    alert("Crop uploaded successfully!");
    // In future: integrate with your Flask backend here
  };

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Upload Crop</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Crop Name</label>
          <input
            type="text"
            name="cropName"
            value={formData.cropName}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Price (KES)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
          >
            <option>Vegetable</option>
            <option>Fruit</option>
            <option>Grain</option>
            <option>Herb</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Crop Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded shadow"
        >
          Upload
        </button>
      </form>
    </section>
  );
};

export default Upload;
