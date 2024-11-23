import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import PalaMarathon from "../assets/PalaMarathon.svg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const location = useLocation();
  const navigate = useNavigate();

  //*function to handle scrolling to the ContactPage
  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        const isMobile = window.innerWidth <= 768; //? Define "mobile" as screens <= 768px
        const yOffset = isMobile ? -80 : 0; //? Offset only on mobile screens
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

  const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const drawerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  const drawerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  // Navigation links
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

  return (
    <motion.nav
      className={`font-outfit w-full z-50 top-0 start-0 ${
        location.pathname === "/"
          ? "bg-[#FFC1E2] fixed"
          : location.pathname === "/register"
          ? "bg-[#FFC1E2] static"
          : location.pathname === "/about-us"
          ? "bg-white sticky"
          : location.pathname === "/404"
          ? "bg-white sticky"
          : location.pathname === "/terms-conditions"
          ? "bg-white sticky"
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
            src="runninglogo.svg"
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
              className=" text-[#330A48] h-auto text-center font-light text-base tracking-wide"
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
          className="hidden md:flex md:w-auto md:order-1"
          id="navbar-sticky"
          variants={navBarVariants}
        >
          <ul className="flex flex-row items-center space-x-8 font-normal">
            {navLinks.map((link) => (
              <motion.li key={link.label} variants={menuItemVariants}>
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
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Drawer for Smaller Screens */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            className="fixed top-0 right-0 w-full max-w-sm bg-gray-50 h-full z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
          >
            <div className="flex flex-col items-end p-4">
              <IconButton onClick={toggleDrawer} aria-label="close drawer">
                <CloseIcon fontSize="large" style={{ color: "#330A48" }} />
              </IconButton>
            </div>
            <motion.ul
              className="flex flex-col items-center justify-around font-medium text-xl h-1/2 mt-4 space-y-4"
              variants={drawerItemVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.label}
                  variants={drawerItemVariants}
                  whileHover={{ scale: 1.1 }}
                >
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
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
