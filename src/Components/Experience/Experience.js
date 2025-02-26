import React from "react";
import ExperienceCard from "./ExperienceItem";
import ExperienceGraphic from "./experience.svg";

function Experience() {
  return (
    <div className="bg-light py-16 min-h-screen" id="experience">
      <div className="flex flex-col justify-center items-center min-h-max mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 relative inline-block">
            <span className="gradient-text">Experience</span>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full"></div>
          </h2>
        </div>
        <ExperienceCard />
        <img
          src={ExperienceGraphic}
          alt="work's pic"
          className="md:ml-auto w-1/3 md:w-1/6 h-auto mt-12 opacity-70"
        />
      </div>
    </div>
  );
}

export default Experience;
