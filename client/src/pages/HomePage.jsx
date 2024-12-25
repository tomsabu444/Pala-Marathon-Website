import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import PalaMarathon from "../assets/PalaMarathon.svg";
import { Link } from "react-router-dom";

//? svg pattern
import dots_Pattern from "../assets/dots_Pattern.svg";
import CountdownTimer from "../components/CountdownTimer";

import bg_img_homepage from "../assets/bg-homepage.png";
import bg_mobile from "../assets/bg-for-mobile.png";
import Loading from "../components/Loading";

const VisionPage = lazy(() => import("./VisionPage"));
const RoutePage = lazy(() => import("./RoutePage"));
const GoverningBodyPage = lazy(() => import("./GoverningBodyPage"));
const ContactPage = lazy(() => import("./ContactPage"));

function HomePage() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  return (
    <>
      <motion.div
        className="relative h-dvh bg-gradient-to-b from-[#FFC1E2] via-[#FFC1E2] to-[#FFFFFF] font-outfit"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        {/*//! Dots Pattern left */}
        <motion.div
          className="absolute top-24"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={dots_Pattern} alt="Dots Pattern" draggable="false" />
        </motion.div>

        {/*//! Dots Pattern right */}
        <motion.div
          className="hidden sm:block absolute right-0 bottom-14 "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={dots_Pattern} className="rotate-180" alt="Dots Pattern" draggable="false" />
        </motion.div>

        {/* //! Mobile Background */}
        <motion.div
          className="block absolute bg-contain w-full h-full -bottom-1 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={bg_mobile}
            className="w-full h-full object-cover"
            alt="Background Image"
            draggable="false"
          />
        </motion.div>

        {/* //! contact No */}
        <motion.div
          className="hidden md:block absolute bottom-24 -left-16  text-[#330A48] transform-origin-left"
          variants={childVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-lg font-light transform -rotate-90">
            Contact No: <span className="font-medium">9846566483</span>
          </p>
        </motion.div>

        {/* //! Main Content */}
        <motion.div
          className="lg:flex lg:justify-between h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex relative z-20 flex-col justify-items-center h-full lg:pl-20 xl:pl-44">
            <motion.div
              className="flex flex-col items-center justify-center mt-10 pt-16 gap-4 h-4/6"
              variants={childVariants}
            >
              <motion.img
                src={PalaMarathon}
                alt="PalaMarathon"
                className="h-40 md:h-48 lg:h-52 mb-2 drop-shadow-lg"
                variants={childVariants}
                draggable="false"
              />
              <h1 className="text-xl md:text-2xl font-bold text-[#8B0A1E]">
                19th JANUARY 2025
              </h1>

              <Link
                to="/register"
                className="px-8 z-30 text-lg py-3 mt-4  bg-[#330A48] rounded-full text-white relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#8F1757] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  md:text-xl"
              >
                REGISTER NOW
              </Link>
            </motion.div>

            <motion.div className="flex flex-col" variants={childVariants}>
              <h1 className="text-center text-xl lg:text-2xl text-custom-pink mb-5">
                COUNTDOWN TO PALA MARATHON
              </h1>
              {/* Countdown Timer */}
              <CountdownTimer
                eventDate={new Date("2025-01-19T00:00:00").getTime()}
              />
            </motion.div>
          </div>

          {/* img container */}
          <motion.div
            className="hidden lg:flex absolute right-0 bottom-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src={bg_img_homepage}
              className="lg:w-[900px] 2xl:w-[1100px] "
              alt="Home Page Image"
              draggable="false"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Vision */}
      <Suspense fallback={<Loading />}>
        <VisionPage />
      </Suspense>

      {/* Route */}
      <Suspense fallback={<Loading />}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <RoutePage />
        </motion.div>
      </Suspense>

      {/* Governing Body */}
      <Suspense fallback={<Loading />}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          <GoverningBodyPage />
        </motion.div>
      </Suspense>

      {/* Contact Us */}
      <Suspense fallback={<Loading />}>
        <div id="contact-section">
          <ContactPage />
        </div>
      </Suspense>
    </>
  );
}

export default HomePage;
