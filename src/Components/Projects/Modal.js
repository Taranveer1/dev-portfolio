import React from "react";

function Modal({ project, onClose, className }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${className}`}
    >
      <div className="bg-[#112240] rounded-lg shadow-lg overflow-hidden max-w-2xl w-full mx-4">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-blue-200 mb-4">
            {project.name}
          </h2>
          <p className="text-slate-300 mb-6">{project.details}</p>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
