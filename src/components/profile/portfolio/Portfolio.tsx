import Image from "next/image";
import React from "react";

const Portfolio = () => {
  const stats = [
    {
      label: "Longest Streak",
      value: "2",
      icon: "/Lightning.png",
    },
    {
      label: "Experience Points",
      value: "1200",
      icon: "/StarFour.png",
    },
    {
      label: "Current League",
      value: "Novice",
      icon: "/cup.png",
    },
    {
      label: "Karma Points",
      value: "120",
      icon: "/Heartbeat.png",
    },
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      image: "/project_img.png",
      skills: [
        { name: "HTML/CSS", logo: "/html5.png" },
        { name: "React", logo: "/react.png" },
      ],
    },
    {
      title: "Personal Portfolio Website",
      image: "/project_img.png",
      skills: [
        { name: "HTML/CSS", logo: "/html5.png" },
        { name: "React", logo: "/react.png" },
      ],
    },
    {
      title: "Personal Portfolio Website",
      image: "/project_img.png",
      skills: [
        { name: "HTML/CSS", logo: "/html5.png" },
        { name: "React", logo: "/react.png" },
      ],
    },
    {
      title: "Personal Portfolio Website",
      image: "/project_img.png",
      skills: [
        { name: "HTML/CSS", logo: "/html5.png" },
        { name: "React", logo: "/react.png" },
      ],
    },
  ];

  const playgrounds = [
    {
      title: "Playground title",
      language: "HTML/CSS",
      time: "1min ago",
      logo: "/html5big.png",
      sharedWith: [
        { name: "Adam", pic: "/dummyuser1.png" },
        { name: "Anna", pic: "/dummyuser2.png" },
        { name: "Ishant", pic: "/dummyuser1.png" },
        { name: "Adam", pic: "/dummyuser2.png" },
        { name: "Anna", pic: "/dummyuser1.png" },
        { name: "Ishant", pic: "/dummyuser2.png" },
      ],
    },
    {
      title: "Playground title",
      language: "HTML/CSS",
      time: "1min ago",
      logo: "/html5big.png",
      sharedWith: [
        { name: "Adam", pic: "/dummyuser1.png" },
        { name: "Anna", pic: "/dummyuser2.png" },
        { name: "Ishant", pic: "/dummyuser1.png" },
        { name: "Adam", pic: "/dummyuser2.png" },
        { name: "Anna", pic: "/dummyuser1.png" },
        { name: "Ishant", pic: "/dummyuser2.png" },
      ],
    },
    {
      title: "Playground title",
      language: "HTML/CSS",
      time: "1min ago",
      logo: "/html5big.png",
      sharedWith: [
        { name: "Adam", pic: "/dummyuser1.png" },
        { name: "Anna", pic: "/dummyuser2.png" },
        { name: "Ishant", pic: "/dummyuser1.png" },
        { name: "Adam", pic: "/dummyuser2.png" },
        { name: "Anna", pic: "/dummyuser1.png" },
        { name: "Ishant", pic: "/dummyuser2.png" },
      ],
    },
    {
      title: "Playground title",
      language: "HTML/CSS",
      time: "1min ago",
      logo: "/html5big.png",
      sharedWith: [
        { name: "Adam", pic: "/dummyuser1.png" },
        { name: "Anna", pic: "/dummyuser2.png" },
        { name: "Ishant", pic: "/dummyuser1.png" },
        { name: "Adam", pic: "/dummyuser2.png" },
        { name: "Anna", pic: "/dummyuser1.png" },
        { name: "Ishant", pic: "/dummyuser2.png" },
      ],
    },
  ];

  return (
    <div>
      {/* STATS */}
      <div className="portfolio-section">
        <div className="portfolio-label">Stats</div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label + stat.value}
              className="bg-neutral-200/40  text-gray-800 cursor-pointer p-2 text-sm rounded-md mr-2 flex items-center"
            >
              <Image src={stat.icon} width={32} height={32} alt={stat.label} />
              <div className="flex flex-col ml-1">
                <div className="text-neutral-700 font-bold text-lg">
                  {stat.value}
                </div>
                <div className="text-neutral-700 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <div className="portfolio-section">
        <div className="flex items-center justify-between">
          <div className="portfolio-label">Projects</div>
          <div className="portfolio-label-action">Create new project</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="bg-neutral-100 text-gray-800 cursor-pointer p-4 text-sm rounded-md"
            >
              <Image
                src={project.image}
                width={1000}
                height={1000}
                alt={project.title}
              />

              <div className="text-neutral-900 font-semibold text-lg mt-2">
                {project.title}
              </div>
              <div className="flex mt-1">
                {project.skills.map((skill) => (
                  <div key={skill.name} className="flex">
                    <Image
                      src={skill.logo}
                      width={20}
                      height={20}
                      alt={skill.name}
                    />
                    <div className="text-sm font-light ml-2">{skill.name}</div>
                    {skill.name !==
                      project.skills[project.skills.length - 1].name && (
                      <div className="mx-3">•</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PLAYGROUNDS */}
      <div className="portfolio-section">
        <div className="flex items-center justify-between">
          <div className="portfolio-label">Playgrounds</div>
          <div className="portfolio-label-action">Create new playground</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {playgrounds.map((playground) => (
            <div
              key={playground.title}
              className="bg-neutral-200/40  text-gray-800 cursor-pointer p-2 text-sm rounded-md mr-2 flex items-start"
            >
              <Image
                src={playground.logo}
                width={40}
                height={40}
                alt={playground.title}
                className="m-2"
              />
              <div className="flex flex-col ml-2">
                <div className="text-neutral-700 font-semibold text-lg">
                  {playground.title}
                </div>
                <div className="text-neutral-700 text-sm font-light mt-1">
                  {playground.language} • {playground.time}
                </div>
                <div className="mt-2 flex items-center">
                  {playground.sharedWith.slice(0, 2).map((user) => (
                    <div
                      key={user.name}
                      className="border-1 border-white w-6 h-6 rounded-full overflow-hidden ml-[-6px]"
                    >
                      <Image
                        src={user.pic}
                        width={40}
                        height={40}
                        alt={user.name}
                      />
                    </div>
                  ))}
                  <div className="ml-1 text-sm text-neutral-600">
                    Shared with{" "}
                    {playground.sharedWith.slice(0, 2).map((user) => (
                      <span className="font-bold" key={user.name + "name"}>
                        {user.name}
                        {user.name !== playground.sharedWith[1].name && ", "}
                      </span>
                    ))}
                    {playground.sharedWith.length > 1 && (
                      <span className="text-sm">{`.. + ${
                        playground.sharedWith.length - 2
                      } others`}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
