import React from "react";
import ExperienceCard from "./ExperienceItem";

function Experience() {
  return (
    <section className="bg-[#0a192f] py-16">
      <div className="flex flex-col justify-center items-center min-h-max mx-auto max-w-screen-xl">
        <p className="text-xl sm:text-5xl font-bold text-green border-b-2 border-blue w-fit mb-8">
          Experience
        </p>

        <ExperienceCard />
      </div>
    </section>
  );
}

export default Experience;
