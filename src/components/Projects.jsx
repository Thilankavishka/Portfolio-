import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Image6 from "../assets/Images/6.png";
import Image7 from "../assets/Images/7.png";
import Image8 from "../assets/Images/8.png";
import Image10 from "../assets/Images/10.png";
//import Image11 from "../assets/Images/";


const projects = [
  {
    id: 1,
    title: 'Medical Centre Management System',
    description: 'A full-stack MERN application for managing university medical center operations with secure email alerts, role-based access, protected APIs, and responsive UI.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'REST API'],
    image: Image6,
    github: 'https://github.com/Thilankavishka/Healthcare-University-Medical-Centre-Management-System.git',
    live: '#'
  },
  {
    id: 2,
    title: 'Library Management System',
    description: 'Managing University Library effectively using MERN Stack.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'REST API'],
    image: Image7,
    github: 'https://github.com/SGopinath89/IT2342024LibraryApp.git',
    live: '#'
  },
  {
    id: 3,
    title: 'Canteen Management System',
    description: 'Managing University Canteen efficiently using MERN Stack.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'REST API'],
    image: Image8,
    github: 'https://github.com/Thilankavishka/Canteen-Management-System-University-Of-Vavuniya.git',
    live: '#'
  },
  {
    id: 4,
    title: 'Simple Animation Game',
    description: 'JavaScript-based animated game using HTML & CSS.',
    tags: ['Javascript','html','css'],
    image: Image10,
    github: 'https://github.com/Thilankavishka/Simple-Animation-Game-Javascript-Html-Css.git',
    live: '#'
  },
  {
    id: 5,
    title: 'Bording Finder',
    description: 'This is my Latest Project',
    tags: ['Java','springboot','spring_tool_suite'],
    image: "",
    github: 'https://github.com/Thilankavishka/BordinFinder.git',
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
            A collection of some recent work and practical implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-purple-600 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover sm:h-72 md:h-64 lg:h-72"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white transition"
                    >
                      <FiGithub className="mr-2" /> Code
                    </a>
                  )}
                  {project.live && project.live !== '#' ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-white transition"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center text-gray-500 cursor-not-allowed">
                      <FiExternalLink className="mr-2" /> No Demo
                    </span>
                  )}
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
