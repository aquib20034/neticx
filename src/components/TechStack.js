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

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('Backend');

  return (

    <div className=" bg-gray-100 px-32">
       <div className="container mx-auto py-8">
          <h1 className="text-center text-4xl mt-16">
            <div className='w-36 h-1 border-b-4 mx-auto border-customRed rounded-2xl my-2 md:my-5'></div>
            Our 
          </h1>
        <h2 className="text-center text-3xl font-bold mb-4 mt-2">Tech Stack</h2>

      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(techStack).map((category) => (
          <button
            key={category}
            className={`text-lg font-medium p-4 ${activeCategory === category ? 'text-customRed underline underline-offset-1' : 'text-gray-600'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-20 space-y-6">
        {techStack[activeCategory].map((tech) => (
          <div key={tech.name} className="w-44 h-24 flex items-center justify-center">
            <img src={tech.img} alt={tech.name} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TechStack;
