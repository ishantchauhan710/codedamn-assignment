import { getLogoFromLanguage } from "@/util/imageUtil";
import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React from "react";

const Skills = () => {
  const { user } = useAppContext();
  return (
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
  );
};

export default Skills;
