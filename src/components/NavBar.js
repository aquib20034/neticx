// src/components/NavBar.js
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


const NavBar = () => {
  return (
    <div className="w-full h-13 px-4 md:px-4 py-1 bg-white flex justify-between items-center shadow-md">
      <div className="">
        <img src={logo} alt="Innovation"  />
      </div>

      <nav className="md:flex hidden space-x-12 space">
        <Link to="/" className="text-gray-600 font-medium cursor-pointer">Home</Link>
        <Link to="/services" className="text-gray-600 font-medium cursor-pointer">Services</Link>
        <Link to="/who-we-are" className="text-gray-600 font-medium cursor-pointer">Who We Are</Link>
        <Link to="/products" className="text-gray-600 font-medium cursor-pointer">Products</Link>
        <Link to="/approach" className="text-gray-600 font-medium cursor-pointer">Approach</Link>
        <Link to="/portfolio" className="text-gray-600 font-medium cursor-pointer">Portfolio</Link>
      </nav>
      
      <Link to="/contact-us" className="hidden md:block px-4 py-2  text-white bg-customRed rounded font-medium cursor-pointer">Contact us</Link>
      <div className='md:hidden'>
        <a href='#' className='text-6xl'>&#8801;</a>
      </div>
    </div>
  );
};

export default NavBar;
