import React from 'react';

function Manage() {
  const handleClick = () => {
    window.open('https://thomasaskharouncms.sanity.studio/', '_blank');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button 
        className="bg-green hover:bg-gray text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Manage
      </button>
    </div>
  );
}

export default Manage;