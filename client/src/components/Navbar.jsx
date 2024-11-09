import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, IconButton } from "@mui/material";

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
    { path: "/sponsors", label: "SPONSORS AND PARTNERS" },
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
      className={`w-full z-20 top-0 start-0 border-b border-gray-200 bg-custom-purple-1000 ${
        location.pathname === "/" ? "fixed" : "static"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end  mx-auto p-4 md:justify-between">
        {/* <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse"> */}
        {/* <img src="" className="h-9" alt="Running Logo" /> */}
        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PALA MARATHON</span> */}
        {/* </Link> */}

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to="/register"
            className="cursor-pointer font-semibold overflow-hidden relative z-100 border bg-custom-pink border-custom-pink group px-7 py-2 text-lg rounded-md text-center"
          >
            <span className="relative z-10 text-white group-hover:text-white text-lg duration-500">
              Register
            </span>
            <span className="absolute w-full h-full bg-pink-700 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500" />
            <span className="absolute w-full h-full bg-pink-700 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500" />
          </Link>

          {/* Menu Button - Now properly hidden on larger screens */}
          <div className="block md:hidden text-white">
            <IconButton
              onClick={toggleDrawer}
              className="text-gray-500 rounded-lg dark:text-gray-400"
              aria-label="menu"
            >
              <MenuIcon fontSize="large" style={{ color: "White" }} />
            </IconButton>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-row space-x-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={`py-2 px-3 ${
                    link.path === "/"
                      ? "text-white dark:text-white"
                      : "text-white dark:text-white"
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
        <div className="w-max p-4 flex flex-col items-end bg-gray-50  h-full">
          <IconButton onClick={toggleDrawer} aria-label="close drawer">
            <CloseIcon fontSize="large" />
          </IconButton>
          <ul className="w-screen md:w-96  flex flex-col items-center justify-around font-medium  text-xl h-1/2 mt-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  onClick={toggleDrawer}
                  className="block text-gray-900"
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
