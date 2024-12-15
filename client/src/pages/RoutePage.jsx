import React from "react";
import rectangle from "../assets/rectangle_bar.svg";
import road from "../assets/road.png";
import smRoad from "../assets/s-road.png"; // Small screen road image
import { Link } from "react-router-dom";

const RoutePage = () => {
  return (
    <div className="relative pt-12  md:py-16 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
        {/* Left Section */}
        <div className="relative flex flex-col items-center md:items-start">
          {/* Decorative Rectangle */}
          <img
            src={rectangle}
            alt="Decorative dots"
            className="absolute top-[-30px] left-[-30px] md:left-[-70px] w-12 h-12 md:w-20 md:h-20 z-10"
            draggable="false"
          />

          <div className="w-full max-w-lg text-center md:text-left md:ml-24">
            {/* Heading with Transparent Text and Outline */}
            <h1
              className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 text-transparent"
              style={{
                WebkitTextStroke: "1.5px #330A48",
                WebkitTextFillColor: "transparent",
              }}
            >
              THE ROUTE
            </h1>

            <p className="relative font-outfit md:text-md text-gray-700 leading-relaxed mb-10">
    <b>Half Marathon (21.1 km):</b> Starts at <b>St. Thomas College Pala Gate 2</b> and goes via Pala town, Chethimattam, Moonnani, Edappadi and Bharananganam till <b>Melambara Sree Dharma Sastha temple Gopuram</b> and turns back to finish at <b>St. Thomas College Pala Gate 2 itself</b>.<br/><br/>
    <b>10K Run (10 km):</b> Starts at <b>St. Thomas College Pala Gate 2</b> and goes via Pala town, Chethimattam, Moonnani till <b>IMA Junction, Moonnani</b> and turns back to finish at <b>St. Thomas College Pala Gate 2 itself</b>.<br/><br/>
    <b>Fun Run (3 km):</b> Starts at <b>Arunapuram-Manalelpadi road</b> (near St. Thomas College Pala Gate 2) and goes to Andoor Junction and turns back to finish at <b>St. Thomas College Pala Gate 2</b>.<br/><br/>
  </p>
            {/* Marathon Details Section */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start   md:gap-10 mt-8">
              {/* Half Marathon */}
              <div className="text-center p-4 md:p-0 md:border-none">
                <h2
                  className="text-base text-[#330A48] font-bold"
                >
                  HALF MARATHON
                </h2>
                <h3
                  className="text-2xl md:text-3xl text-[#8D1455] font-bold mt-1"
                >
                  21KM
                </h3>
              </div>

              {/* Vertical Divider */}
              <div className=" border-l-2 border-orange-300 h-24"></div>

              {/* 10K Marathon */}
              <div className="text-center  p-4 md:p-0  md:border-none">
                <h2
                  className="text-base text-[#330A48] font-bold"
                >
                  10K MARATHON
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-[#8D1455] mt-1">
                  10KM
                </h3>
              </div>

              {/* Vertical Divider */}
              <div className=" hidden sm:block border-l-2 border-orange-300 h-24"></div>

              {/* Fun Run */}
              <div className="text-center  rounded-lg p-4   md:p-0 md:border-none">
                <h2
                  className="text-base text-[#330A48] font-bold"

                >
                  FUN RUN
                </h2>
                <h3
                  className="text-2xl md:text-3xl text-[#8D1455] font-bold mt-1"
                >
                  3KM
                </h3>
              </div>
            </div>

            {/* Register Button */}
            <div className="mt-12 flex justify-center md:justify-center">
              <Link to='/register' className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg font-semibold text-purple-900 border-2 border-purple-900 rounded-full hover:bg-purple-900 hover:text-white transition duration-300">
                REGISTER NOW
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Images */}
        <div className="relative w-full mt-6 md:mt-0 md:pl-16">
  {/* Image visible only on screens wider than 1024px */}
  <div className="hidden xl:block xl:absolute lg:right-[-64px] lg:w-[calc(100%+64px)] ">
    <img
      src={road}
      alt="Route Map or Road Image"
      className="w-full h-[80vh] object-cover z-30 mt-[-425px]"
      draggable="false"
    />
  </div>

  {/* Optionally retain the small screen image if required */}
  {/* <div className="block lg:hidden">
    <img
      src={smRoad}
      alt="Route Map or Road Image (Small)"
      className="w-full h-20 object-cover -mt-3"
    />
  </div> */}
</div>

      </div>
    </div>
  );
};

export default RoutePage;
