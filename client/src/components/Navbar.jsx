import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

// Import your logo and powered by images
import PalaMarathon from "../assets/PalaMarathon.svg";
import HULT from "../assets/HULT-1.png";
import RunningLogo from "../assets/runninglogo.svg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        const isMobile = window.innerWidth <= 768;
        const yOffset = isMobile ? -80 : 0;
        const yPosition =
          contactSection.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }, 100);
  };

  // Animation Variants
  const navBarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 }, // Off-screen to the right
    visible: {
      x: 0, // Slide in
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      x: "100%", // Slide out
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };
  

  const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const mobileDropdownVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      overflow: "hidden",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Navigation links
  const navLinks = [
    { path: "/", label: "HOME" },
    {
      label: "DETAILS",
      dropdown: [
        { path: "/about-us", label: "About Us" },
        { path: "/participant-info", label: "Participant Info" },
        { path: "/faq", label: "FAQ" },
        { path: "/privacy-policy", label: "Privacy Policy" },
        { path: "/terms-conditions", label: "Terms & Conditions" },
        { path: "/disclaimer", label: "Disclaimer" },
      ],
    },
    {
      label: "CONNECT",
      dropdown: [
        { path: "/media", label: "Services" },
        { path: "/feedback", label: "Feedback" },
      ],
    },
  ];

  // Desktop Dropdown Interaction Handlers
  const handleMouseEnter = (label) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // New method to toggle dropdown on click
  const handleDropdownClick = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleDropdownAreaEnter = (label) => {
    setActiveDropdown(label);
  };

  // Mobile Dropdown Toggle
  const toggleMobileDropdown = (label) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label);
  };

  return (
    <motion.nav
      className={`font-outfit w-full z-50 top-0 start-0 ${
        location.pathname === "/"
          ? "bg-[#FFC1E2] fixed"
          : location.pathname === "/register"
          ? "bg-[#FFC1E2] static"
          : location.pathname === "/about-us"
          ? "bg-white sticky"
          : location.pathname === "/terms-conditions"
          ? "bg-white sticky"
          : location.pathname === "/404"
          ? "bg-transparent fixed"
          : "bg-[#FFC1E2] sticky"
      }`}
      variants={navBarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto px-2 py-1 justify-between">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <motion.img
            src={RunningLogo}
            className="h-10 md:h-11"
            alt="Running Logo"
            variants={menuItemVariants}
          />
          <motion.img
            src={PalaMarathon}
            alt="PalaMarathon"
            className="h-9 md:h-11 mb-2 drop-shadow-lg"
            variants={menuItemVariants}
          />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          <motion.div
            className="flex items-center justify-center h-full"
            variants={menuItemVariants}
          >
            <motion.button
              onClick={handleContactClick}
              className="text-[#330A48] h-auto text-center font-light text-base tracking-wide"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT US
            </motion.button>
          </motion.div>

          <motion.div
            className="block md:hidden text-[#330A48]"
            variants={menuItemVariants}
          >
            <IconButton
              onClick={toggleDrawer}
              className="text-gray-500 rounded-lg"
              aria-label="menu"
            >
              <MenuIcon fontSize="large" style={{ color: "#330A48" }} />
            </IconButton>
          </motion.div>
        </div>

        {/* Desktop Menu */}
        <motion.div
          className="hidden md:flex md:w-auto md:order-1 relative"
          id="navbar-sticky"
          variants={navBarVariants}
        >
          <ul className="flex flex-row items-center space-x-8 font-normal">
            {navLinks.map((link) => (
              <motion.li
                key={link.label}
                variants={menuItemVariants}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center">
                  {link.dropdown ? (
                    <button
                      onClick={() => handleDropdownClick(link.label)}
                      className={`flex items-center py-2 px-3 ${
                        location.pathname === link.path ||
                        (link.dropdown &&
                          link.dropdown.some(
                            (item) => location.pathname === item.path
                          ))
                          ? "text-[#330A48] underline underline-offset-4 font-semibold"
                          : "text-[#330A48] hover:font-semibold"
                      }`}
                    >
                      {link.label}
                      {activeDropdown === link.label ? (
                        <ExpandLessIcon
                          className="text-[#330A48] ml-1"
                          fontSize="small"
                        />
                      ) : (
                        <ExpandMoreIcon
                          className="text-[#330A48] ml-1"
                          fontSize="small"
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`py-2 px-3 ${
                        location.pathname === link.path
                          ? "text-[#330A48] underline underline-offset-4 font-semibold"
                          : "text-[#330A48] hover:font-semibold"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>

                {link.dropdown && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 bg-white shadow-lg p-0 rounded-md min-w-[200px] z-50"
                  >
                    {link.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className={`block px-4 py-2 text-sm text-[#330A48] hover:bg-gray-100 hover:rounded-md  ${
                          location.pathname === dropdownItem.path
                            ? "font-semibold bg-gray-100"
                            : ""
                        }`}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Drawer for Smaller Screens */}
      {isDrawerOpen && (
  <AnimatePresence>
    <motion.div
      className="fixed top-0 right-0 w-full max-w-sm bg-gray-50 h-full z-50 flex flex-col justify-center items-center shadow-lg"
      variants={drawerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Drawer Close Button */}
      <div className="flex flex-col items-end p-4 absolute top-0 right-0">
        <IconButton onClick={toggleDrawer} aria-label="close drawer">
          <CloseIcon fontSize="large" style={{ color: "#330A48" }} />
        </IconButton>
      </div>

      {/* Drawer Links */}
      <ul className="flex flex-col items-center justify-around font-medium text-2xl h-auto mt-4 space-y-6 w-full px-8">
        {navLinks.map((link) => (
          <li key={link.label} className="w-full text-center">
            {link.dropdown ? (
              <div>
                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={() => toggleMobileDropdown(link.label)}
                >
                  <span
                    className={`block ${
                      location.pathname === link.path ||
                      (link.dropdown &&
                        link.dropdown.some(
                          (item) => location.pathname === item.path
                        ))
                        ? "text-gray-900 underline underline-offset-4 font-semibold"
                        : "text-gray-900"
                    }`}
                  >
                    {link.label}
                  </span>
                  {mobileActiveDropdown === link.label ? (
                    <ExpandLessIcon className="text-gray-900 ml-2" />
                  ) : (
                    <ExpandMoreIcon className="text-gray-900 ml-2" />
                  )}
                </div>

                <AnimatePresence>
                  {mobileActiveDropdown === link.label && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={mobileDropdownVariants}
                      className="overflow-hidden mt-2 space-y-4 text-xl"
                    >
                      {link.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          onClick={toggleDrawer}
                          className={`block text-gray-700 hover:text-gray-900 py-2 ${
                            location.pathname === dropdownItem.path
                              ? "text-gray-900 underline underline-offset-4 font-semibold"
                              : ""
                          }`}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to={link.path}
                onClick={toggleDrawer}
                className={`block ${
                  location.pathname === link.path
                    ? "text-gray-900 underline underline-offset-4 font-semibold"
                    : "text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Footer Section */}
      <div className="absolute bottom-8 text-center w-full flex justify-center items-center text-sm text-gray-600">
        <span className="mr-2">Powered by</span>
        <img src={HULT} alt="HULT" className="h-4 object-contain" />
      </div>
    </motion.div>
  </AnimatePresence>
)}
      
    </motion.nav>
  );
};

export default Navbar;
