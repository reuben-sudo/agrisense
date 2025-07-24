import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [cropName, setCropName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Vegetable");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!cropName || !image) {
      setMessage("Crop name and image are required.");
      return;
    }

    const formData = new FormData();
    formData.append("cropName", cropName);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData);
      setMessage(response.data.message);
      setCropName("");
      setDescription("");
      setCategory("Vegetable");
      setImage(null);
    } catch (error) {
      setMessage("Upload failed.");
      console.error(error);
    }
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-agriBlue-dark">📤 Upload Your Crop</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="text"
          placeholder="Crop Name"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          required
        />

        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
          rows="3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded"
        >
          <option value="Vegetable">Vegetable</option>
          <option value="Fruit">Fruit</option>
          <option value="Grain">Grain</option>
          <option value="Herb">Herb</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full"
        />

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
        >
          Upload
        </button>
      </form>

      {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
    </section>
  );
};

export default Upload;
