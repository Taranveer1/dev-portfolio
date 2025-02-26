import React, { useEffect, useState } from "react";
import FormModal from "./FormModal";
import "../../App.css";
import client from "../../client";

function Contact() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      content: `**Name:** ${formData.name} \n **Email:** ${formData.email} \n **Message:** ${formData.message}`,
    };

    try {
      const response = await fetch(data[0].Discord_Webhook_URL, {
      
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setModalMessage("Message sent successfully!");
        setIsModalOpen(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setModalMessage("Failed to send message. Please try again later.");
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setModalMessage("An error occurred. Please try again later.");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    client
      .fetch(
        `*[_type == "Contact_Section"] {
            Discord_Webhook_URL
        }`
      )
      .then((data) => {
        if (data.length > 0) {
          setData(data);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-light px-6 md:px-24 py-20"
      id="contact"
    >
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 relative inline-block">
            <span className="gradient-text">Get in touch!</span>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full"></div>
          </h2>
        </div>

        <div className="py-8 px-4 mx-auto max-w-screen-md">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700 text-left"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="shadow-sm bg-white border border-gray-200 text-gray-700 text-sm rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Taranveer Flora"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700 text-left"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="shadow-sm bg-white border border-gray-200 text-gray-700 text-sm rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="contact@taranveer.dev"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700 text-left"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="shadow-sm bg-white border border-gray-200 text-gray-700 text-sm rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Drop me a hey...!!!"
                required
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-bold hover:shadow-lg transition-all duration-300"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-70" onClick={closeModal}></div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-11/12 relative z-10">
            <p className="text-lg text-gray-800 mb-6 text-center">{modalMessage}</p>
            <div className="flex justify-center">
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-bold hover:shadow-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
