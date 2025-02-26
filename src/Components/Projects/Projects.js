import React, { useEffect, useState } from "react";
import Picture from "./picture.svg";
import "../../App.css";
import client from "../../client";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const handleViewMore = (project) => {
    setCurrentProject(project);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "Project_Section"] {
          Project_Name,
          Project_Link,
          Sub_Desc,
          Full_Desc,
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
    <div>
      <div className="mx-auto container" id="projects">
        <div className="min-h-screen bg-light px-4 sm:px-6 md:px-24 py-20">
          <div className="w-full text-center mb-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold mb-6 relative inline-block">
                <span className="gradient-text">My Projects</span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full"></div>
              </h2>
            </div>

            {data.length === 0 && (
              <div className="text-gray-700 mt-4 text-md font-bold">
                My top 3 projects are currently unavailable. I'm working on
                restoring them soon :)
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
              {data.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 transform transition-all duration-300 ease-in-out hover:-translate-y-2 border border-gray-100"
                >
                  <div className="text-xl font-bold mb-3 text-primary">
                    {project.Project_Name}
                  </div>
                  <div className="text-gray-600 mb-6 text-sm">
                    {project.Sub_Desc}
                  </div>
                  <button
                    onClick={() => handleViewMore(project)}
                    className="inline-flex items-center text-accent font-medium text-sm hover:text-secondary transition-colors"
                  >
                    View More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="text-gray-700 font-semibold text-lg mb-3">
                View more projects on Github!
              </div>
              <a
                href="https://github.com/Taranveer1"
                target="_blank"
                rel="noreferrer"
                className="inline-block"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-primary hover:text-secondary transition-colors">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            <div className="mt-12">
              <img
                src={Picture}
                alt="work's pic"
                className="mr-auto w-2/5 md:w-1/6 h-auto opacity-70"
              />
            </div>

            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-black bg-opacity-70" onClick={closeModal}></div>
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-11/12 max-h-[90vh] overflow-y-auto relative z-10">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold gradient-text mb-4">
                      {currentProject?.Project_Name}
                    </h2>

                    <a
                      href={currentProject?.Project_Link}
                      target="_blank"
                      rel="noreferrer"
                      className="mb-6 inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-primary hover:text-secondary transition-colors font-medium text-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on Github
                    </a>

                    <div className="text-gray-700 leading-relaxed mb-8 text-center">
                      {currentProject?.Full_Desc}
                    </div>

                    <div className="w-full">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                        Tech Used
                      </h4>
                      <div className="flex flex-wrap justify-center gap-4 mb-6">
                        {currentProject?.Icons && currentProject.Icons.map((tech, index) => (
                          <div
                            key={index}
                            className="text-primary text-3xl bg-gray-100 p-3 rounded-lg hover:text-secondary transition-colors"
                            dangerouslySetInnerHTML={{ __html: tech }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <button
                      className="mt-4 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-bold hover:shadow-lg transition-all duration-300"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
