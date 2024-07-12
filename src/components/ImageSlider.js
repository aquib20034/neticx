import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sampleImage1 from '../assets/logo1.png'; // Update the path as per your image location
import sampleImage2 from '../assets/logo2.png'; // Update the path as per your image location
import sampleImage3 from '../assets/logo3.png'; // Update the path as per your image location
import sampleImage4 from '../assets/logo4.png'; // Update the path as per your image location



const ImageSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "250px",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  return (
    <div className="">
      <div className="mt-16 bg-gradient-to-r from-slate-100 from-20% via-slate-200 via-60% to-slate-100 to-20%... py-10">
        <div className="container mx-auto">
          <Slider {...settings}>
            <div className="px-4">
              <img src={sampleImage1} alt="Image 1" className="w-100 h-24" />
            </div>
            <div className="px-4">
              <img src={sampleImage2} alt="Image 2" className="w-100 h-24" />
            </div>
            <div className="px-4">
              <img src={sampleImage3} alt="Image 3" className="w-100 h-24" />
            </div>
            <div className="px-4">
              <img src={sampleImage4} alt="Image 4" className="w-100 h-24" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
