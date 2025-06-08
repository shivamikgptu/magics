
import React from 'react';
import { FaSearchLocation, FaUserFriends, FaRupeeSign, FaSearch } from 'react-icons/fa';


const navTabs = [
  'Buy',
  'Rent',
  'New Projects',
  'PG',
  'Plot',
  'Commercial',
  'Post Free Property Ad',
];

export default function SearchBar() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl mb-4">
        Find a home away from <span className="italic font-semibold">home</span>
      </h2>

      <div className="flex justify-center flex-wrap gap-6 mt-2 mb-6 text-gray-800 text-sm">
        {navTabs.map((tab, index) => (
          <span
            key={index}
            className={`cursor-pointer pb-1 ${tab === 'PG' ? 'border-b-2 border-red-600 font-semibold' : ''}`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 bg-white rounded-full shadow-lg px-4 py-2 w-full lg:w-3/4">
          <div className="flex items-center gap-2 w-full md:w-auto">
            <FaSearchLocation className="text-red-500" />
            <input type="text" placeholder="Dehradun" className="outline-none" />
            <span className="text-gray-400 hidden md:inline">Add more...</span>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <FaUserFriends className="text-red-500" />
            <select className="outline-none">
              <option>Occupancy Type</option>
              <option>Single</option>
              <option>Double</option>
            </select>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <FaRupeeSign className="text-red-500" />
            <select className="outline-none">
              <option>Budget</option>
              <option>Below ₹5000</option>
              <option>₹5000 - ₹10000</option>
              <option>Above ₹10000</option>
            </select>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center gap-1">
            <FaSearch /> Search
          </button>
        </div>

        <div className="mt-4 lg:mt-0 lg:w-1/4">
          <img src='data:image/jpeg;base64,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' alt="PG Banner" className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
}
