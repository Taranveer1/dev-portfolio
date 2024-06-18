import React, { useState } from "react";
import experiences from "./Data";
import ExperienceModal from "./ExperienceModal";
import "../../App.css";

function ExperienceItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalExperience, setModalExperience] = useState(null);

  const openModal = (experience) => {
    setModalExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalExperience(null);
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto mt-1 md:mt-5 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="cursor-pointer dark-shadow rounded-lg flex items-center p-5 bg-gray-800 transform transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => openModal(experience)}
          >
            <div className="border-r-2 border-blue p-3">
              <img
                src={experience.image}
                alt={`${experience.name} logo`}
                className="object-cover h-14 w-14 md:w-24 md:h-24 rounded"
              />
            </div>
            <div className="ml-4">
              <p className="font-bold text-green text-md md:text-xl">
                {experience.name}
              </p>
              <p className="text-gray font-semibold mb-1 text-sm md:text-lg">
                {experience.role}
              </p>
              <p className="text-gray text-xs md:text-md">{experience.location}</p>
              <p className="text-gray text-xs md:text-md">{experience.date}</p>
              <p className="text-blue font-semibold text-xs md:text-base mt-2">
                More info
              </p>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ExperienceModal experience={modalExperience} onClose={closeModal} />
      )}
    </div>
  );
}

export default ExperienceItem;
