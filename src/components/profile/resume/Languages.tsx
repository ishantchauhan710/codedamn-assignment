import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React from "react";

const Languages = () => {
  const { user } = useAppContext();
  return (
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
        quality={100}
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
  );
};

export default Languages;
