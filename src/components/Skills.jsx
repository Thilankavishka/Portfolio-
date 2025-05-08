import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiRedux, SiSpringboot } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={40} className="text-blue-400" />, level: '90%' },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" />, level: '85%' },
  { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" />, level: '95%' },
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" />, level: '95%' },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-500" />, level: '90%' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-cyan-400" />, level: '85%' },
  { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-white" />, level: '80%' },
  { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-600" />, level: '75%' },
  { name: 'Express', icon: <SiExpress size={40} className="text-gray-300" />, level: '80%' },
  { name: 'Redux', icon: <SiRedux size={40} className="text-purple-500" />, level: '85%' },
  { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-600" />, level: '90%' },
  { name: 'Spring Boot', icon: <SiSpringboot size={40} className="text-green-500" />, level: '70%' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="border-b-4 border-purple-500 pb-2">My Skills</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-3 p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300">
                {skill.icon}
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-500" 
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
