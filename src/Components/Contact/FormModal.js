import React from "react";
import "../../App.css";

function FormModal({ isOpen, message, onClose }) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-70" onClick={onClose}></div>
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-11/12 relative z-10">
        <p className="text-lg text-gray-800 mb-6 text-center">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-bold hover:shadow-lg transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormModal;
