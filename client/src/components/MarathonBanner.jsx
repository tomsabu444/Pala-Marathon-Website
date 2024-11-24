import React from "react";
import runners_img from "../assets/runners-image.png";

function MarathonBanner() {
  return (
    <div className="relative bg-custom-pink flex justify-between items-center mx-4 md:mx-6 2xl:mx-auto  mt-3 h-44  xl:max-w-screen-2xl">
      <div className="hidden w-2/4 md:block">
        <div className="w-64 absolute bottom-0 -left-8">
          <img src={runners_img} alt="Runners img" />
        </div>
      </div>
      <div className="w-full text-center">
        {/* Placeholder Title Sponsor Logo */}
        <img
          src="https://placehold.co/150x40?text=Title+Sponsor+Logo"
          alt="Title Sponsor Logo"
          className="mx-auto mb-2"
        />

        <h1 className="font-outfit text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold text-shadow-lg">
          PALA MARATHON
        </h1>
        <p className="font-outfit text-white mt-2 text-lg sm:text-lg lg:text-xl font-light text-shadow-md">
          19<sup className="text-sm">th</sup> January 2025
        </p>
      </div>
      <div className="hidden md:flex w-5/6 h-full mx-auto items-center ">
        <div className="grid justify-items-center h-full">
          {/* Top Row with 3 Columns */}
          <div className="grid grid-cols-3 gap-4 pt-7 justify-items-center">
            <img
              src="https://placehold.co/150x40?text=T+SHIRT+SPONSOR"
              alt="T Shirt Sponsor"
            />
            <img
              src="https://placehold.co/150x40?text=GOLD+SPONSOR"
              alt="Gold Sponsor"
              className="justify-self-center"
            />
            <img
              src="https://placehold.co/150x40?text=SILVER+SPONSOR"
              alt="Silver Sponsor"
              className="justify-self-center"
            />
          </div>

          {/* Bottom Row with 2 Columns */}
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            <img
              src="https://placehold.co/150x40?text=PLATINUM+SPONSOR"
              alt="Platinum Sponsor"
            />
            <img
              src="https://placehold.co/150x40?text=DIAMOND+SPONSOR"
              alt="Diamond Sponsor"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarathonBanner;
