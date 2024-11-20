import React from "react";
import ContactPage from "./ContactPage";
import GoverningBodyPage from "./GoverningBodyPage";

import PalaMarathon from "../assets/PalaMarathon.svg";
import { Link } from "react-router-dom";

//? svg pattern
import dots_Pattern from "../assets/dots_Pattern.svg";

function HomePage() {
  return (
    <>
      <div className=" relative h-screen bg-gradient-to-b from-[#FFC1E2] via-[#FFC1E2] to-[#FFFFFF] font-outfit">
        {/*//! Dots Pattern */}
        <div className=" absolute top-44 ">
          <img src={dots_Pattern} alt="Dots Pattern" />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 h-full">
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
      </div>

      {/* Governing Body */}
      <GoverningBodyPage />

      {/* Contact US */}
      <ContactPage />
    </>
  );
}

export default HomePage;
