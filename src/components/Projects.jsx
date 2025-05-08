// components/Projects.jsx
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Image6 from "../assets/Images/6.png";
import Image7 from "../assets/Images/7.png";
import Image8 from "../assets/Images/8.png";
const projects = [
  {
    id: 1,
    title: 'Medical Centre Management System',
    description: ' Healthcare University Medical Centre Management System A full-stack MERN application designed to manage university medical center operations, featuring secure email alerts via Nodemailer, role-based access, protected APIs, and a responsive user interface.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js','JWT', 'REST API'],
    image: Image6,
    github: 'https://github.com/Thilankavishka/Healthcare-University-Medical-Centre-Management-System.git',
    live: '#'
  }, {
    id: 2,
    title: 'Library Management System',
    description: 'Managing University Library Effectively using MERN Stack.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js','JWT', 'REST API'],
    image: Image7,
    github: 'https://github.com/SGopinath89/IT2342024LibraryApp.git',
    live: '#'
  },{
    id: 3,
    title: 'Canteen Managemetn System',
    description: 'Managing University Canteen Effectively using MERN Stack.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js','JWT', 'REST API'],
    image: Image8,
    github: 'https://github.com/Thilankavishka/Canteen-Management-System-University-Of-Vavuniya.git',
    live: '#'
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className="border-b-4 border-purple-500 pb-2">My Projects</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Some of my recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img 
  src={project.image} 
  alt={project.title} 
  className="w-full h-auto object-contain" 
/>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;