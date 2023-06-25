import { getLogoFromLanguage } from "@/util/getLogoFromLanguage";
import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React from "react";

const Resume = () => {
  const { user } = useAppContext();

  return (
    <div>
      {/* ABOUT */}
      <div className="resume-section">
        <div className="resume-label text-center">About Me</div>
        <div className="resume-section-body">
          <p>
            A self-driven, versatile, reliable, diligent individual who is calm
            and cheerful with a team-minded approach to work and getting things
            done. A self-driven, versatile, reliable, diligent individual who is
            calm and cheerful with a team-minded approach to work and getting
            things done.
          </p>
          <br />
          <p>A student who is passionate and with a keen eye for design ...</p>
          <button className="bg-neutral-200 hover:bg-neutral-300 text-zinc-800 px-3 py-2 rounded-sm mt-4 text-sm">
            Read More
          </button>
        </div>
      </div>
      {/* EXPERIENCE */}
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
              <div className="text-zinc-600 text-sm mt-4">
                {exp.description}
              </div>
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
      {/* EDUCATION */}
      <div className="resume-section">
        <div className="resume-label-sm">Education</div>
        {user.resume.education.map((edu) => (
          <div
            key={edu.schoolName}
            className="resume-section-body block sm:flex items-start mb-4"
          >
            <div className="mr-3 mb-2">
              <Image
                src="/images/harvard.png"
                width={40}
                height={40}
                alt={edu.schoolName}
              />
            </div>
            <div className="flex-1 flex flex-col items-start">
              <div className="font-medium text-zinc-800 text-lg">
                {edu.schoolName}
              </div>
              <div className="block sm:flex items-center justify-between w-full">
                <div className="text-zinc-700 text-sm">
                  {edu.schoolLocation}{" "}
                  {edu.certification && `• ${edu.certification}`}
                </div>
                <div className="text-zinc-700 text-sm font-semibold">
                  {edu.duration}
                </div>
              </div>
              {edu.description && (
                <div className="text-zinc-600 text-sm mt-4">
                  {edu.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* SKILLS */}
      <div className="resume-section">
        <div className="resume-label-sm">Skills</div>
        <div className="mt-5 flex flex-wrap gap-2">
          {user.skills.map((skill) => (
            <div
              onClick={() => alert(skill)}
              key={skill}
              className="bg-zinc-100 cursor-pointer p-2 text-sm rounded-sm flex items-center"
            >
              <Image
                src={getLogoFromLanguage(skill)}
                width={20}
                height={20}
                alt={skill}
                className="mr-2"
              />
              {skill}
            </div>
          ))}
        </div>
      </div>
      {/* INTERESTS */}
      <div className="resume-section">
        <div className="resume-label-sm">Interests</div>
        <div className="mt-5 flex flex-wrap gap-2">
          {user.resume.interests.map((interest) => (
            <span
              onClick={() => alert(interest)}
              key={interest}
              className="bg-zinc-100 hover:bg-neutral-200/60 cursor-pointer p-2 text-sm rounded-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
      {/* LANGUAGES */}
      <div className="resume-section">
        <div className="resume-label-sm">Languages</div>
        <div className="mt-5 flex flex-wrap gap-2">
          {user.resume.languages.map((language) => (
            <div
              onClick={() => alert(language)}
              key={language}
              className="bg-zinc-100 cursor-pointer p-2 text-sm rounded-sm flex items-center"
            >
              <Image
                src="/icons/flags/china.png"
                width={20}
                height={20}
                alt={language}
                className="mr-2"
              />
              {language}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
