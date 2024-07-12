// src/components/MainContent.js
import React from 'react';
import heroImage from '../assets/hero-image.png';

const Header = () => {
  return (
    <div className="container mx-auto px-24 py-8 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
      <div className="lg:w-1/2 my-6 py-12">
        <h1 className="text-4xl mt-16">
          The Right <span className="text-customRed font-bold">Partner</span> you
        </h1>
        <h1 className="text-gray-900 text-4xl font-bold mt-2"> Need To Innovate</h1>
        <p className="mt-4 text-gray-600">
          STRONG TECHNOLOGY TEAMS FOR YOUR SUSTAINED GROWTH
        </p>
        <div className="mt-8 flex justify-center lg:justify-start space-x-4">
          <button className="bg-customRed text-white px-4 py-2 rounded">Contact Us</button>
          <button className="border border-customRed px-4 py-2 rounded text-black font-medium">Get Free Consulting</button>
        </div>
      </div>
      <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
        <img src={heroImage} alt="Innovation" className="max-w-full" />
      </div>
    </div>
  );
};

export default Header;
