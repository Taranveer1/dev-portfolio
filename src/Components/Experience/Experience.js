import React from "react";
import ExperienceCard from "./ExperienceItem";

function Experience() {
  return (
    <div
      className="sm:flex justify-center items-center min-h-max px-6 md:px-24 py-20 bg-darkBlue"
      id="experience"
    >
      <p>Experience</p>
      <ExperienceCard />
    </div>
  );
}

export default Experience;
