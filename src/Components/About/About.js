import React from "react";
import profileImage from "../../assets/profile1.jpg";
// import profileImage from "./undraw_mello_otq1.svg";
import ExperienceCard from "./Experience/ExperienceItem";

function About() {
  return (
    <div className="flex justify-center items-center h-screen" id="about">
      <div className="flex flex-col md:flex-row md:items-start md:gap-40 mx-auto max-w-5xl">
        <div className="flex-1 p-6">
          <div className="h-44 w-44 md:h-60 md:w-60">
            <img src={profileImage} alt="Taranveer" className="rounded" />
          </div>
          <div className="">
            <p className="text-2xl font-semibold text-green border-b-2 border-blue w-fit">
              About Me
            </p>
            <p className="text-blue mt-2 text-xs md:text-sm w-11/12">
              Hi, my name is Taranveer Flora, and I love solving everyday
              problems using modern software. My interest in software
              development started back in high school when I developed my own
              mobile application for my school during my junior year. Turns out,
              I had a passion for software development, which led me to major in
              computer science at Penn State.
            </p>
          </div>
        </div>
        <div className="flex-1 p-6">
          <h3 className="text-2xl font-semibold text-green">
            Experience <i class="bx bxs-shapes text-blue"></i>
          </h3>
          <div className="space-y-4 mt-4">
            <ExperienceCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

