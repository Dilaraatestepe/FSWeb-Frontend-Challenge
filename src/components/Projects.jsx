import React, { useContext } from "react";
import { projects } from "../data";
import { LanguageContext } from "../contexts/LanguageContext";

function Projects() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-[64px] font-semibold text-[#1F2937] mb-6 dark:text-[#AEBCCF]">
        {language == "en" ? "Projects" : "Projeler"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-28">
        {projects.map((project) => (
          <div key={project.id}>
            <img src={project.image} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-[#4338CA] mb-2 dark:text-[#CFCBFF]">
                {language == "en" ? project.title.en : project.title.tr}
              </h2>
              <p className="text-[#6B7280] mb-4">
                {language == "en"
                  ? project.description.en
                  : project.description.tr}
              </p>
              {Array.isArray(project.tech) &&
                project.tech.map((tech) => (
                  <span
                    className="px-8 py-2 text-[#3730A3] border border-[#3730A3] rounded-xl mr-2 my-12"
                    key={tech}
                  >
                    {tech.tech || tech}
                  </span>
                ))}

              <div className="flex justify-between my-6  text-[#3730A3] dark:text-[#E1E1FF]">
                <a target="_blank" href={project.github}>
                  Github
                </a>
                <a target="_blank" href={project.view}>
                  View Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
