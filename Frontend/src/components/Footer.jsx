import React from 'react';
const Footer = () => {
  return (
    <footer className="text-center p-6 bg-gray-100 shadow-md mt-8">
      <p className="text-gray-700">&copy; 2025 Radiant Skincare | Stay Beautiful!</p>
      <div className="mt-2 space-x-4">
        <a href="/privacy" className="text-pink-500 hover:underline">Privacy Policy</a>
        <a href="/terms" className="text-pink-500 hover:underline">Terms of Service</a>
        <a href="/contact" className="text-pink-500 hover:underline">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
