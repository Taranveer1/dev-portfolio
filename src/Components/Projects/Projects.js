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
    <div className="shadow-md">
      <div className="mx-auto container" id="projects">
        <div className="min-h-screen bg-darkBlue px-4 sm:px-6 md:px-24 py-20">
          <div className="w-full text-center mb-4">
            <div className="sm:mt-10 text-xl sm:text-2xl md:text-3xl text-green font-semibold border-b-4 border-blue inline-block">
              My Projects
            </div>

            {data.length === 0 && (
              <div className="text-green mt-4 text-md font-bold">
                My top 3 projects are currently unavailable. I'm working on
                restoring them soon :)
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 m-6">
              {data.map((project, index) => (
                <div key={index} className="p-5 sm:p-10 rounded-md dark-shadow">
                  <div className="text-md md:text-xl font-semibold mb-2 text-green">
                    {project.Project_Name}
                  </div>
                  <div className="text-xs md:text-lg text-gray mb-4">
                    {project.Sub_Desc}
                  </div>
                  <button
                    onClick={() => handleViewMore(project)}
                    className="text-blue font-semibold text-xs md:text-base cursor-pointer hover:text-green"
                  >
                    View More
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="text-green font-semibold text-base md:text-xl">
                View more projects on Github!
              </div>
              <a
                href="https://github.com/Taranveer1"
                target="_blank"
                rel="noreferrer"
                className="mt-2"
              >
                <i className="bx bxl-github cursor-pointer text-blue text-3xl md:text-4xl hover:text-green mb-3"></i>
              </a>
            </div>

            <div>
              <img
                src={Picture}
                alt="work's pic"
                className="mr-auto w-2/5 md:w-2/12 h-auto"
              />
            </div>

            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-black opacity-100 backdrop-blur"></div>
                <div className="modal-content dark-shadow bg-darkBlue p-10 sm:p-20 rounded-md relative flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-2xl mt-3 text-green font-semibold">
                      {currentProject.Project_Name}
                    </p>

                    <div className="text-md font-bold text-gray hover:text-lightgray">
                      <a
                        href={currentProject.Project_Link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View on Github
                      </a>
                    </div>

                    <div className="md:w-3/2 sm:w-96 text-md mt-4 text-gray font-medium">
                      {currentProject.Desc}
                    </div>

                    <p className="text-lg text-gray mt-4 font-semibold">
                      Tech Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <hr className="w-full max-w-lg rounded-full border-green" />
                      {currentProject &&
                        currentProject.Icons.map((tech, index) => (
                          <div
                            key={index}
                            className="text-blue text-3xl"
                            dangerouslySetInnerHTML={{ __html: tech }}
                          ></div>
                        ))}
                    </div>

                    <button
                      className="hover-bounce mt-4 rounded-full px-4 py-2 text-xl font-semibold text-gray shadow-lg hover:text-green"
                      onClick={() => setShowModal(false)}
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
