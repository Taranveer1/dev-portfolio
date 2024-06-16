import React from "react";
import ExperienceCard from "./ExperienceItem";

function Experience() {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-max px-6 md:px-24 py-20 bg-[#0a192f]"
      id="experience"
    >
      <p className="text-xl sm:text-5xl font-bold text-green border-b-2 border-blue w-fit mb-12">
          Experience
      </p>

      <ExperienceCard />
    </div>
  );
}

export default Experience;
