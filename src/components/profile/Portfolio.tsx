import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React from "react";
import { User } from "models/User";
import { getLogoFromLanguage } from "@/util/imageUtil";

const Portfolio = () => {
  const { user, setShowCreateProjectModal } = useAppContext();

  const stats = [
    {
      label: "Longest Streak",
      value: user.stats.longestStreak,
      icon: "/icons/app/Lightning.png",
    },
    {
      label: "Experience Points",
      value: user.stats.xp,
      icon: "/icons/app/StarFour.png",
    },
    {
      label: "Current League",
      value: user.stats.league,
      icon: "/icons/app/cup.png",
    },
    {
      label: "Karma Points",
      value: user.stats.karmaPoints,
      icon: "/icons/app/Heartbeat.png",
    },
  ];

  return (
    <div>
      {/* STATS */}
      <div className="portfolio-section">
        <div className="portfolio-label">Stats</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label + stat.value}
              className="bg-zinc-100  text-zinc-700 cursor-pointer p-2 text-sm rounded-md mr-2 flex items-center"
            >
              <Image src={stat.icon} width={32} height={32} alt={stat.label} />
              <div className="flex flex-col ml-1">
                <div className="text-zinc-700 font-bold text-lg">
                  {stat.value}
                </div>
                <div className="text-zinc-700 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <div className="portfolio-section">
        <div className="block sm:flex items-center justify-between">
          <div className="portfolio-label">Projects</div>
          <div
            className="portfolio-label-action"
            onClick={() => setShowCreateProjectModal(true)}
          >
            Create new project
          </div>
        </div>
        <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4">
          {user.projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-100  text-zinc-700 cursor-pointer p-4 text-sm rounded-md"
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "250px",
                }}
              >
                <Image
                  fill
                  src={project.image}
                  alt={project.title}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="text-zinc-900 font-semibold text-lg mt-2">
                {project.title}
              </div>
              <div className="flex mt-1">
                {project.skills.map((skill) => (
                  <div key={skill} className="flex">
                    <Image
                      src={getLogoFromLanguage(skill)}
                      width={20}
                      height={20}
                      alt={skill}
                    />
                    <div className="text-sm font-light ml-2">{skill}</div>
                    {skill !== project.skills[project.skills.length - 1] && (
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
        <div className="block sm:flex items-center justify-between">
          <div className="portfolio-label">Playgrounds</div>
          <div className="portfolio-label-action">Create new playground</div>
        </div>
        <div className="grid  grid-cols-1 sm:grid-cols-2  gap-4">
          {user.playgrounds.map((playground) => (
            <div
              key={playground.title}
              className="bg-zinc-100 text-zinc-700 cursor-pointer p-2 text-sm rounded-md mr-2 flex items-start flex-col sm:flex-row"
            >
              <Image
                src={getLogoFromLanguage(playground.language)}
                width={40}
                height={40}
                alt={playground.language}
                className="m-2"
              />
              <div className="flex flex-col ml-2">
                <div className="text-zinc-700 font-semibold text-lg">
                  {playground.title}
                </div>
                <div className="text-zinc-700 text-sm font-light mt-1">
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
                  <div className="ml-1 text-sm text-zinc-600">
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

      {/* CERTIFICATES */}
      <div className="portfolio-section">
        <div className="block sm:flex items-center justify-between">
          <div className="portfolio-label">Certificates</div>
          <div className="portfolio-label-action">Add new certificate</div>
        </div>
        <div className="grid  grid-cols-1 sm:grid-cols-2  gap-4">
          {user.certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="bg-zinc-100  text-zinc-700 cursor-pointer p-4 text-sm rounded-md mr-2 flex flex-col"
            >
              <Image
                src={certificate.logo}
                width={40}
                height={40}
                alt={certificate.logo}
              />

              <div className="text-zinc-700 font-semibold text-lg mt-4">
                {certificate.title}
              </div>
              <div className="text-zinc-700 text-sm font-light">
                Issued on {certificate.issuedDate}
              </div>
              <div className="text-zinc-700/80 text-sm font-semibold  mt-2">
                See Credentials
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
