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
    <div className="mx-auto mt-1 md:mt-5 p-5 w-full max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {data.map((experience, index) => (
          <div
            key={index}
            className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl flex items-center p-6 transform transition-all duration-300 ease-in-out hover:-translate-y-2 border border-gray-100"
            onClick={() => openModal(experience)}
          >
            <div className="mr-6 p-4 bg-gray-100 rounded-lg">
              <img
                src={experience.Image.asset.url}
                alt={`${experience.Company_Name} logo`}
                className="object-cover h-16 w-16 md:w-20 md:h-20 rounded-lg"
              />
            </div>
            <div>
              <h3 className="font-bold text-primary text-lg md:text-xl mb-1">
                {experience.Company_Name}
              </h3>
              <p className="text-gray-700 font-medium mb-1 text-sm md:text-base">
                {experience.Role}
              </p>
              <p className="text-gray-500 text-xs md:text-sm mb-1">
                {experience.Location}
              </p>
              <p className="text-gray-500 text-xs md:text-sm mb-2">{experience.Date}</p>
              <p className="text-accent font-medium text-xs md:text-sm inline-flex items-center">
                More info
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
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
