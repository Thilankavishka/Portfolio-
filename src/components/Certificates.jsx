// components/Certificates.jsx
import React from 'react';

import img1 from "../assets/Images/Cerificates/1.png"
import img2 from "../assets/Images/Cerificates/2.png"
import img3 from "../assets/Images/Cerificates/3.png"
import img4 from "../assets/Images/Cerificates/4.png"
import img5 from "../assets/Images/Cerificates/5.jpg"
import img6 from "../assets/Images/Cerificates/6.jpg"


const certificates = [
  {
    title: 'Web Design For Beginners',
    description: 'Conducted by the department of Information Technology Faculty of Information Technology, University of Moratuwa',
    image:img1,
    link: 'https://open.uom.lk/verify'
  },
  {
    title: 'Python for Beginners',
    description: 'Conducted by the department of Information Technology Faculty of Information Technology, University of Moratuwa',
    image: img2,
    link: 'https://open.uom.lk/verify'
  }, {
    title: 'Codezpark v6.0',
    description: 'Conducted by University of Vavuniya Society of ITCS',
    image: img3,
    
  },{
    title: 'JavaScript Essential 1',
    description: 'Offered By cisco Networking Academy',
    image: img4,
    
  },{
    title: 'Inter Faculty Freshers',
    description: 'obtain Champion of the Carrom championship',
    image: img5,
    
  },{
    title: 'FAS Sport Week',
    description: 'obtain First Place',
    image: img6,
    
  },
  
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="border-b-4 border-purple-500 pb-2">Certificates</span>
          </h2>
          <p className="text-gray-400 mt-4">Here are some of my certifications in web development and related areas.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
              {cert.image && (
              <img
  src={cert.image}
  alt={cert.title}
  className="rounded-md mb-4 w-full h-76 object-contain" // Adjust height as needed
/>

              )}
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-300 mb-4">{cert.description}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
