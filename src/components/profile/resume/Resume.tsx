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
      companyLogo: "/icons/social_media_platforms/Google.png",
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
      companyLogo: "/icons/social_media_platforms/Facebook.png",
      responsiblities: [
        "Create an appealing design and turn it into a WordPress plugin",
        "Manage all technical aspects of the CMS",
        "Conducting website/application tests",
      ],
    },
  ];

  const education = [
    {
      schoolName: "Harvard University",
      schoolLocation: "Cambridge, GA",
      certification: "Bachelor Degree, Computer Science (Bsc)",
      duration: "May 2020 - Present",
      logo: "/images/harvard.png",
      description:
        "Emory Admissions Fellow; assisted Dean of Admissions with student applications and Emory’s marketing strategy in the roll out of the university’s new website",
    },
    {
      schoolName: "Mister Bim High School",
      schoolLocation: "Atlanta, GA",
      certification: null,
      duration: "September 2016 - 2020",
      logo: "/images/harvard.png",
      description: null,
    },
  ];

  const skills = [
    {
      title: "HTML 5",
      logo: "/icons/programming_languages/html-5.png",
    },
    {
      title: "CSS 3",
      logo: "/icons/programming_languages/css.png",
    },
    {
      title: "Javascript",
      logo: "/icons/programming_languages/javascript.png",
    },
    {
      title: "React",
      logo: "/icons/programming_languages/react.png",
    },
    {
      title: "Next.js",
      logo: "/icons/programming_languages/NextJs.png",
    },
    {
      title: "Mongo",
      logo: "/icons/programming_languages/mongodb.png",
    },
    {
      title: "NodeJs",
      logo: "/icons/programming_languages/node.png",
    },
    {
      title: "Python",
      logo: "/icons/programming_languages/python.png",
    },
    {
      title: "Java",
      logo: "/icons/programming_languages/java.png",
    },
  ];

  const interests = [
    "Semantics",
    "TED Talks",
    "Udemy",
    "Behavioral",
    "Economics",
    "Hiking",
  ];

  const languages = [
    {
      language: "English",
      flag: "/icons/flags/english.png",
    },
    {
      language: "Mandarin",
      flag: "/icons/flags/mandarin.png",
    },
    {
      language: "Cantonese Chinese",
      flag: "/icons/flags/china.png",
    },
  ];

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
              <div className="font-medium text-zinc-800 text-lg">
                {exp.role} at {exp.company}
              </div>
              <div className="flex items-center justify-between w-full">
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
        {education.map((edu) => (
          <div
            key={edu.schoolName}
            className="resume-section-body flex items-start mb-4"
          >
            <div className="mr-3">
              <Image
                src={edu.logo}
                width={40}
                height={40}
                alt={edu.schoolName}
              />
            </div>
            <div className="flex-1 flex flex-col items-start">
              <div className="font-medium text-zinc-800 text-lg">
                {edu.schoolName}
              </div>
              <div className="flex items-center justify-between w-full">
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
          {skills.map((skill) => (
            <div
              onClick={() => alert(skill.title)}
              key={skill.title}
              className="bg-zinc-100 cursor-pointer p-2 text-sm rounded-sm flex items-center"
            >
              <Image
                src={skill.logo}
                width={20}
                height={20}
                alt={skill.title}
                className="mr-2"
              />
              {skill.title}
            </div>
          ))}
        </div>
      </div>
      {/* INTERESTS */}
      <div className="resume-section">
        <div className="resume-label-sm">Interests</div>
        <div className="mt-5 flex flex-wrap gap-2">
          {interests.map((interest) => (
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
          {languages.map((language) => (
            <div
              onClick={() => alert(language.language)}
              key={language.language}
              className="bg-zinc-100 cursor-pointer p-2 text-sm rounded-sm flex items-center"
            >
              <Image
                src={language.flag}
                width={20}
                height={20}
                alt={language.language}
                className="mr-2"
              />
              {language.language}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
