import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import CardSection from './components/CardSection';
import InfoSection from './components/InfoSection';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <SearchBar />
      <CardSection />
      {/* <InfoSection /> */}
    </div>
  );
}
