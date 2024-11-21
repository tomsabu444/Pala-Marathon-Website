import React from 'react';
import dot from 'Pala-Marathon-Website/client/src/assets/dot.png';
import collageImg from 'Pala-Marathon-Website/client/src/assets/palaimg.png'; // Single image for the collage

const SecondVision = () => {
  return (
    <div className="relative py-16 px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="relative flex justify-center md:justify-start">
          {/* Dot Image */}
          <img
            src={dot}
            alt="Dots"
            className="absolute top-[-40px] left-[-50px] md:left-[-70px] w-16 h-16 md:w-20 md:h-20"
          />
          <div className="ml-0 md:ml-24 max-w-lg text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-purple-900 mb-6">
              OUR <span className="text-black">VISION</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pala, a town rich in culture and community spirit, presents a
              great opportunity to start a running club, bringing together
              people of all ages to promote health, fitness, and camaraderie. We
              aim to revive the spirit of Pala!
            </p>
          </div>
          {/* Contact Text */}
          <div className="absolute left-[-115px] top-[300px] rotate-90 text-purple-900 text-sm font-bold">
            CONTACT: 9784 - 586 - 721
          </div>
        </div>

        {/* Right Section - Single Collage Image */}
        <div className="relative w-full md:pl-16">
          <img
            src={collageImg}
            alt="Collage of Running Events"
            className="w-full h-auto  object-cover md:object-right md:w-[150%]"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondVision;
