// src/pages/Home.js
import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import ServicesSlider from '../components/ServicesSlider';
import WhoWeAre from '../components/WhoWeAre';
import ImageSlider from '../components/ImageSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import OurProducts from '../components/OurProducts';
import OurApproach from '../components/OurApproach';
import heroImage from '../assets/hero-image.png';
import OurStats from '../components/OurStats';
import TechStack from '../components/TechStack';
import DevelopmentProcess from '../components/DevelopmentProcess';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <ServicesSlider />
      <WhoWeAre />
      {/* <ImageSlider /> */}
      <TestimonialSlider/> 
      <OurProducts/> 
      <OurApproach/> 
      <OurStats/> 
      <TechStack/> 
      <DevelopmentProcess/> 
      <Footer />
      
    </div>

    
  );
};

export default Home;
