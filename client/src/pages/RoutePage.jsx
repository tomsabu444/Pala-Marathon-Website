import React from 'react';
import rectangle from 'Pala-Marathon-Website/client/src/assets/rectangle.png';
import road from 'Pala-Marathon-Website/client/src/assets/road.png';
import smRoad from 'Pala-Marathon-Website/client/src/assets/s-road.png'; // Small screen road image

const RoutePage = () => {
  return (
    <div className="relative py-12 md:py-16 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
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
              className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-transparent"
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
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 md:gap-12 mt-8">
              {/* Half Marathon */}
              <div
                className="text-center border border-purple-300 bg-purple-50/50 rounded-lg p-4 md:p-0 md:border-none"
              >
                <h2
                  className="text-lg md:text-base font-bold"
                  style={{
                    color: '#330A48',
                  }}
                >
                  HALF MARATHON
                </h2>
                <h3
                  className="text-xl md:text-3xl font-bold mt-1"
                  style={{
                    color: '#8D1455',
                  }}
                >
                  21KM
                </h3>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block border-l-2 border-orange-300 h-24"></div>

              {/* 10K Marathon */}
              <div
                className="text-center border border-purple-300 bg-purple-50/50 rounded-lg p-4 md:p-0 md:border-none"
              >
                <h2
                  className="text-lg md:text-base font-bold"
                  style={{
                    color: '#330A48',
                  }}
                >
                  10K MARATHON
                </h2>
                <h3
                  className="text-xl md:text-3xl font-bold mt-1"
                  style={{
                    color: '#8D1455',
                  }}
                >
                  10KM
                </h3>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block border-l-2 border-orange-300 h-24"></div>

              {/* Fun Run */}
              <div
                className="text-center border border-purple-300 bg-purple-50/50 rounded-lg p-4 md:p-0 md:border-none"
              >
                <h2
                  className="text-lg md:text-base font-bold"
                  style={{
                    color: '#330A48',
                  }}
                >
                  FUN RUN
                </h2>
                <h3
                  className="text-xl md:text-3xl font-bold mt-1"
                  style={{
                    color: '#8D1455',
                  }}
                >
                  3KM
                </h3>
              </div>
            </div>

            {/* Register Button */}
            <div className="mt-12 flex justify-center md:justify-start">
              <button className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg font-semibold text-purple-900 border-2 border-purple-900 rounded-full hover:bg-purple-900 hover:text-white transition duration-300">
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Images */}
        <div className="relative w-full mt-6 md:mt-0 md:pl-16">
          {/* Image for large screens */}
          <div className="hidden lg:block md:absolute md:right-[-64px] md:w-[calc(100%+64px)]">
            <img
              src={road}
              alt="Route Map or Road Image"
              className="w-full h-[65vh] rotate-35 object-cover z-30 mt-[-276px] lg:block hidden"
            />
          </div>

          {/* Image for small screens */}
          <div className="block md:hidden">
            <img
              src={smRoad}
              alt="Route Map or Road Image (Small)"
              className="w-full object-cover z-30 -mt-3"
              style={{
                height:'60px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePage;
