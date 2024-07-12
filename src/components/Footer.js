import React from "react";
import logo from '../assets/logo-white.png';


const Footer = () => {

  return (
    <div>
        <div className="bg-slate-950">
          <div className=" py-8">
              <div className="flex flex-wrap justify-center space-x-10  items-center"> 
                  <div className="px-14 py-4">
                    <img src={logo} className="w-full" alt="footer-image"></img>
                  </div>
                  <div className="px-14 py-4">
                    <p className="text-left text-md font-bold text-white pt-2 ">Home</p>
                    <p className="text-left text-md font-bold text-white pt-2 ">Services</p>
                    <p className="text-left text-md font-bold text-white pt-2 ">Who we are</p>
                  </div>
                  <div className="px-14 py-4">
                    <p className="text-left text-md font-bold text-white pt-2 ">Home</p>
                    <p className="text-left text-md font-bold text-white pt-2 ">Services</p>
                    <p className="text-left text-md font-bold text-white pt-2 ">Who we are</p>
                  </div>

                  <div className="px-14 py-4">
                    <p className="text-left text-md font-bold text-white pt-2 ">Home</p>
                    <p className="text-left text-md font-bold text-white pt-2 ">Services</p>
                    <p className="text-left text-md font-bold text-white pt-2 ">Who we are</p>
                  </div>

                  <div className="px-14 py-4">
                    <p className="text-left text-md font-bold text-white pt-2 ">Home</p>
                    <p className="text-left text-md font-bold text-white pt-2 ">Services</p>
                    <p className="text-left text-md font-bold text-white pt-2 ">Who we are</p>
                  </div>
                  
                  
              </div>
              <div className="mx-auto justify-center items-center"> 
                  <div className="mt-10">
                    <p className="text-center text-md text-white font-semibold">© 2024 Neticx. All rights reserved.</p>
                  </div>
              </div>
          </div>
      </div>
    </div>

  );
};

export default Footer;
