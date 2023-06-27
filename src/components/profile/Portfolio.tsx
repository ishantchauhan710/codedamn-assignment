import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React from "react";
import { User } from "models/User";
import { getLogoFromLanguage } from "@/util/imageUtil";
import Stats from "./portfolio/Stats";
import Projects from "./portfolio/Projects";
import Playgrounds from "./portfolio/Playgrounds";
import Certificates from "./portfolio/Certificates";

const Portfolio = () => {
  const { user } = useAppContext();
  return (
    <div>
      <Stats />
      {/* Since there was no follower section provided in design file, I'm using this to toggle the project section */}
      {user.configuration.showFollowers && <Projects />}

      {/* Since there was no XP section provided in design file, I'm using this to toggle the playground section */}
      {user.configuration.showXP && <Playgrounds />}

      {/* Since there was no achievement badges section provided in design file, I'm using this to toggle the certificate section */}
      {user.configuration.showAchievementBadges && <Certificates />}
    </div>
  );
};

export default Portfolio;
