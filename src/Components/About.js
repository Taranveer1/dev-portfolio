import React from 'react';
import profileImage from '../assets/profile1.jpg'; // Adjust the path based on your folder structure

function About() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-[#0a192f] p-6">
            <div className="flex flex-col lg:flex-row max-w-5xl w-full bg-[#112240] rounded-lg shadow-lg overflow-hidden">
                {/* Text Section */}
                <div className="lg:w-3/5 p-8 lg:p-12">
                    <h2 className="text-5xl font-bold text-blue-200 mb-6">
                        <span className="border-b-4 border-green-500 pb-2">About Me</span>
                    </h2>
                    <p className="text-xl text-slate-300 leading-relaxed mb-6">
                        Hi, my name is Taranveer Flora, and I love solving everyday problems using modern software. My interest in software development started back in high school when I developed my own mobile application for my school during my junior year. Turns out, I had a passion for software development, which led me to major in computer science at Penn State.
                    </p>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        <strong>Skills:</strong> React, Python, HTML/CSS, JavaScript, C++, C#, and more!
                    </p>
                </div>
                {/* Image Section */}
                <div className="lg:w-2/5 flex justify-center items-center p-8 lg:p-12 bg-[#0a192f]">
                    <img 
                        src={profileImage} // Use the imported variable here
                        alt="Profile"
                        className="w-full h-auto rounded-lg shadow-md object-cover max-w-lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
