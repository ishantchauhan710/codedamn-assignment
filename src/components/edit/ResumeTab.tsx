import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React, { useState } from "react";
import CreateExperienceModal from "../common/modals/CreateExperienceModal";
import { ResumeEducation, ResumeExperience } from "models/User";
import CreateEducationModal from "../common/modals/CreateEducationModal";
import { getLogoFromLanguage } from "@/util/imageUtil";

const ResumeTab = () => {
  const {
    user,
    showCreateExperienceModal,
    setShowCreateExperienceModal,
    showCreateEducationModal,
    setShowCreateEducationModal,
  } = useAppContext();

  const [experience, setExperience] = useState<ResumeExperience[]>(
    user.resume.experience
  );

  const [education, setEducation] = useState<ResumeEducation[]>(
    user.resume.education
  );

  const [skill, setSkill] = useState<string>("");
  const [skills, setSkills] = useState<string[]>(user.skills);

  return (
    <div>
      <div className="flex flex-col">
        <div className="text-zinc-900 font-bold text-2xl">Resume</div>
        <div className="text-zinc-700 mt-1">
          Fill out the resume details mentioned below
        </div>
      </div>

      <div className="mt-6 flex flex-col">
        <div className="text-zinc-900 font-medium">Short Intro</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="A short description about yourself"
        />
      </div>

      <div className="mt-6 flex flex-col">
        <div className="text-zinc-900 font-medium">Detailed Intro</div>
        <input
          type="text"
          className="border border-zinc-200 focus:outline-none rounded-md mt-2 px-2 py-2"
          placeholder="A more descriptive introduction about yourself"
        />
      </div>

      <div className="flex items-end justify-between mt-6">
        <div className="text-zinc-900 font-bold text-2xl">Experience</div>
        <div
          className="text-primary-500 cursor-pointer"
          onClick={() => setShowCreateExperienceModal(true)}
        >
          Add experience +
        </div>
      </div>

      <div>
        {experience.map((exp) => (
          <div
            key={exp.description}
            className="relative resume-section-body block sm:flex items-start my-4"
          >
            <div
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to delete this experience"
                  ) === true
                ) {
                  setExperience(
                    experience.filter(
                      (item) => item.description !== exp.description
                    )
                  );
                }
              }}
              className="absolute mr-2 mt-[-4px] right-0 text-zinc-800 hover:text-zinc-900 text-2xl cursor-pointer"
            >
              x
            </div>
            <div className="mr-3 mb-1 sm:mb-0">
              <Image
                quality={100}
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

      <div className="flex items-end justify-between mt-6">
        <div className="text-zinc-900 font-bold text-2xl">Education</div>
        <div
          className="text-primary-500 cursor-pointer"
          onClick={() => setShowCreateEducationModal(true)}
        >
          Add education +
        </div>
      </div>

      <div className="mt-4">
        {education.map((edu) => (
          <div
            key={edu.schoolName}
            className="resume-section-body block sm:flex items-start mb-4"
          >
            <div className="mr-3 mb-2">
              <Image
                quality={100}
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
                  {edu.schoolLocation}
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

      <div>
        <div className="text-zinc-900 font-bold text-2xl mt-6">Tech Skills</div>
        <div className="mt-2 relative ">
          <input
            type="text"
            id="default-search"
            className="block p-3 w-full text-md text-zinc-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            placeholder="Eg. Kotlin"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
          <div
            onClick={() => {
              if (skill) {
                setSkills([...skills, skill]);
                setSkill("");
              }
            }}
            className="flex items-center justify-center bg-primary-400 hover:bg-primary-300 text-white rounded-md absolute inset-y-0 right-0 px-2 mx-1 my-[4px] cursor-pointer text-sm"
          >
            Add Skill
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              onClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to remove this skill"
                  ) === true
                ) {
                  setSkills(skills.filter((item) => item !== skill));
                }
              }}
              key={skill}
              className="bg-zinc-100 cursor-pointer p-2 text-sm rounded-sm flex items-center"
            >
              <Image
                quality={100}
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

      {showCreateExperienceModal && (
        <CreateExperienceModal
          experience={experience}
          setExperience={setExperience}
        />
      )}
      {showCreateEducationModal && (
        <CreateEducationModal
          education={education}
          setEducation={setEducation}
        />
      )}
    </div>
  );
};

export default ResumeTab;
