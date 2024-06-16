import React, { useState } from "react";
import experiences from "./Data";
import ExperienceModal from "./ExperienceModal";

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
    <div className="mx-auto mt-1 md:mt-5 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="cursor-pointer shadow-md rounded-lg flex items-center p-5 bg-gray-800 transform transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => openModal(experience)}
          >
            <div className="border-r-2 border-blue p-4">
              <img
                src={experience.image}
                alt={`${experience.name} logo`}
                className="object-cover h-14 w-14 md:w-24 md:h-24 rounded-full"
              />
            </div>
            <div className="ml-4">
              <p className="font-bold text-blue text-lg md:text-xl">
                {experience.name}
              </p>
              <p className="text-gray font-semibold mb-1 text-md md:text-lg">
                {experience.role}
              </p>
              <p className="text-gray text-sm md:text-md">{experience.location}</p>
              <p className="text-gray text-sm md:text-md">{experience.date}</p>
              <p className="text-green font-semibold text-sm md:text-md mt-2 underline">
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
