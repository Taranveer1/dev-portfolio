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
      className="relative flex justify-center items-center bg-darkBlue min-h-screen"
      id="home"
    >
      {/* Text Content */}
      <div className="text-left mb-40 md:mb-0 p-6 md:p-0 relative">
        <p className="text-green text-xl font-bold mb-3 md:mb-6 md:text-2xl">
          Hi, my name is...
        </p>

        <p className="text-blue text-5xl mb-6 font-bold md:text-8xl">
          {data.map((item) => item.Name)}
        </p>

        <p className="text-gray text-md md:text-3xl mb-6 font-bold font-mono">
          <span className="text-green">{"<"}</span>{data.map((item) => item.Code_Phrase)}
          <span className="text-green">{"/>"}</span>
        </p>

        <p className="text-gray text-sm md:text-xl font-semibold">
          {data.map((item) => item.First_Description)}
          <br />
          {data.map((item) => item.Second_Description)}
        </p>

        <a
          className="inline-flex w-auto items-center justify-center p-3 pt-2 pb-2 mt-10 bg-green text-white rounded-full text-xs font-bold hover:scale-125"
          href="#about"
        >
          Scroll Down
          <i className="bx bxs-chevron-down-circle bg-green pl-1"></i>
        </a>

        {/* Inverted Green L-shaped bar */}
        <div className="absolute bottom-[-50px] right-[-50px]">
          <div className="l-bar-horizontal bg-green h-[6px] w-[300px]"></div>
          <div className="l-bar-vertical bg-green h-[300px] w-[6px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
