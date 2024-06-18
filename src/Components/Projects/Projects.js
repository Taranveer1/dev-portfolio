// import React, { useState } from "react";
// import Modal from "./Modal";
// import project1Image from "./sparc.png";
// import project2Image from "./sparc.png";

// function Projects() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       name: "Project 1",
//       description: "This is a brief description of Project 1.",
//       image: project1Image,
//       details: "This is the detailed description of Project 1.",
//     },
//     {
//       id: 2,
//       name: "Project 2",
//       description: "This is a brief description of Project 2.",
//       image: project2Image,
//       details: "This is the detailed description of Project 2.",
//     },
//     // Add more projects as needed
//   ];

//   const handleProjectClick = (project) => {
//     setSelectedProject(project);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedProject(null);
//   };

//   return (
//     <section className="bg-[#0a192f] py-20" id="projects">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-semibold text-blue-200 mb-8">
//           My Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-[#112240] rounded-lg shadow-lg overflow-hidden cursor-pointer"
//               onClick={() => handleProjectClick(project)}
//             >
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-blue-200 mb-2">
//                   {project.name}
//                 </h3>
//                 <p className="text-slate-300">{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {showModal && (
//         <Modal
//           project={selectedProject}
//           onClose={handleCloseModal}
//           className="bg-[#0a192f] text-blue-200"
//         />
//       )}
//     </section>
//   );
// }

// export default Projects;



import React, { useEffect, useState } from "react";
// import Picture from "../../assets/work.png";
// import "./MyProjects.css";
import ProjectData from "./Data";
import Picture from "./picture.svg";
import "../../App.css";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const [project, setProject] = useState([]);
  const [error, setError] = useState(false);

  const handleViewMore = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  return (
    <div className="shadow-md">
      <div className="mx-auto container" id="projects">
        <div className="min-h-screen bg-darkBlue px-4 sm:px-6 md:px-24 py-20">
          <div className="w-full text-center mb-4">
            <div className="sm:mt-10 text-xl sm:text-2xl md:text-3xl text-green font-semibold border-b-4 border-blue inline-block">
              My Projects
            </div>
            {/* <div className="text-gray mt-6 text-md sm:text-xl font-medium">
              My top 3 all-time favorite projects I've crafted!
            </div> */}

            {ProjectData.length === 0 && (
              <div className="text-green mt-4 text-md font-bold">
                My top 3 projects are currently unavailable. I'm working on restoring them soon :)
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 m-6">
              {ProjectData.map((projectItem, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-10 rounded-md dark-shadow"
                >
                  <div className="text-md md:text-xl font-semibold mb-2 text-green">
                    {projectItem.Project_Name}
                  </div>
                  <div className="text-xs md:text-lg text-gray mb-4">
                    {projectItem.Sub_Description}
                  </div>
                  <button
                    onClick={() => handleViewMore(projectItem)}
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
                href="https://github.com/krushil1"
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
                      {currentProject.Description}
                    </div>

                    <p className="text-lg text-gray mt-4 font-semibold">
                      Tech Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <hr className="w-full max-w-lg rounded-full border-green" />
                      {currentProject &&
                        currentProject.Icons_For_Tech_Used.map(
                          (tech, index) => (
                            <div
                              key={index}
                              className="text-blue text-3xl"
                              dangerouslySetInnerHTML={{ __html: tech }}
                            ></div>
                          )
                        )}
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