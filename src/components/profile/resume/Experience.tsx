import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React from "react";

const Experience = () => {
  const { user } = useAppContext();

  return (
    <div className="resume-section">
      <div className="resume-label text-center">Work Experience</div>
      {user.resume.experience.map((exp) => (
        <div
          key={exp.description}
          className="resume-section-body block sm:flex items-start mb-4"
        >
          <div className="mr-3 mb-1 sm:mb-0">
            <Image
              src="/icons/social_media_platforms/Facebook.png"
              width={40}
              height={40}
              alt={exp.company}
            />
          </div>
          <div className="flex-1 flex flex-col items-start">
            <div className="font-medium text-zinc-800 text-lg">
              {exp.role} at {exp.company}
            </div>
            <div className="block sm:flex items-center justify-between w-full">
              <div className="text-zinc-700 text-sm">
                {exp.location} • {exp.company} {exp.type}.
              </div>
              <div className="text-zinc-700 text-sm font-semibold">
                {exp.duration}
              </div>
            </div>
            <div className="text-zinc-600 text-sm mt-4">{exp.description}</div>
            {exp.responsiblities.length > 0 && (
              <div className="mt-4">
                <div className="font-medium text-zinc-800 text-sm">
                  Job Responsiblities:
                </div>
                <ul className="list-image-[url(/icons/app/list_bullet.png)] ml-4 mt-2">
                  {exp.responsiblities.map((resp) => (
                    <li className="text-zinc-600 text-sm" key={resp}>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
