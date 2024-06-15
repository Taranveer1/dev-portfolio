import React, { useState } from "react";
// import "./ExperienceItem.css";
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

  const isSingleExperience = experiences.length === 1;

  return (
    <div className="mx-auto mt-1 md:mt-5">
      <div className="max-w-4xl mx-auto">
        <div
          className="grid grid-cols-1 gap-5"
        >
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="cursor-pointer shadow-2xl rounded-lg flex items-center py-3 transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
              onClick={() => openModal(experience)}
            >
              <div className="border-r-2 border-blue p-6">
                <img
                  src={experience.image}
                  alt="veefriends logo"
                  className="object-cover h-10 w-10 md:w-20 md:h-20"
                />
              </div>
              <div className="ml-3">
                <p className="font-bold text-green  text-sm md:text-lg">
                  {experience.name}
                </p>
                <p className="text-blue font-semibold mb-1  text-sm md:text-lg">
                  {experience.role}
                </p>
                <p className="text-gray text-sm md:text-md">{experience.location}</p>
                <p className="text-gray text-sm md:text-md">{experience.date}</p>
                <div onClick={() => openModal(experience)}>
                  <p className="text-gray font-semibold text-sm md:text-md">More info</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalExperience && (
        <ExperienceModal experience={modalExperience} onClose={closeModal} />
      )}
    </div>
  );
}

export default ExperienceItem;
