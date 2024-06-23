// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-bold text-xl">FoodApp</span>
              </a>
            </div>

            {/* Primary Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Menu</a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</a>
              <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Contact</a>
            </div>
          </div>

          {/* Secondary Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Sign In</a>
            <a href="#" className="py-2 px-3 bg-yellow-400 text-yellow-900 rounded hover:bg-yellow-300 transition duration-300">Cart</a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu hidden md:hidden">
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Menu</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
