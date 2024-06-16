// import React, { useState } from "react";
// import FormModal from "./FormModal";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       content: `**Name:** ${formData.name} \n **Email:** ${formData.email} \n **Message:** ${formData.message}`,
//     };

//     try {
//       const response = await fetch(process.env.REACT_APP_DISCORD_WEBHOOK_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         setModalMessage("Message sent successfully!");
//         setIsModalOpen(true);
//         setFormData({
//           name: "",
//           email: "",
//           message: "",
//         });
//       } else {
//         setModalMessage("Failed to send message. Please try again later.");
//         setIsModalOpen(true);
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setModalMessage("An error occurred. Please try again later.");
//       setIsModalOpen(true);
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div
//       className="sm:flex justify-center items-center min-h-max px-6 md:px-24 py-20 bg-darkBlue"
//       id="contact"
//     >
//       <div className="max-w-md w-full">
//         <h2 className="text-3xl font-semibold text-green text-center">
//           Get in touch!
//         </h2>
//         <div>
//           <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block mb-2 text-sm font-medium text-blue"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="shadow bg-transparent border-blue text-blue text-sm rounded block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green focus:border-green"
//                   placeholder="Krushil Amrutiya"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-blue"
//                 >
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="shadow bg-transparent text-blue text-sm rounded block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-orange focus:border-green"
//                   placeholder="contact@krushil.dev"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block mb-2 text-sm font-medium text-blue"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows="6"
//                   className="shadow-effect bg-transparent text-blue text-sm rounded block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green focus:border-green"
//                   placeholder="Drop me a hey...!!!"
//                   required
//                 ></textarea>
//               </div>
//               <div className="text-right">
//                 <button
//                   type="submit"
//                   className="transition ease-in-out delay-150 hover:scale-110 py-2 px-4 text-sm font-medium text-center text-white rounded bg-green sm:w-fit"
//                 >
//                   Send message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div
//         className={`${
//           isModalOpen ? "fixed inset-0 backdrop-blur-md" : "hidden"
//         }`}
//       ></div>
//       <FormModal
//         isOpen={isModalOpen}
//         message={modalMessage}
//         onClose={closeModal}
//       />
//     </div>
//   );
// }

// export default Contact;
import React, { useState } from "react";
import FormModal from "./FormModal";

function Contact() {
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
      const response = await fetch(process.env.REACT_APP_DISCORD_WEBHOOK_URL, {
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

  return (
    <div
      className="sm:flex justify-center items-center min-h-max px-6 md:px-24 py-20 bg-darkBlue"
      id="contact"
    >
      <div className="max-w-md w-full">
        <h2 className="text-4xl font-semibold text-green border-b-2 border-blue mx-auto my-8 text-center w-fit">
  Get in touch!
</h2> 

        <div>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-blue"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="shadow bg-transparent border border-blue text-blue text-sm rounded block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green focus:border-green"
                  placeholder="Taranveer Flora"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-blue"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow bg-transparent border border-blue text-blue text-sm rounded block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-orange focus:border-green"
                  placeholder="contact@taranveer.dev"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-blue"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="shadow-effect bg-transparent border border-blue text-blue text-sm rounded block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green focus:border-green"
                  placeholder="Drop me a hey...!!!"
                  required
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="transition ease-in-out delay-150 hover:scale-110 py-2 px-4 text-sm font-medium text-center text-white rounded bg-green sm:w-fit"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`${
          isModalOpen ? "fixed inset-0 backdrop-blur-md" : "hidden"
        }`}
      ></div>
      <FormModal
        isOpen={isModalOpen}
        message={modalMessage}
        onClose={closeModal}
      />
    </div>
  );
}

export default Contact;
