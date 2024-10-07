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
    <div className="relative bg-darkBlue min-h-screen flex flex-col" id="home">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-green text-xl font-bold">Taranveer.dev</div>
        <div className="flex space-x-6">
          {['Home', 'About', 'Experience', 'Projects', 'Get In Touch'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-green">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-8">
        <div className="relative w-full max-w-4xl">
          {/* Text Content */}
          <div className="text-left z-10 relative">
            <p className="text-green text-xl font-bold mb-2 md:text-2xl">
              Hi, my name is...
            </p>
            <h1 className="text-blue text-5xl mb-4 font-bold md:text-7xl">
              {data[0]?.Name || 'Taranveer Flora'}
            </h1>
            <p className="text-gray text-md md:text-2xl mb-4 font-bold font-mono">
              <span className="text-green">{"<"}</span>{data[0]?.Code_Phrase || 'I develop cool things for fun.'}
              <span className="text-green">{"/>"}</span>
            </p>
            <p className="text-gray text-sm md:text-lg font-semibold mb-8">
              {data[0]?.First_Description || '3rd year Computer Science student @ PSU with concentrations in Software Engineering'}
              <br />
              {data[0]?.Second_Description || 'Eager to explore new opportunities, learn new things and have fun doing it!'}
            </p>
            <a
              className="inline-flex items-center justify-center px-6 py-3 bg-green text-white rounded-full text-sm font-bold hover:bg-opacity-90 transition-colors duration-300"
              href="#about"
            >
              Scroll Down
              <i className="bx bxs-chevron-down-circle ml-2"></i>
            </a>
          </div>

          {/* Green L-shaped bar (Top-left) */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2">
            <div className="absolute top-0 left-0 bg-green h-1 w-full"></div>
            <div className="absolute top-0 left-0 bg-green h-full w-1"></div>
          </div>

          {/* Green L-shaped bar (Bottom-right, flipped) */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
            <div className="absolute bottom-0 right-0 bg-green h-1 w-full"></div>
            <div className="absolute bottom-0 right-0 bg-green h-full w-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;