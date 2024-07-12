import React, { useState } from 'react';

import node from  '../assets/node.png' ;
import PHP from  '../assets/PHP.png' ;
import mysql from  '../assets/mysql.png' ;
import java from  '../assets/java.png' ;
import Python from  '../assets/Python.png' ;
import RubyOnRails from  '../assets/RubyOnRails.png' ;
import Go from  '../assets/Go.png' ;
import mon from  '../assets/mon 1.png' ;


const techStack = {
  Backend: [
    { name: 'Node.js', img: node  },
    { name: 'PHP', img: PHP  },
    { name: 'MySQL', img: mysql  },
    { name: 'Java', img: java  },
    { name: 'Python', img: Python  },
    { name: 'Ruby on Rails', img: RubyOnRails  },
    { name: 'Go', img: Go  },
    { name: 'MongoDB', img: mon  },
  ],Frontend: [
    { name: 'MongoDB', img: mon  },
  ],Databases: [
    { name: 'MongoDB', img: mon  },
  ],CMS: [
    { name: 'MongoDB', img: mon  },
  ],CLoudTesting: [
    { name: 'MongoDB', img: mon  },
  ],DevOps: [
    { name: 'MongoDB', img: mon  },
  ],
  // Add other categories here
};

const DevelopmentProcess = () => {
  const [activeCategory, setActiveCategory] = useState('Backend');

  return (
    <div className="px-32 mb-10">
      <div className="container mx-auto py-8">
          <h1 className="text-center text-4xl mt-16">
            <div className='w-36 h-1 border-b-4 mx-auto border-customRed rounded-2xl my-2 md:my-5'></div>
            How development 
          </h1>
        <h2 className="text-center text-3xl font-bold mb-4 mt-2">through Alcaline works</h2>

        <div className="flex flex-col items-center py-10 px-4">
          <div className="relative w-full max-w-5xl">
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 border-t-2 border-red-600"> </div> <div className="absolute inset-x-full top-1/2 transform -translate-y-1/2 ">
            <span role="img" aria-label="trophy" className="text-4xl">🏆</span>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-white shadow-md relative z-10">
                <h3 className="text-lg font-semibold mb-2">#1 Assemble the right team</h3>
                <p>We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-white shadow-md relative z-10">
                <h3 className="text-lg font-semibold mb-2">#3 Tech architecture</h3>
                <p>We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-white shadow-md relative z-10">
                <h3 className="text-lg font-semibold mb-2">#5 Code reviews</h3>
                <p>Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-white shadow-md relative z-10">
                <h3 className="text-lg font-semibold mb-2">#2 Sprint planning</h3>
                <p>Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-white shadow-md relative z-10">
                <h3 className="text-lg font-semibold mb-2">#4 Standups & weekly demos</h3>
                <p>Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-white shadow-md relative z-10">
                <h3 className="text-lg font-semibold mb-2">#6 Iterative delivery</h3>
                <p>We divide the implementation process into several checkpoints rather than a single deadline.</p>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};
export default DevelopmentProcess;
