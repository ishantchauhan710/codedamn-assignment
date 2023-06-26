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
    <React.Fragment>
      <About />
      <Experience />
      <Education />
      <Skills />
      <Languages />
    </React.Fragment>
  );
};

export default Resume;
