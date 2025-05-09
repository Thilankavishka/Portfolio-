// components/Contact.jsx
import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="border-b-4 border-purple-500 pb-2">Get In Touch</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Have a project in mind or want to chat? Feel free to contact me using any method below.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <FiMail className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">thilankavishka25@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <FiPhone className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">+94 77478xxxx</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <FiMapPin className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-300">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


