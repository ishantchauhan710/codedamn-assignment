import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React from "react";

const Stats = () => {
  const { user } = useAppContext();

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
    <div className="portfolio-section">
      <div className="portfolio-label">Stats</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label + stat.value}
            className="bg-zinc-100  text-zinc-700 cursor-pointer p-2 text-sm rounded-md mr-2 flex items-center"
          >
            <Image
              quality={100}
              src={stat.icon}
              width={32}
              height={32}
              alt={stat.label}
            />
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
  );
};

export default Stats;
