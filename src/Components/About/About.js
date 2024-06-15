// // import React from "react";
// // import profileImage from "../../assets/profile1.jpg";
// // import icons from "./Icons";
// // import "./About.css";

// // function About() {
// //   return (
// //     <div
// //       className="flex flex-col justify-center min-h-screen bg-darkBlue px-6 md:px-24 py-20"
// //       id="about"
// //     >
// //       <div className="mx-auto max-w-5xl w-full">
// //         <div className="order-1 md:order-none h-40 w-40 md:h-60 md:w-60 self-center md:self-start p-6">
// //           <img src={profileImage} alt="Taranveer" className="rounded-sm" />
// //         </div>

// //         <div className="flex-1 p-6 order-2 md:order-none">
// //           <div>
// //             <p className="text-2xl sm:text-3xl font-semibold text-green border-b-2 border-blue w-fit">
// //               About Me
// //             </p>

// //             <p className="text-blue mt-5 text-sm sm:text-xl w-11/12 font-medium">
// //               I'm Taranveer Flora, passionate about solving problems with
// //               software development. My journey began in high school with a
// //               mobile app project, leading me to study computer science at Penn
// //               State.
// //             </p>
// //           </div>
// //           <div className="flex flex-wrap items-center justify-start gap-0.5 mt-4">
// //             {icons[0].icons.map((iconHtml, index) => (
// //               <div
// //                 key={index}
// //                 className="flex cursor-pointer justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-md text-green text-lg md:text-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-1"
// //                 dangerouslySetInnerHTML={{ __html: iconHtml }}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         <a className="flex justify-end bg-green text-blue w-min items-end" href="/resume">jjj</a>
// //       </div>
// //     </div>
// //   );
// // }

// // export default About;

// import React from "react";
// import profileImage from "../../assets/profile1.jpg";
// import icons from "./Icons";
// import "./About.css";

// function About() {
//   return (
//     <div
//       className="flex flex-col justify-center min-h-screen bg-darkBlue px-6 md:px-24 py-20"
//       id="about"
//     >
//       <div className="mx-auto max-w-5xl w-full flex flex-col">
//         <div className="flex flex-col md:flex-row md:items-start">
//           <div className="order-1 md:order-2 h-40 w-40 md:h-60 md:w-60 self-center md:self-end p-6">
//             <img src={profileImage} alt="Taranveer" className="rounded-sm" />
//           </div>

//           <div className="flex-1 p-6 order-2 md:order-1">
//             <div>
//               <p className="text-2xl sm:text-3xl font-semibold text-green border-b-2 border-blue w-fit">
//                 About Me
//               </p>

//               <p className="text-blue mt-5 text-sm sm:text-xl w-11/12 font-medium">
//                 I'm Taranveer Flora, passionate about solving problems with
//                 software development. My journey began in high school with a
//                 mobile app project, leading me to study computer science at Penn
//                 State.
//               </p>
//             </div>
//             <div className="flex flex-wrap items-center justify-start gap-0.5 mt-4">
//               {icons[0].icons.map((iconHtml, index) => (
//                 <div
//                   key={index}
//                   className="flex cursor-pointer justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-md text-green text-lg md:text-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-1"
//                   dangerouslySetInnerHTML={{ __html: iconHtml }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right-aligned link at the bottom */}
//         <div className="mt-auto self-end">
//           <a className="bg-green text-blue py-2 px-3 rounded text-xs font-semibold" href="/resume">
//             View Resume
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;



import React from "react";
import profileImage from "../../assets/profile1.jpg";
import icons from "./Icons";
import "./About.css";

function About() {
  return (
    <div
      className="flex flex-col justify-center min-h-screen bg-darkBlue px-6 md:px-24 py-20"
      id="about"
    >
      <div className="mx-auto max-w-5xl w-full flex flex-col h-full">
        {/* Content Section */}
        <div className="flex flex-col md:flex-row md:items-start flex-grow">
          {/* Image container */}
          <div className="order-1 md:order-2 h-40 w-40 md:h-60 md:w-60 self-center md:self-end p-6">
            <img src={profileImage} alt="Taranveer" className="rounded-sm" />
          </div>
          {/* Text and icons container */}
          <div className="flex-1 p-6 order-2 md:order-1">
            <div>
              <p className="text-2xl sm:text-3xl font-semibold text-green border-b-2 border-blue w-fit">
                About Me
              </p>
              <p className="text-blue mt-5 text-sm sm:text-xl w-11/12 font-medium">
                I'm Taranveer Flora, passionate about solving problems with software development. My journey began in high school with a mobile app project, leading me to study computer science at Penn State.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-start gap-0.5 mt-4">
              {icons[0].icons.map((iconHtml, index) => (
                <div
                  key={index}
                  className="flex cursor-pointer justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-md text-green text-lg md:text-2xl shadow-lg transform transition-transform duration-300 hover:-translate-y-1"
                  dangerouslySetInnerHTML={{ __html: iconHtml }}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Resume button at the bottom */}
        <div className="self-end mt-auto">
          <a className="bg-green text-blue py-2 px-4 rounded text-xs font-semibold" href="/resume">
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
