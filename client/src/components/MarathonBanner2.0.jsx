import React from "react";
import runners_img from "../assets/runners-image.png";
import ShaderBackground from "./ShaderBackground";
import { Link } from "react-router-dom";

function MarathonBanner() {
  return (
    <div className="relative flex justify-between  items-center mx-2 h-52  md:mx-6 2xl:mx-auto mt-3 xl:max-w-screen-2xl">
      {/* Add the ShaderBackground component */}
      <ShaderBackground />

      <div className="hidden w-3/4 md:block">
        <div className="  w-80 absolute bottom-0 -left-8">
          <img src={runners_img} alt="Runners img" />
        </div>
      </div>
      <div className="w-full text-center">
        {/* <img
          src="https://placehold.co/150x40?text=Title+Sponsor+Logo"
          alt="Title Sponsor Logo"
          className="mx-auto mb-2"
        /> */}

        <h1 className="font-outfit text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold text-shadow-lg">
          PALA MARATHON
        </h1>
        <p className="font-outfit text-white mt-2 text-lg sm:text-lg lg:text-xl font-light text-shadow-md">
          19<sup className="text-sm">th</sup> January 2025
        </p>
      </div>
      <div className="hidden md:flex w-5/6 h-full mx-auto items-center">
      <Link
        to="/register"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
      >
        Register Now
      </Link>
    </div>
    </div>
  );
}

export default MarathonBanner;
