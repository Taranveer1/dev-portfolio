import React from "react";

function Home() {
  return (
    <div className="flex justify-left min-h-screen">
      <div className="px-80 py-60">

        <p className="text-green-500 text-xl font-bold mb-6 md:text-2xl">
        <span className="inline-block w-8 invisible">{'< '}</span>
        <span className="inline-block w-8 invisible">{'< '}</span>
          Hi, my name is
        </p>
        
        
        <p className="text-blue-200 text-xl mb-6 font-bold md:text-8xl">
         <span className="inline-block w-8 invisible">{'< '}</span>
         <span className="inline-block w-8 invisible">{'< '}</span>
          Taranveer Flora.
        </p> 

        <p className="text-slate-500 text-6xl mb-6 font-bold font-mono">
        <span className="inline-block w-8 invisible">{'< '}</span>
          <span className="text-green-500">{'< '}</span>
          I code cool things for fun.
          <span className="text-green-500">{'/>'}</span>
        </p>

        <p className="text-slate-500 text-2xl">
         <span className="inline-block w-8 invisible">{'< '}</span>
         <span className="inline-block w-8 invisible">{'< '}</span>

          I'm a computer science student @ Penn State with concertations in software development. 
        </p>
        <p className="text-slate-500 text-2xl">
         <span className="inline-block w-8 invisible">{'< '}</span>
         <span className="inline-block w-8 invisible">{'< '}</span>

         My top coding langauges are Java and Python. Constantly searching for new opportunities 
        </p>
        <p className="text-slate-500 text-2xl">
         <span className="inline-block w-8 invisible">{'< '}</span>
         <span className="inline-block w-8 invisible">{'< '}</span>

         to learn new things. 
        </p>

      </div>
    </div>
  );
}

export default Home;
