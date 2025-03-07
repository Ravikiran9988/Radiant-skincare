import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed top-0 w-full z-10 p-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-500">
          <Link to="/">Radiant Skincare</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 items-center">
          <Link to="/" className="hover:text-pink-500">Home</Link>
          <Link to="/analysis" className="hover:text-pink-500">Consultation</Link>
          <Link to="/dashboard" className="hover:text-pink-500">Dashboard</Link>
          <Link to="/login" className="hover:text-pink-500">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute top-16 left-0 w-full">
          <Link to="/" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/analysis" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Consultation</Link>
          <Link to="/dashboard" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link>
          <Link to="/login" className="block py-2" onClick={() => setMobileMenuOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
}
