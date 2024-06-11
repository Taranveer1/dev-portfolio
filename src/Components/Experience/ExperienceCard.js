import React from 'react';

function ExperienceCard({ company, role, duration, description }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{role}</h3>
                <p className="text-sm text-gray-600 mb-1">{company}</p>
                <p className="text-sm text-gray-600 mb-2">{duration}</p>
                <p className="text-sm text-gray-700">{description}</p>
            </div>
        </div>
    );
}

export default ExperienceCard;
