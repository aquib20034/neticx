import React, { useState } from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sampleImage1 from '../assets/about-us.png'; // Update the path as per your image location
import sampleImage2 from '../assets/about-us.png'; // Update the path as per your image location
import sampleImage3 from '../assets/about-us.png'; // Update the path as per your image location


const testimonials = [
  {
    name: "Romeena De Silva",
    title: "Janet Cosmetics",
    image: sampleImage1,
    rating: 5,
    text: " Wouldn’t be hesitated to introduce their work to someone else."
  },
  {
    name: "Imran Khan",
    title: "Software Engineer",
    image: sampleImage2,
    rating: 5,
    text: "Neticx provided outstanding service. They are extremely reliable and their expertise in AI-driven solutions is impressive. I highly recommend them."
  },
  {
    name: "John Doe",
    title: "CEO, Example Co.",
    image: sampleImage3,
    rating: 5,
    text: "Neticx has transformed our business. Their team is professional, knowledgeable, and very efficient. I'm very satisfied with their services."
  }
];


const TestimonialSlider = () => {
  const [focusedSlide, setFocusedSlide] = useState(0);

  const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (current, next) => setFocusedSlide(next),
     appendDots: dots => (
      <div className="mt-8">
        <ul className="flex item-center justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        className={`w-3 h-3 rounded-full ${
          i === focusedSlide ? "bg-customRed outline-2 outline-double outline-customRed" : "outline-2 outline-double outline-customRed"
        }`}
      />
    ),
    
    
    
  };

  return (
    <div className="w-100">
      <div className="container mx-auto py-8">
          <h1 className="text-center text-4xl mt-16">
          <div className='w-36 h-1 border-b-4 mx-auto border-customRed rounded-2xl my-2 md:my-5'></div>
            Why customers love
          </h1>
        <h2 className="text-center text-3xl font-bold mb-4 mt-2">working with us</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center p-14">
              <p className="text-lg italic wimb-4">{testimonial.text}</p>
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((star, i) => (
                  <span key={i} className="text-yellow-500">&#9733;</span>
                ))}
              </div>
              <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
