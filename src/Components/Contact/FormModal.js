import React from "react";
import "../../App.css";

function FormModal({ isOpen, message, onClose }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="dark-blue p-10 rounded dark-shadow">
        <p className="text-lg text-green">{message}</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-orange text-blue font-semibold rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormModal;
