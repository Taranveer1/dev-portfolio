import ExperienceModal from "./ExperienceModal";
import "../../App.css";

import React, { useEffect, useState } from "react";
import client from "../../client";

function ExperienceItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalExperience, setModalExperience] = useState(null);

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "Experience_Section"] {
          Company_Name,
          Image {
            asset-> {
              url
            }
          },
          Role,
          Location,
          Date,
          Icons,
          Description
        }`
      )
      .then((data) => {
        if (data.length > 0) {
          setData(data);
          console.log(data)
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, []);

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
        {data.map((experience, index) => (
          <div
            key={index}
            className="cursor-pointer dark-shadow rounded-lg flex items-center p-5 bg-gray-800 transform transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => openModal(experience)}
          >
            <div className="border-r-2 border-blue p-3">
              <img
                src={experience.Image.asset.url}
                alt={`${experience.Name} logo`}
                className="object-cover h-14 w-14 md:w-24 md:h-24 rounded"
              />
            </div>
            <div className="ml-4">
              <p className="font-bold text-green text-md md:text-xl">
                {experience.Company_Name}
              </p>
              <p className="text-gray font-semibold mb-1 text-sm md:text-lg">
                {experience.Role}
              </p>
              <p className="text-gray text-xs md:text-md">
                {experience.Location}
              </p>
              <p className="text-gray text-xs md:text-md">{experience.Date}</p>
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
