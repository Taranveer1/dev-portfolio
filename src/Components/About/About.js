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
      className="flex justify-center items-center min-h-screen bg-darkBlue px-6 md:px-24 py-20"
      id="about"
    >
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
          {/* Left Side: Text */}
          <div className="order-2 md:order-1 flex-1 p-6 text-center md:text-left">
            <div>
              <p className="text-xl sm:text-4xl font-semibold text-green border-b-4 border-blue w-fit md:mx-0 mb-2"
                 style={{ marginLeft: '10px' }}> {/* Adjusted margin to move the title slightly left */}
                About Me
              </p>
              <p className="text-blue mt-2 md:mt-5 text-sm sm:text-lg w-full md:w-11/12 font-medium mx-auto md:mx-0">
                {data.map((item) => item.About_Me_Text)}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mt-4">
              {data[0]?.Icons.map((iconHtml, index) => (
                <div
                  key={index}
                  className="flex cursor-pointer justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-md text-green text-lg md:text-2xl dark-shadow transform transition-transform duration-300 hover:-translate-y-1"
                  dangerouslySetInnerHTML={{ __html: iconHtml }}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="order-1 md:order-2 flex flex-col items-center">
            <div className="h-80 w-80 md:h-96 md:w-96">
              <img
                src={data[0]?.Image?.asset?.url}
                alt="aboutMePicture"
                className="rounded-lg object-cover h-full w-full"
              />
            </div>

            {/* View Resume Button */}
            <div className="mt-6 md:mt-8 flex justify-center w-full">
              <a
                className="inline-flex items-center justify-center p-3 pt-2 pb-2 bg-green text-white rounded text-xs font-bold hover:scale-125"
                href="/resume"
                target="_blank"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
