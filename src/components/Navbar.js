// src/Navbar.js
import React, { useState } from 'react';
import Cart from './Cart';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(value.length > 0);
  };

  const handleBlur = () => {
    // Use a timeout to prevent dropdown from closing immediately when clicking on results
    setTimeout(() => setShowDropdown(false), 100);
  };

  const searchResults = ['Result 1', 'Result 2', 'Result 3']; // Mock search results

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" className="text-xl font-bold">
          Logo
        </a>
      </div>

      {/* Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onBlur={handleBlur}
          onFocus={() => setShowDropdown(searchTerm.length > 0)}
          placeholder="Search..."
          className="w-full p-2 rounded bg-gray-700 focus:outline-none"
        />
        {showDropdown && (
          <ul className="absolute z-10 w-full bg-white text-black mt-1 rounded shadow-lg">
            {searchResults.map((result, index) => (
              <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
                {result}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        {['Page 1', 'Page 2', 'Page 3'].map((page, index) => (
          <a key={index} href={`/${page.toLowerCase().replace(' ', '')}`} className="hover:underline">
            {page}
          </a>
        ))}
      </div>

      <Cart itemCount={100} />

      {/* User Profile Avatar */}
      <div className="flex items-center">
        <a href="/profile" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500">
          <span className="text-xl">👤</span> {/* Placeholder for Avatar */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

