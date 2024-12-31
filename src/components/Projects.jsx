import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-[64px] font-semibold text-[#1F2937] mb-6">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-28">
        {projects.map((project, index) => (
          <div key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-[#4338CA] mb-2">
                {project.title}
              </h2>
              <p className="text-[#6B7280] mb-4">{project.description}</p>
              {project.tech.map((tec) => (
                <span
                  className="px-8 py-2 text-[#3730A3] border border-[#3730A3] rounded-xl mr-2 my-12"
                  key={tec}
                >
                  {tec}
                </span>
              ))}
              <div className="flex justify-between my-6  text-[#3730A3]">
                <a href={project.link1}>Github</a>
                <a href={project.link2}>View Site</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
