import React from 'react';
import rectangle from 'Pala-Marathon-Website/client/src/assets/rectangle.png';
import road from 'Pala-Marathon-Website/client/src/assets/road.png';

const RoutePage = () => {
  return (
    <div className="relative py-12 md:py-16 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Section */}
        <div className="relative flex flex-col items-center md:items-start">
          {/* Dot Image */}
          <img
            src={rectangle}
            alt="Dots"
            className="absolute top-[-30px] left-[-30px] md:left-[-70px] w-12 h-12 md:w-20 md:h-20 z-10"
          />
          
          <div className="w-full max-w-lg text-center md:text-left md:ml-24">
            <h1 className="text-3xl md:text-4xl font-extrabold text-purple-900 mb-4 md:mb-6">
              OUR <span className="text-black">VISION</span>
            </h1>
            
            {/* Paragraph with mobile border and responsive padding */}
            <div className="p-4 md:p-0 border-2 border-purple-150 bg-purple-50/50 md:border-none rounded-lg">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Pala, a town rich in culture and community spirit, presents a 
                great opportunity to start a running club, bringing together 
                people of all ages to promote health, fitness, and camaraderie. 
                We aim to revive the spirit of Pala!
              </p>
            </div>
          </div>
          
      
          
        </div>
        
        {/* Right Section - Responsive Collage Image */}
        <div className="relative w-full mt-3 md:mt-0 md:pl-16">
          <img
            src={road}
            alt="Collage of Running Events"
            className="w-full h-auto object-cover md:w-[150%]"
          />
        </div>
      </div>
    </div>
  );
};

export default RoutePage;