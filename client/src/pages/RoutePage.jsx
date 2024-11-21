import React from 'react';
import rectangle from 'Pala-Marathon-Website/client/src/assets/rectangle.png';
import road from 'Pala-Marathon-Website/client/src/assets/road.png';

const RoutePage = () => {
  return (
    <div className="relative py-12 md:py-16 px-4 md:px-16 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Section */}
        <div className="relative flex flex-col items-center md:items-start">
          {/* Decorative Rectangle */}
          <img
            src={rectangle}
            alt="Decorative dots"
            className="absolute top-[-30px] left-[-30px] md:left-[-70px] w-12 h-12 md:w-20 md:h-20 z-10"
          />

          <div className="w-full max-w-lg text-center md:text-left md:ml-24">
            {/* Heading with Transparent Text and Outline */}
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-transparent"
              style={{
                WebkitTextStroke: '1.5px #330A48',
                WebkitTextFillColor: 'transparent',
              }}
            >
              THE ROUTE
            </h1>

            {/* Paragraph */}
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-10">
              Experience the scenic beauty and vibrant spirit of Pala as you race through our thoughtfully designed marathon route for 2024!
            </p>

            {/* Marathon Details Section */}
            <div className="flex justify-center md:justify-start gap-12 mt-8">
              {/* Half Marathon */}
              <div className="text-center">
                <h2 className="text-4xl md:text-base font-bold "
                style={{
                  color:'#330A48',
                }}
                >HALF MARATHON</h2>
                <h3
                  className="text-lg md:text-3xl font-bold mt-1"
                  style={{
                    color: '#8D1455',
                  }}
                >
                  21KM
                </h3>
              </div>

              {/* Vertical Divider */}
              <div className="border-l-2 border-orange-300 h-24"></div>

              {/* 10K Marathon */}
              <div className="text-center">
                <h2 className="text-sm md:text-base font-bold "
                style={{
                  color:'#330A48',
                }}
                >10K MARATHON</h2>
                <h3
                  className="text-lg md:text-3xl font-bold mt-1"
                  style={{
                    color: '#8D1455',
                  }}
                >
                  10KM
                </h3>
              </div>

              {/* Vertical Divider */}
              <div className="border-l-2 border-orange-300 h-24"></div>

              {/* Fun Run */}
              <div className="text-center">
                <h2 className="text-sm md:text-base font-bold "
                style={{
                  color:'#330A48',
                }}
                >FUN RUN</h2>
                <h3
                  className="text-lg md:text-3xl font-bold mt-1"
                  style={{
                    color: '#8D1455',
                  }}
                >
                  3KM
                </h3>
              </div>
            </div>

            {/* Register Button */}
            <div className="flex justify-center">
            <div className="mt-12 flex justify-center md:justify-start">
              <button className="px-8 py-3 text-base md:text-lg font-semibold text-purple-900 border-2 border-purple-900 rounded-full hover:bg-purple-900 hover:text-white transition duration-300">
                REGISTER NOW
              </button>
            </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-full mt-3 md:mt-0 md:pl-16">
          <img
            src={road}
            alt="Route Map or Road Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RoutePage;
