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
    <div className="relative bg-dark min-h-screen flex flex-col" id="home">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-8">
        <div className="relative w-full max-w-4xl">
          {/* Text Content */}
          <div className="text-left z-10 relative">
            <p className="text-accent text-xl font-bold mb-2 md:text-2xl">
              Hi, my name is...
            </p>
            <h1 className="text-white text-5xl mb-4 font-bold md:text-7xl">
              {data[0]?.Name || 'Taranveer Flora'}
            </h1>
            <p className="text-gray-300 text-md md:text-2xl mb-4 font-bold font-mono">
              <span className="text-primary">{"<"}</span>{data[0]?.Code_Phrase || 'I develop cool things for fun.'}
              <span className="text-primary">{"/>"}</span>
            </p>
            <p className="text-gray-300 text-sm md:text-lg font-semibold mb-8 max-w-2xl">
              {data[0]?.First_Description || '3rd year Computer Science student @ PSU with concentrations in Software Engineering'}
            </p>
            
            {/* CTA Button */}
            <a
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg"
              href="#about"
            >
              Explore My Work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:example@email.com" className="text-gray-400 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
