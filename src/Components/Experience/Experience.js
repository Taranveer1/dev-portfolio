import React from 'react';
import ExperienceCard from './ExperienceCard';
import experienceImage from "../../assets/sparc.png";

function Experience() {
    const experiences = [
        {
            company: 'SPARC Foundation',
            role: 'Full-Stack Software Developer',
            duration: 'Start Date - End Date', // Replace with actual dates
            description: 'Developed and maintained web and mobile applications using React Native and Expo for the frontend, and MongoDB, Node.js, and Express.js for the backend. Contributed to the design and implementation of new features, ensuring responsiveness and seamless integration.',
            image: experienceImage // Image path
        },
        // Add more experiences as needed
    ];

    return (
        <section className="bg-[#0a192f] py-20">
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold text-blue-200 mb-8">Where I've Worked</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;