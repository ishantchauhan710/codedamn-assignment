import { getLogoFromLanguage } from "@/util/imageUtil";
import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React from "react";

const Projects = () => {
  const { user, setShowCreateProjectModal } = useAppContext();

  return (
    <div className="portfolio-section">
      <div className="block sm:flex items-center justify-between">
        <div className="portfolio-label">Projects</div>
        <div
          className="portfolio-label-action"
          onClick={() => setShowCreateProjectModal(true)}
        >
          Create new project
        </div>
      </div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4">
        {user.projects.map((project) => (
          <div
            key={project.title}
            className="bg-zinc-100  text-zinc-700 cursor-pointer p-4 text-sm rounded-md"
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "250px",
              }}
            >
              <Image
                fill
                src={project.image}
                alt={project.title}
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="text-zinc-900 font-semibold text-lg mt-2">
              {project.title}
            </div>
            <div className="flex mt-1">
              {project.skills.map((skill) => (
                <div key={skill} className="flex">
                  <Image
                    src={getLogoFromLanguage(skill)}
                    width={20}
                    height={20}
                    alt={skill}
                  />
                  <div className="text-sm font-light ml-2">{skill}</div>
                  {skill !== project.skills[project.skills.length - 1] && (
                    <div className="mx-3">•</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
