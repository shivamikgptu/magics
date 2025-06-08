import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const menuItems = [
  'Buy',
  'Rent',
  'Sell',
  'Home Loans',
  'Home Interiors',
  'MB Advice',
  'Help'
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">magicbricks</h1>
          <span className="text-sm hidden sm:inline">
            Dehradun <FaChevronDown className="inline-block ml-1 text-xs" />
          </span>
        </div>
        <div className="space-x-2 hidden sm:flex">
          <button>Login</button>
          <button className="bg-white text-black px-2 py-1 rounded-2xl">
            Post Property <span className="bg-yellow-400 text-xs ml-1 px-1 rounded">FREE</span>
          </button>
        </div>
        
        <button
          className="sm:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

    
      <div className="justify-center gap-6 py-2 bg-white shadow hidden sm:flex">
        {menuItems.map((item, i) => (
          <span key={i} className="text-sm text-gray-800 hover:text-red-600 cursor-pointer flex items-center">
            {item} <FaChevronDown className="ml-1 text-xs" />
            {item === 'MB Advice' && <span className="ml-1 bg-yellow-300 text-[10px] text-black rounded px-1">NEW</span>}
          </span>
        ))}
      </div>

      
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white shadow px-4 py-2 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {menuItems.map((item, i) => (
              <span key={i} className="text-base text-gray-800 hover:text-red-600 cursor-pointer flex items-center">
                {item} <FaChevronDown className="ml-1 text-xs" />
                {item === 'MB Advice' && <span className="ml-1 bg-yellow-300 text-[10px] text-black rounded px-1">NEW</span>}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <button className="text-left">Login</button>
            <button className="bg-white text-black px-2 py-1 rounded-2xl text-left border border-gray-300">
              Post Property <span className="bg-yellow-400 text-xs ml-1 px-1 rounded">FREE</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}