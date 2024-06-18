import React from "react";

function Footer() {
  return (
    <div className="bg-darkBlue text-center py-5 border-t-[0.5px] border-blue">
      <p className="text-blue mb-2">Lets connect!</p>

      <div className="flex justify-center items-center gap-4 text-2xl mb-2 text-green block md:hidden lg:hidden xl:hidden">
        <i className="bx bxl-github"></i>
        <i className="bx bxl-twitter"></i>
        <i className="bx bxl-linkedin-square"></i>
      </div>
    </div>
  );
}

export default Footer;
