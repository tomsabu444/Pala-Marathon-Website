import React, { useState } from "react";
import { Twitter, Instagram } from "@mui/icons-material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Link, useLocation } from "react-router-dom";
import HULT from "../assets/HULT-1.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert(`Thank you for subscribing with: ${email}`);
      setEmail(""); // Clear input after submission
    }
  };

  const location = useLocation();

  //* Hide footer if the path is "/404"
  if (location.pathname === "/404") {
    return null;
  }

  return (
    <footer
      className={`bg-gradient-to-r from-[#2D1140] to-[#84185F] text-white py-12 pb-4`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Social Media Section */}
          <div className="md:col-span-3">
            <h3 className="text-md font-thin mt-5">SOCIAL MEDIA</h3>
            <div className="flex space-x-6 mt-2">
              <a href="#" className="hover:opacity-80" aria-label="Facebook">
                <FacebookRoundedIcon fontSize="large" />
              </a>
              <a href="#" className="hover:opacity-80" aria-label="Twitter">
                <Twitter fontSize="large" />
              </a>
              <a href="#" className="hover:opacity-80" aria-label="Instagram">
                <Instagram fontSize="large" />
              </a>
            </div>
          </div>

          {/* Center Links Section */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-3 font-outfit">
              <Link to="/" className="block text-md">
                HOME
              </Link>
              <Link to="/faq" className="block text-sm">FAQ</Link>
              <Link className="block text-sm">RESULTS</Link>
              <Link className="block text-sm">FEEDBACK</Link>
              <Link className="block text-sm">SPONSORS</Link>
            </div>

            {/* Right Column */}
            <div className="space-y-3 font-outfit">
              <Link to="/about-us" className="block text-md">
                ABOUT US
              </Link>
              <Link to="/refund-policy" className="block text-sm">
                REFUND POLICY
              </Link>
              <Link to="/terms-conditions" className="block text-sm">
                TERMS & CONDITIONS
              </Link>
              <Link to="/disclaimer" className="block text-sm">
                DISCLAIMER
              </Link>
              <Link to="/privacy-policy" className="block text-sm">
                PRIVACY POLICIES
              </Link>
            </div>
          </div>

          {/* Stay Up To Date Section */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-6">STAY UP TO DATE</h3>
            <div className="flex h-10">
              <input
                id="mail"
                name="mail"
                autoComplete="true"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-3 py-2 bg-transparent border border-white rounded-l text-sm focus:outline-none"
              />
              <button
                onClick={handleSubmit}
                className="px-6 bg-white text-[#2D1140] rounded-r text-sm hover:bg-gray-100 transition-colors"
              >
                Submit
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </div>
        
        {/* HULT Logo Section */}
        
      <div className="mt-10 flex justify-center items-center text-sm flex-wrap">
        <a 
          href="https://hultinfo.tech" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center ml-2 transition sm:hover:brightness-75 sm:active:scale-95 sm:hover:cursor-pointer lg:hover:none"
        >
          <span className="mr-2">Powered by</span>
          <img 
            src={HULT} 
            alt="HULT" 
            className="h-4 object-contain"
          />
        </a>
      </div>

        </div>
    </footer>
  );
};

export default Footer;
