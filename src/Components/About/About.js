import React from "react";
// import profileImage from "../../assets/profile1.jpg";
import profileImage from "./undraw_mello_otq1.svg";
import icons from "./Icons";
import "./About.css";

function About() {
  return (
    <div
      className="flex flex-col justify-center min-h-screen bg-darkBlue px-6 md:px-24 py-20"
      id="about"
    >
      <div className="mx-auto max-w-5xl w-full flex flex-col h-full">
        <div className="flex flex-col md:flex-row md:items-start flex-grow">
          <div className="order-1 md:order-2 h-40 w-40 md:h-60 md:w-60 self-center md:self-end">
            <img src={profileImage} alt="Taranveer" className="rounded-sm" />
          </div>
          <div className="flex-1 p-6 order-2 md:order-1">
            <div>
              <p className="text-xl sm:text-3xl font-semibold text-green border-b-2 border-blue w-fit">
                About Me
              </p>
              <p className="text-blue mt-2 md:mt-5 text-sm sm:text-lg w-10/12 font-medium">
                I'm Taranveer Flora, passionate about solving problems with
                software development. My journey began in high school with a
                mobile app project, leading me to study computer science at Penn
                State.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-start gap-0.5 mt-4">
              {icons[0].icons.map((iconHtml, index) => (
                <div
                  key={index}
                  className="flex cursor-pointer justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-md text-green text-lg md:text-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-1"
                  dangerouslySetInnerHTML={{ __html: iconHtml }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-1 md:mt-40 self-end">
          <a
            className="inline-flex w-auto items-center justify-center p-3 pt-2 pb-2 md:mt-10 bg-green text-white rounded text-xs font-bold hover:scale-125"
            href="/resume"
            target="_blank"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
