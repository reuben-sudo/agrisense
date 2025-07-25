// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Dashboard = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/crops")
      .then((res) => {
        setCrops(res.data);
      })
      .catch((err) => {
        console.error("Error fetching crops", err);
      });
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("AgriSense Crop Upload Summary", 14, 15);

    const tableData = crops.map((crop, index) => [
      index + 1,
      crop.cropName,
      crop.category || "N/A",
      crop.description || "—",
      crop.imageUrl,
    ]);

    doc.autoTable({
      head: [["#", "Crop Name", "Category", "Description", "Image URL"]],
      body: tableData,
      startY: 20,
    });

    doc.save("agrisense_summary.pdf");
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">📊 Dashboard Summary</h1>

      <button
        onClick={generatePDF}
        className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
      >
        📄 Export PDF Report
      </button>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Crop Name</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {crops.map((crop, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{crop.cropName}</td>
                <td className="border px-4 py-2">{crop.category || "N/A"}</td>
                <td className="border px-4 py-2">{crop.description}</td>
                <td className="border px-4 py-2">
                  <img
                    src={crop.imageUrl}
                    alt={crop.cropName}
                    className="h-16 w-auto object-cover rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
