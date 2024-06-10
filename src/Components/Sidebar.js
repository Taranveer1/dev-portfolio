import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="fixed bottom-0 left-0 p-9">
      <div className="flex flex-col items-center">
        {/* Social Links */}
        <a href="https://github.com/Taranveer1" target="_blank" rel="noopener noreferrer" className="text-blue-200 mb-3">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/TaranveerFlora" target="_blank" rel="noopener noreferrer" className="text-blue-200 mb-3">
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </a>
        <a href="https://linkedin.com/in/taranveerflora" target="_blank" rel="noopener noreferrer" className="text-blue-200 mb-3">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        {/* Decorative Line */}
        <div className="w-0.5 bg-blue-200 h-24"></div>

    
      </div>
    </div>
  );
};

export default Sidebar;
