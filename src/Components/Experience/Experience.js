import React from "react";
import ExperienceCard from "./ExperienceItem";
import ExperienceGraphic from "./experience.svg";

function Experience() {
  return (
    <div className="bg-darkBlue py-16 min-h-screen" id="experience">
      <div className="flex flex-col justify-center items-center min-h-max mx-auto max-w-screen-xl">
        <p className="text-xl sm:text-4xl font-bold text-green border-b-4 border-blue w-fit md:mb-8 mt-4">
          Experience
        </p>
        <ExperienceCard />
        <img
          src={ExperienceGraphic}
          alt="work's pic"
          className="md:ml-auto w-1/2 md:w-2/12 h-auto"
        />
      </div>
    </div>
  );
}

export default Experience;
