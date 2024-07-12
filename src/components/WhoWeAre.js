import React from 'react';
import aboutUs from '../assets/about-us.png';

const WhoWeAre = () => {
  return (
      <div className="px-24 container mx-auto py-8 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left mt-16">
        <div className="lg:w-1/2 my-6 py-12">
          <div className='w-36 h-1 border-b-4 flex justify-center border-customRed rounded-2xl my-2 md:my-5'></div>
          <h1 className="text-gray-900 text-4xl font-bold mt-2">Who We Are?</h1>
          <p className="mt-4 mr-8 text-gray-600">
            <span className='text-customRed font-bold'>NETICX </span>, a software development company, helps to digitize businesses by focusing on clients’ business challenges, needs, and pain points, and by providing business goals-oriented software solutions, including expertise in AI-driven solutions. We value close, transparent cooperation and encourage our clients to participate actively in the project development life cycle.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <a href="#" className="text-red-600 font-semibold">Explore our Services &rarr;</a>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <img src={aboutUs} alt="Innovation" className="max-w-full" />
        </div>
      </div>
  );
};

export default WhoWeAre;
