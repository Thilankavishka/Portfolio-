import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook,FaInstagram } from 'react-icons/fa';
import ProfileImage from '../assets/Images/2.jpg'; // Update path if needed

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left: Text Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Thilan Kavishka Perera</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Full Stack Web Developer
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              I build exceptional digital experiences that are fast, accessible, and visually appealing.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300 shadow-lg"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-purple-400 rounded-full font-semibold hover:bg-purple-900 transition duration-300"
              >
                View Work
              </a>
            </div>

            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/Thilankavishka" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/thilan-kavishka-749857251" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.facebook.com/share/1HtNTypZEQ/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
                <FaFacebook size={24} />
              </a>
                     <a
                href="https://www.instagram.com/thilan_kavishka?igsh=MTF1YzlubzAxbXF1eg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1">
          <img 
  src={ProfileImage} 
  alt="Profile" 
  className="mx-auto mt-10 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover object-top border-4 border-purple-500 shadow-xl"
/>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
