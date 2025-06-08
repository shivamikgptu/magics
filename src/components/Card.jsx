import React from 'react';

export default function Card({ title, image }) {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h4 className="font-semibold text-lg">{title}</h4>
        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Explore</button>
      </div>
    </div>
  );
}