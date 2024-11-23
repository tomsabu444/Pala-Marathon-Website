import React from 'react';
import error from 'Pala-Marathon-Website/client/src/assets/404.png';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6e6e6] to-[#d4b3b3] flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        {/* 404 Image */}
        <div className="mb-8">
          <img 
            src={error}
            alt="404 Error Illustration" 
            className="w-64 mx-auto"
          />
        </div>
        
        {/* Error Message */}
        <h2 className="text-[#333] text-xl font-semibold mb-3">
          PAGE NOT FOUND!
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry! The page you are looking for does not exist
        </p>
        
        {/* Home Button */}
        <button 
          className="px-6 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 
                     transition-colors duration-300 text-sm font-medium"
          onClick={() => window.location.href = '/'}
        >
          GO HOME
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;