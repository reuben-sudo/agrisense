// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-agriBlue-deep text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <p className="text-lg font-semibold mb-2">AgriSense</p>
          <p className="text-sm">Empowering Farmers, Nurturing Growth.</p>
        </div>
        <div className="mb-4 text-sm">
          <p>Contact: kokanir97@gmail.com</p>
          <p>Phone: +254 725 095 972</p> {/* Replace with actual number */}
        </div>
        <div className="border-t border-agriBlue-dark pt-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} AgriSense. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;