import React, { useEffect, useState } from "react";
import client from "../../client";
import useGlobalStore from '../../store';

function Home() {
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "Home_Section"] {
          Nav_Title,
          Name,
          Code_Phrase,
          First_Description,
          Second_Description
        }`
      )
      .then((data) => {
        if (data.length > 0) {
          setData(data);
          useGlobalStore.getState().setNavTitle(data[0].Nav_Title);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <div
      className="relative flex justify-center items-center bg-darkBlue min-h-screen overflow-hidden"
      id="home"
    >
      {/* Text Content */}
      <div className="text-left mb-40 md:mb-0 p-6 md:p-0 relative z-10 max-w-3xl">
        <p className="text-green text-xl font-bold mb-3 md:mb-6 md:text-2xl">
          Hi, my name is...
        </p>
        <h1 className="text-blue text-5xl mb-6 font-bold md:text-8xl">
          {data[0]?.Name || 'Taranveer Flora'}
        </h1>
        <p className="text-gray text-md md:text-3xl mb-6 font-bold font-mono">
          <span className="text-green">{"<"}</span>{data[0]?.Code_Phrase || 'I develop cool things for fun.'}
          <span className="text-green">{"/>"}</span>
        </p>
        <p className="text-gray text-sm md:text-xl font-semibold">
          {data[0]?.First_Description || '3rd year Computer Science student @ PSU with concentrations in Software Engineering'}
          <br />
          {data[0]?.Second_Description || 'Eager to explore new opportunities, learn new things and have fun doing it!'}
        </p>
        <a
          className="inline-flex w-auto items-center justify-center p-3 pt-2 pb-2 mt-10 bg-green text-white rounded-full text-xs font-bold hover:scale-110 transition-transform duration-300 ease-in-out"
          href="#about"
        >
          Scroll Down
          <i className="bx bxs-chevron-down-circle bg-green pl-1"></i>
        </a>
      </div>

      {/* Green L-shaped bar (Top-left) */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3">
        <div className="absolute top-0 left-0 bg-green h-1 w-full"></div>
        <div className="absolute top-0 left-0 bg-green h-full w-1"></div>
      </div>

      {/* Green L-shaped bar (Bottom-right, flipped) */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3">
        <div className="absolute bottom-0 right-0 bg-green h-1 w-full"></div>
        <div className="absolute bottom-0 right-0 bg-green h-full w-1"></div>
      </div>
    </div>
  );
}

export default Home;