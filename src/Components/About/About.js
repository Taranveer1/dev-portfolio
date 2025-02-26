import React, { useEffect, useState } from "react";
import client from "../../client";
import "../../App.css";

function About() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "About_Me_Section"] {
          About_Me_Text,
            Image {
            asset-> {
              url
            }
          },
          Icons
        }`
      )
      .then((data) => {
        if (data.length > 0) {
          setData(data);
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
      className="flex justify-center items-center min-h-screen bg-light px-6 md:px-24 py-20"
      id="about"
    >
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12">
          {/* Left Side: Text */}
          <div className="order-2 md:order-1 flex-1 p-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold mb-6 relative">
                <span className="gradient-text">About Me</span>
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-accent rounded-full"></div>
              </h2>
              <p className="text-gray-700 mt-2 md:mt-5 text-sm sm:text-lg w-full leading-relaxed">
                {data.map((item) => item.About_Me_Text)}
              </p>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Technologies I work with:</h3>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
              {data[0]?.Icons ? (
                data[0].Icons.map((iconHtml, index) => (
                  <div
                    key={index}
                    className="flex cursor-pointer justify-center items-center w-12 h-12 md:w-14 md:h-14 rounded-lg text-primary text-lg md:text-2xl bg-white shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:text-secondary"
                    dangerouslySetInnerHTML={{ __html: iconHtml }}
                  />
                ))
              ) : (
                <>
                  <div className="flex cursor-pointer justify-center items-center w-12 h-12 md:w-14 md:h-14 rounded-lg text-primary text-lg md:text-2xl bg-white shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:text-secondary">
                    <i className="fab fa-react"></i>
                  </div>
                  <div className="flex cursor-pointer justify-center items-center w-12 h-12 md:w-14 md:h-14 rounded-lg text-primary text-lg md:text-2xl bg-white shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:text-secondary">
                    <i className="fab fa-js"></i>
                  </div>
                  <div className="flex cursor-pointer justify-center items-center w-12 h-12 md:w-14 md:h-14 rounded-lg text-primary text-lg md:text-2xl bg-white shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:text-secondary">
                    <i className="fab fa-node"></i>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="order-1 md:order-2 flex flex-col items-center">
            <div className="h-80 w-80 md:h-96 md:w-96 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20 rounded-lg transform rotate-6"></div>
              <img
                src={data[0]?.Image?.asset?.url}
                alt="aboutMePicture"
                className="rounded-lg object-cover h-full w-full relative z-1 shadow-xl"
              />
            </div>

            {/* View Resume Button */}
            <div className="mt-8 flex justify-center w-full">
              <a
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-bold hover:shadow-lg transition-all duration-300"
                href="/resume"
                target="_blank"
              >
                View Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
