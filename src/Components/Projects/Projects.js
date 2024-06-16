import React, { useState } from "react";
import Modal from "./Modal";
import project1Image from "./sparc.png";
import project2Image from "./sparc.png";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Project 1",
      description: "This is a brief description of Project 1.",
      image: project1Image,
      details: "This is the detailed description of Project 1.",
    },
    {
      id: 2,
      name: "Project 2",
      description: "This is a brief description of Project 2.",
      image: project2Image,
      details: "This is the detailed description of Project 2.",
    },
    // Add more projects as needed
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="bg-[#0a192f] py-20" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-blue-200 mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#112240] rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-200 mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <Modal
          project={selectedProject}
          onClose={handleCloseModal}
          className="bg-[#0a192f] text-blue-200"
        />
      )}
    </section>
  );
}

export default Projects;
