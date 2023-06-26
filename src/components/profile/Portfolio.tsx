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
  return (
    <div>
      <Stats />
      <Projects />
      <Playgrounds />
      <Certificates />
    </div>
  );
};

export default Portfolio;
