import Image from "next/image";
import React from "react";

const Resume = () => {
  const experience = [
    {
      role: "Front-end developer",
      company: "Google",
      type: "inc",
      location: "London",
      duration: "May 2021 - Present",
      description:
        "This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. This position requires a profound understanding of the development process, using front-end technologies including HTML5, CSS3, JavaScript, jQuery, PHP/WordPress.",
      companyLogo: "/GoogleBig.png",
      responsiblities: [],
    },
    {
      role: "Junior Front-end developer",
      company: "Meta",
      type: "inc",
      location: "New York",
      duration: "July 2020 - May 2021",
      description:
        "This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. ",
      companyLogo: "/FacebookBig.png",
      responsiblities: [
        "Create an appealing design and turn it into a WordPress plugin",
        "Manage all technical aspects of the CMS",
        "Conducting website/application tests",
      ],
    },
  ];

  return (
    <div>
      {/* ABOUT */}
      <div className="resume-section">
        <div className="resume-label">About Me</div>
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
          <button className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 px-3 py-2 rounded-sm mt-4 text-sm">
            Read More
          </button>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="resume-section">
        <div className="resume-label">Work Experience</div>
        {experience.map((exp) => (
          <div
            key={exp.description}
            className="resume-section-body flex items-start mb-4"
          >
            <div className="mr-3">
              <Image
                src={exp.companyLogo}
                width={40}
                height={40}
                alt={exp.company}
              />
            </div>
            <div className="flex-1 flex flex-col items-start">
              <div className="font-medium text-neutral-800 text-lg">
                {exp.role} at {exp.company}
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-neutral-700 text-sm">
                  {exp.location} • {exp.company} {exp.type}.
                </div>
                <div className="text-neutral-700 text-sm font-semibold">
                  {exp.duration}
                </div>
              </div>
              <div className="text-neutral-600 text-sm mt-4">
                {exp.description}
              </div>
              {exp.responsiblities.length > 0 && (
                <div className="mt-4">
                  <div className="font-medium text-neutral-800 text-sm">
                    Job Responsiblities:
                  </div>
                  <ul className="list-image-[url(/list_bullet.png)] ml-4 mt-2">
                    {exp.responsiblities.map((resp) => (
                      <li className="text-neutral-600 text-sm" key={resp}>
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
    </div>
  );
};

export default Resume;
