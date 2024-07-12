import React, { useState } from "react";

import sampleImage1 from '../assets/case-study.png'; // Update the path as per your image location


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

const FeatureCard = ({ iconColor, title, description }) => {
  return (
    <div className="border rounded-lg bg-white shadow-md p-14 flex items-center">
      <div className={`w-12 h-12 rounded-full flex-shrink-0 ${iconColor}`}></div>
      <div className="ml-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const OurApproach = () => {


  return (
    <div className="my-10 px-32">
       <div className="container mx-auto py-8">
          <h1 className="text-center text-4xl mt-16">
            <div className='w-36 h-1 border-b-4 mx-auto border-customRed rounded-2xl my-2 md:my-5'></div>
            Our design and
          </h1>
        <h2 className="text-center text-3xl font-bold mb-4 mt-2">development approach</h2>

        
        {records.map((record, index) => (
         <div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 md:space-x-6 p-6">
         <FeatureCard
           iconColor="bg-gray-800"
           title="UX Driven Engineering"
           description="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
         />
         <FeatureCard
           iconColor="bg-gradient-to-r from-blue-500 to-blue-300"
           title="Developing Shared Understanding"
           description="Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code."
         />
       </div>
        ))}
        </div>
    </div>
  );
};

export default OurApproach;
