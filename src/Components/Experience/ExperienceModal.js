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
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-11/12 max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-4 rounded-xl mb-6">
            <img
              src={experience.Image.asset.url}
              alt={`${experience.Company_Name} logo`}
              className="h-24 w-auto object-contain"
            />
          </div>
          
          <h2 className="text-2xl font-bold gradient-text mb-2">
            {experience.Company_Name}
          </h2>
          
          <h3 className="text-xl text-gray-700 font-medium mb-4">
            {experience.Role}
          </h3>
          
          <div className="flex items-center justify-center space-x-6 mb-6 text-gray-500">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{experience.Location}</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{experience.Date}</span>
            </div>
          </div>
          
          <div className="text-gray-700 leading-relaxed mb-8 text-center">
            <p>{experience.Description}</p>
          </div>
          
          <div className="w-full">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Technologies Used
            </h4>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {experience.Icons && experience.Icons.map((tech, index) => ( 
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
  );
}

export default ExperienceModal;

