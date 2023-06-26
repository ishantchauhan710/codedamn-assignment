import { useAppContext } from "context/AppContext";
import React, { useState } from "react";

const About = () => {
  const { user } = useAppContext();
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="resume-section">
      <div className="resume-label text-center">About Me</div>
      <div className="resume-section-body">
        <p>{user.resume.shortIntro}</p>
        <br />
        <p className={`${!showMore && "line-clamp-1"}`}>
          {user.resume.longIntro}
        </p>
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-neutral-200 hover:bg-neutral-300 text-zinc-800 px-3 py-2 rounded-sm mt-4 text-sm"
        >
          {showMore === true ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default About;
