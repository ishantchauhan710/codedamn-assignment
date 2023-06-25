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

  return (
    <div>
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
    </div>
  );
};

export default Portfolio;
