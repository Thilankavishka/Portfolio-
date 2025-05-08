import React from 'react';
import Image1 from '../assets/Images/1.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="border-b-4 border-purple-500 pb-2">About Me</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg">
            Get to know more about me and what I do
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Image */}
          <div className="md:w-1/2 w-full">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-1 rounded-lg shadow-xl">
              <img 
                src={Image1} 
                alt="Profile" 
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 w-full text-left">
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              I'm Thilan Kavishka, a passionate Full Stack Web Developer. I specialize in building modern web applications with responsive design and clean code.
            </p>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              I'm currently an undergraduate at the University of Jaffna in Sri Lanka, pursuing my degree while continuously expanding my skills in full stack web development. I’m passionate about learning new technologies and applying them to real-world projects.
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 mb-6">
              <div>
                <p className="font-semibold">Name:</p>
                <p className="text-gray-300">Thilan Kavishka</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-gray-300 break-all">thilankavishka25@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">From:</p>
                <p className="text-gray-300">Colombo, Sri Lanka</p>
              </div>
              <div>
                <p className="font-semibold">Status:</p>
                <p className="text-gray-300">Undergraduate at University of Jaffna</p>
              </div>
            </div>

            {/* Optional CV Button */}
            {/* <a
              href="#"
              className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300"
            >
              Download CV
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
