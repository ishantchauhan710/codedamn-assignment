import { useAppContext } from "context/AppContext";
import React from "react";

const Interests = () => {
  const { user } = useAppContext();
  return (
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
  );
};

export default Interests;
