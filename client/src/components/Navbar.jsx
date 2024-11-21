import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, IconButton } from "@mui/material";

import PalaMarathon from "../assets/PalaMarathon.svg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Define the navigation links and dropdowns
  const navLinks = [
    { path: "/", label: "HOME" },
    {
      label: "DETAILS",
      dropdown: [
        { path: "/participant-info", label: "Participant Info" },
        { path: "/faq", label: "FAQ" },
        { path: "/results", label: "Results" },
      ],
    },
    { path: "/sponsors", label: "SPONSORS" },
    {
      label: "CONNECT",
      dropdown: [
        { path: "/media", label: "Services" },
        { path: "/feedback", label: "Feedback" },
        { path: "/contact-us", label: "Contact" },
      ],
    },
  ];

  const location = useLocation();

  return (
    <nav
      className={`font-outfit w-full z-50 top-0 start-0 bg-[#FFC1E2] ${
        location.pathname === "/register"
          ? "static"
          : location.pathname === "/"
          ? "fixed"
          : "static"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto px-2 py-1 justify-between">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="runninglogo.svg" className="h-10 md:h-11" alt="Running Logo" />
          <img
            src={PalaMarathon}
            alt="PalaMarathon"
            className="h-9 md:h-11 mb-2 drop-shadow-lg"
          />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          <div className="flex items-center justify-center h-full">
            <Link
              to="/"
              className="h-auto text-center font-light text-base tracking-widee"
            >
              CONTACT US
            </Link>
          </div>

          {/* Menu Button - Now properly hidden on larger screens */}
          <div className="block md:hidden text-[#330A48]">
            <IconButton
              onClick={toggleDrawer}
              className="text-gray-500 rounded-lg "
              aria-label="menu"
            >
              <MenuIcon fontSize="large" style={{ color: "#330A48" }} />
            </IconButton>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-row items-center space-x-8 font-normal">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={`py-2 px-3 ${
                    location.pathname === link.path
                      ? "text-[#330A48] underline underline-offset-4 font-semibold"
                      : "text-[#330A48]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Drawer for Smaller Screens */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <div className="w-max p-4 flex flex-col items-end bg-gray-50 h-full">
          <IconButton onClick={toggleDrawer} aria-label="close drawer">
            <CloseIcon fontSize="large" style={{ color: "#330A48" }} />
          </IconButton>
          <ul className="w-screen md:w-96 flex flex-col items-center justify-around font-medium text-xl h-1/2 mt-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  onClick={toggleDrawer}
                  className={`block ${
                    location.pathname === link.path
                      ? "text-gray-900 underline  underline-offset-4 font-semibold"
                      : "text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
