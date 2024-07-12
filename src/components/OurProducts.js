import React, { useState } from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sampleImage1 from '../assets/case-study.png'; // Update the path as per your image location
import sampleImage2 from '../assets/about-us.png'; // Update the path as per your image location
import sampleImage3 from '../assets/about-us.png'; // Update the path as per your image location


const records = [
  {
    title: "NFT Marketplace",
    image: sampleImage1,
    text: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry."
  },
  {
    title: "NFT Marketplace",
    image: sampleImage1,
    text: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry."
  },
  {
    title: "NFT Marketplace",
    image: sampleImage1,
    text: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry."
  },
  {
    title: "NFT Marketplace",
    image: sampleImage1,
    text: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry."
  }
];


const TestimonialSlider = () => {


  return (
    <div className="bg-gradient-to-r from-slate-100 from-20% via-slate-200 via-60% to-slate-100 to-20%... my-10 px-32">
       <div className="container mx-auto py-8">
          <h1 className="text-center text-4xl mt-16">
            <div className='w-36 h-1 border-b-4 mx-auto border-customRed rounded-2xl my-2 md:my-5'></div>
            Our Products
          </h1>
        
        {records.map((record, index) => (
        <div  key={index}  className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg mt-8">
          <div className="flex flex-1 justify-center items-center">
            <img src={record.image} alt={record.title} className="w-full rounded-lg" />
          </div>
          <div className="flex flex-1 flex-col justify-center md:ml-10 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold mb-4 px-10 pt-10">{record.title}</h2>
            <p className="text-gray-700 mb-4 px-10">
              {record.text}
            </p>
            <a href="#" className="text-purple-600 font-semibold flex items-center p-10">
              Explore
              <span className="ml-2">&rarr;</span>
            </a>
          </div>
        </div>

        ))}

        <div className="w-60 mx-auto text-center text-md p-4 outline-2 outline-double outline-customRed rounded-md text-slate-900 font-bold m-10 hover:cursor-pointer">
         Explore more products
        </div>

        </div>
    </div>
  );
};

export default TestimonialSlider;
