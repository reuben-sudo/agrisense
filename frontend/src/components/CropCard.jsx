import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const CropCard = ({ crop }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-blue-50 rounded-lg shadow-md p-4 hover:shadow-lg transition">
        <img
          src={crop.image}
          alt={crop.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">{crop.name}</h2>
        <p className="text-blue-700 font-medium">{crop.price}</p>
        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Contact Seller
        </button>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded bg-white p-6 space-y-4 shadow-xl">
            <Dialog.Title className="text-xl font-bold">Contact {crop.name} Seller</Dialog.Title>
            <p className="text-gray-700">📞 Phone: 0712 345 678</p>
            <p className="text-gray-700">📍 Location: Nairobi</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default CropCard;
