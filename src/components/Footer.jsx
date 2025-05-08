// components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook,FaInstagram  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Thilan's Portfolio
            </span>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
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
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Thilan Kavishka. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;