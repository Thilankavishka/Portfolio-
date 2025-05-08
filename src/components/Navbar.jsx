// components/Navbar.jsx

import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter,FaInstagram  } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Thilan's Portfolio
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:text-purple-400 transition">Home</a>
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:text-purple-400 transition">About</a>
              <a href="#skills" className="px-3 py-2 rounded-md text-sm font-medium hover:text-purple-400 transition">Skills</a>
              <a href="#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:text-purple-400 transition">Projects</a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:text-purple-400 transition">Contact</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <a href="https://github.com/Thilankavishka" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/thilan-kavishka-749857251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.facebook.com/share/1HtNTypZEQ/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
  <FaFacebook size={20} />
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
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:text-purple-400 transition">Home</a>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-purple-400 transition">About</a>
          <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium hover:text-purple-400 transition">Skills</a>
          <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:text-purple-400 transition">Contact</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700 flex justify-center space-x-6">
          <a href="https://github.com/Thilankavishka" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/thilan-kavishka-749857251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.facebook.com/share/1HtNTypZEQ/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
  <FaFacebook size={20} />
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
    </nav>
  );
};

export default Navbar;