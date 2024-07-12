import React, { useState } from "react";

const OurStats = () => {

  return (
    <div className="bg-gradient-to-r from-red-900 from-20% via-red-700 via-60% to-red-900 to-20%... mt-10 px-16">
        <div className="container mx-auto py-12">
          <div className="flex flex-col md:flex-row justify-center items-center"> 
              <div className="px-16 py-4">
                <h1 className="text-center text-6xl text-white font-extrabold">
                  450+
                </h1>
                <p className="text-center text-2xl text-white font-semibold">Satisfied Clients</p>
              </div>

              <div className="px-16 py-4">
                <h1 className="text-center text-6xl text-white font-extrabold">
                  1200+
                </h1>
                <p className="text-center text-2xl text-white font-semibold">Projects</p>
              </div>

              <div className="px-16 py-4">
                <h1 className="text-center text-6xl text-white font-extrabold">
                  95k
                </h1>
                <p className="text-center text-2xl text-white font-semibold">Hours worked</p>
              </div>

              <div className="px-16 py-4">
                <h1 className="text-center text-6xl text-white font-extrabold">
                  24/7
                </h1>
                <p className="text-center text-2xl text-white font-semibold">Support</p>
              </div>

          </div>
      </div>
    </div>

  );
};

export default OurStats;
