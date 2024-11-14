import React from "react";
import runners_img from "../assets/runners-image.png";
import ShaderBackground from "./ShaderBackground";
import { Link, useLocation } from "react-router-dom";
import registern_now_bg from "../assets/register-now-bg.png";

function MarathonBanner() {
  const location = useLocation();
  return (
    <div className="relative flex justify-between flex-col  items-center mx-2 h-52 md:flex-row  md:mx-6 2xl:mx-auto mt-3 xl:max-w-screen-2xl">
      {/* Add the ShaderBackground component */}
      <ShaderBackground />

      <div className="hidden w-2/4 md:block">
        <div className="  w-80 absolute bottom-0 -left-8">
          <img src={runners_img} alt="Runners img" />
        </div>
      </div>
      <div className="w-full mt-6 md:mt-0 text-center">
        {/* <img
          src="https://placehold.co/150x40?text=Title+Sponsor+Logo"
          alt="Title Sponsor Logo"
          className="mx-auto mb-2"
        /> */}

        <h1 className="font-outfit text-4xl sm:text-4xl lg:text-5xl text-white font-extrabold text-shadow-lg">
          PALA MARATHON
        </h1>
        <p className="font-outfit text-white mt-2 text-xl lg:text-xl font-light text-shadow-md">
          19<sup className="text-sm">th</sup> January 2025
        </p>
      </div>
      <div className="flex md:flex w-3/6 h-full mx-auto items-center">
      {location.pathname !== "/register" && (
        <Link
          to="/register"
          className="px-6 mx-auto md:mx-0 py-3 font-outfit text-lg text-white font-semibold rounded-lg hover:opacity-80 transition border border-purple-600 duration-300 bg-cover bg-center"
          style={{
            backgroundImage: `url(${registern_now_bg})`,
            filter: "sepia(0.3) hue-rotate(30deg) brightness(1.1)",
          }}
        >
          REGISTER NOW
        </Link>
      )}
      </div>
    </div>
  );
}

export default MarathonBanner;
