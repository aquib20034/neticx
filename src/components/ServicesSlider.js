// src/components/ServicesSlider.js
import React, { useState } from "react";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: 'Mobile App Development',
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age. A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    icon: '📱'
  },
  {
    title: 'Web Design & Development',
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age. A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    icon: '💻'
  },
  {
    title: 'Software Testing Service',
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age. A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    icon: '🧪'
  },
  {
    title: 'Software Testing Service',
    description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age. A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    icon: '🧪'
  }
];

const ServicesSlider = () => {
  const [focusedSlide, setFocusedSlide] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "180px",
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    dots:true,
    beforeChange: (current, next) => setFocusedSlide(next),
     appendDots: dots => (
      <div className="mt-8">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        className={`w-3 h-3 rounded-full ${
          i === focusedSlide ? "bg-white outline-2 outline-double outline-white" : "outline-2 outline-double outline-white"
        }`}
      />
    ),

  };

  return (
    <div className="">
    <div className="bg-gradient-to-r from-red-900 from-20% via-red-700 via-60% to-red-900 to-20%... py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Services we offer</h2>
      </div>
      <div className='px-20'>
      <Slider {...settings}>
        {services.map((service, index) => (
            <div key={index} className={`p-4 ${focusedSlide === index ? "mt-10 " : ""}`}>
            <div className={`bg-white p-6 rounded-2xl w-80  ${focusedSlide === index ? "drop-shadow-xl" : ""}`} >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </div>
    </div>
  );
};

export default ServicesSlider;
