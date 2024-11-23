import React from "react";
import ShaderBackground from "./ShaderBackground";
import emblem_st_thomascollege from "../assets/emblem_st.thomascollege.png";
import Lions_Clubs_International_logo from "../assets/Lions_Clubs_International_logo.png";
import EfPalalogo from "../assets/org2-cIdbk7rR.png";

const HomeBanner = () => {
  return (
    <div className="flex justify-center items-center w-full mx-auto font-outfit my-7 ">
      <div className="relative flex flex-col justify-center mx-5 items-center w-full max-w-screen-lg md:p-3 rounded-lg  shadow-lg">
        {/* Shader Background */}
        <ShaderBackground />

        {/* Logos and Titles */}
        <div className="flex items-center flex-wrap justify-evenly md:justify-around w-full  sm:px-6 z-10">
          {/* St. Thomas College Logo */}
          <div className="flex flex-col items-center rounded-md p-4">
            <img
              src={emblem_st_thomascollege}
              alt="St. Thomas College, Pala 75th Jubilee Celebrations"
              className="w-23 h-16"
            />
            <h1 className=" text-sm font-medium text-center mt-2 text-white md:text-lg">
              St. Thomas College, Palai
            </h1>
          </div>

          {/* Lions Clubs International Logo */}
          <div className="flex flex-col items-center rounded-md p-4">
            <img
              src={Lions_Clubs_International_logo}
              alt="Lions Clubs International District 318B"
              className="w-23 h-16 object-cover"
            />
            <h1 className="text-sm  font-medium text-center mt-2 text-white md:text-lg">
              Lions Clubs International
            </h1>
          </div>

          {/* Engineers' Forum Logo */}
          <div className="flex flex-col items-center rounded-md p-4">
            <img
              src={EfPalalogo}
              alt="Engineers' Forum, Pala"
              className="w-23 h-16 mix-blend-multiply"
            />
            <h1 className="text-sm  font-medium text-center mt-2 text-white md:text-lg">
              Engineers' Forum, Pala
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
