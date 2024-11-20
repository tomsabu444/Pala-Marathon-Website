import React from "react";

import ContactPage from "./ContactPage";
import GoverningBodyPage from "./GoverningBodyPage";

import PalaMarathon from "../assets/PalaMarathon.svg";
import { Link } from "react-router-dom";

//? svg pattern
import dots_Pattern from "../assets/dots_Pattern.svg";
import CountdownTimer from "../components/CountdownTimer";

function HomePage() {
  return (
    <>
      <div className="relative h-dvh bg-gradient-to-b from-[#FFC1E2] via-[#FFC1E2] to-[#FFFFFF] font-outfit">
        {/*//! Dots Pattern */}
        <div className="absolute top-24">
          <img src={dots_Pattern} alt="Dots Pattern" />
        </div>

        {/* //! contact No */}
        <div className=" hidden md:block absolute bottom-24 -left-16 transform -rotate-90 text-[#330A48] transform-origin-left">
          <p className="text-lg">Contact No: 9784586721</p>
        </div>

        {/* //! Main Content */}
        <div className="flex flex-col justify-items-center h-full">
          <div className="flex flex-col items-center justify-center mt-10 pt-16 gap-4 h-4/6">
            <img
              src={PalaMarathon}
              alt="PalaMarathon"
              className="h-40 mb-2 drop-shadow-lg"
            />
            <h1 className="text-xl font-bold text-[#8B0A1E]">
              19th JANUARY 2025
            </h1>

            <Link
              to="/register"
              className="px-8 py-3 mt-4 text-white bg-[#330A48] rounded-full"
            >
              REGISTER NOW
            </Link>
          </div>

          <div className="flex flex-col">
            <h1 className=" text-center text-xl lg:text-2xl text-custom-pink mb-5">
              COUNTDOWN TO PALA MARATHON
            </h1>
            {/* Countdown Timer */}
            <CountdownTimer
              eventDate={new Date("2025-01-19T00:00:00").getTime()}
            />
          </div>
        </div>

      </div>
      {/* Vison */}
      <VisionPage />
      {/* Governing Body */}
      <GoverningBodyPage />

      {/* Contact US */}
      <ContactPage />
    </>
  );
}

export default HomePage;
