// components/Contact.jsx
import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="border-b-4 border-purple-500 pb-2">Get In Touch</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to chat? Feel free to contact me!
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-500 p-3 rounded-full mr-4">
                    <FiMail className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">thilankavishka25@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500 p-3 rounded-full mr-4">
                    <FiPhone className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">77478****</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500 p-3 rounded-full mr-4">
                    <FiMapPin className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">Colombo Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Enter subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;