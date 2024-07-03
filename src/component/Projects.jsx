import React from "react";
import projects from "../constant/projects";
import Particle from "./Particle";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function Projects() {
  return (
    <section className="project-section">
      <Particle />
      <div className="mx-auto px-4 py-10 md:py-20 w-full md:w-4/5">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          My Recent <span className="text-purple-500">Works</span>
        </h1>
        <p className="text-white text-center mb-8">
          Here are a few projects I've worked on recently.
        </p>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 backdrop-blur-md">
        {projects.map((project, index) => (
        <div
          key={index}
          className="rounded-md shadow-xl border-2 overflow-hidden hover:cursor-pointer transition-all duration-300 transform hover:scale-100 border-teal-500 hover:border-2 h-[300px] relative group"
        >
          <div className="image-container overflow-hidden h-40 group-hover:h-24 transition-all duration-300">
            <img
              src={project.imgPath}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>
          <div className="details-container p-4 group-hover:h-[320px] h-60 transition-all duration-300">
          <h2 className="text-white text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-white mb-2 group-hover:opacity-100 opacity-0 transition-opacity duration-300">{project.description}</p>
            <div className="flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.ghLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 bg-slate-100 rounded-sm px-2 py-0 flex items-center gap-1 shadow-md"
              >
                <BsGithub />
                GitHub
              </a>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 bg-slate-100 rounded-sm px-2 py-0 flex items-center gap-1 shadow-md"
              >
                <FaExternalLinkAlt />
                Demo
              </a>
            </div>
          </div>
        </div>
      ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
