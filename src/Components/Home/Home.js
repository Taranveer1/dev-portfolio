import React from "react";

function Home() {
  return (
    <div
      className="flex justify-center items-center h-screen bg-darkBlue"
      id="home"
    >
      <div className="text-left mb-40 md:mb-0 p-6 md:p-0">
        <p className="text-green text-xl font-bold mb-3 md:mb-6 md:text-2xl">
          Hi, my name is...
        </p>

        <p className="text-blue text-5xl mb-6 font-bold md:text-8xl">
          Taranveer Flora.
        </p>

        <p className="text-gray text-md md:text-3xl mb-6 font-bold font-mono">
          <span className="text-green">{"<"}</span>I code cool things for fun.
          <span className="text-green">{"/>"}</span>
        </p>

        <p className="text-gray text-sm md:text-xl">
          Penn State CS student, skilled in Java/Python.
          <br />
          Eager to learn and grow.
        </p>
        <a
          className="inline-flex w-auto items-center justify-center p-3 pt-2 pb-2 mt-10 bg-green text-white rounded-full text-xs font-bold hover:scale-125"
          href="#about"
        >
          Scroll Down
          <i className="bx bxs-chevron-down-circle bg-green pl-1"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
