import React, { useEffect } from "react";
import "../../App.css"
// import "./ExperienceModal.css";

function ExperienceModal({ experience, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModal = () => {
    onClose();
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-darkBlue">
      <div className="fixed inset-0"></div>
      <div className="modal-content shadow-2xl p-10 sm:p-20 rounded-md relative flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src={experience.Image.asset.url}
            alt={`${experience.Company_Name} logo`}
            className="h-20 w-auto rounded-md object-cover p-2 shadow-effect"
          />
          <p className="text-2xl mt-3 text-green font-semibold">
            {experience.Company_Name}
          </p>
          <p className="text-xl text-blue mt-2 font-medium">
            {experience.Role}
          </p>
          <p className="text-md text-gray mt-2 font-light">
            📍{experience.Location}
          </p>
          <p className="text-md text-gray mt-2 font-light">{experience.Date}</p>
          <div className="md:w-3/2 sm:w-96 text-md mt-2 text-blue font-light">
            <p>{experience.Description}</p>
          </div>
          <p className="text-lg text-gray mt-2 font-semibold">
            Technologies Used
          </p>
          <div className="flex flex-wrap gap-2">
            <hr className="w-full max-w-lg rounded-full border-green" />
            {experience.Icons && experience.Icons.map((tech, index) => ( 
              <div
                key={index}
                className="text-gray text-3xl dark-shadow"
                dangerouslySetInnerHTML={{ __html: tech }}
              ></div>
            ))}
          </div>
   
          <button
            className="hover-bounce mt-4 rounded-full px-4 py-2 text-xl font-semibold text-gray shadow-lg"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExperienceModal;

