// components/Achievements.jsx
import React from 'react';
import { FaAward } from 'react-icons/fa';
// If you're using a local image, import it like this:
import AwardImage from "../assets/Images/5.jpg";

const achievements = [
  {
    title: 'University Award',
    description: 'Best performance in Information Technology Level-1 in University of Jaffna.',
    icon: <FaAward size={30} className="text-blue-400" />,
    // Use either a local image (uncomment if imported above) or an online image
    image: AwardImage, // Replace with your image path or URL
    // image: AwardImage,
  }

];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="border-b-4 border-purple-500 pb-2">Awards & Achievements</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            A few recognitions for my work and academic excellence.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-purple-500/30 transition text-center"
            >
              {item.image && (
                <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto mx-auto mb-4 rounded-lg border-2 border-purple-500"
              />
              
              )}
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

