import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React from "react";

const Education = () => {
  const { user } = useAppContext();
  return (
    <div className="resume-section">
      <div className="resume-label-sm">Education</div>
      {user.resume.education.map((edu) => (
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
  );
};

export default Education;
