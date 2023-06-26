import { getLogoFromLanguage } from "@/util/imageUtil";
import { useAppContext } from "context/AppContext";
import Image from "next/image";
import React, { useState } from "react";
import About from "./resume/About";
import Experience from "./resume/Experience";
import Education from "./resume/Education";
import Skills from "./resume/Skills";
import Languages from "./resume/Languages";

const Resume = () => {
  const { user } = useAppContext();

  return (
    <div>
      <About />
      <Experience />
      <Education />
      <Skills />
      <Languages />
    </div>
  );
};

export default Resume;
