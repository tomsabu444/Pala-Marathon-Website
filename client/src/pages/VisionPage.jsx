import React from "react";
import dots_Pattern from "../assets/dots_Pattern.svg";
import collageImg from "Pala-Marathon-Website/client/src/assets/palaimg.png";
import imageold from "Pala-Marathon-Website/client/src/assets/palaimg1.png";
import mobileImage from "Pala-Marathon-Website/client/src/assets/mobileImage.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";
import { motion } from "framer-motion";

const VisionPage = () => {
  return (
    <>
      <HomeBanner />

      <motion.div
        className="relative font-outfit pb-10 md:py-16 md:px-16 z-10 lg:-mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <style>
          {`
            @media (max-width: 1300px) {
              .hide-imageold {
                display: none;
              }
              .mt-c {
                margin-bottom: 500px;
              }
            }
          `}
        </style>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start justify-items-center mt-10 w-full">
          {/* Left Section */}
          <motion.div
            className="flex flex-col items-center md:items-start"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Dot Image */}
            <motion.img
              src={dots_Pattern}
              alt="Dots"
              className="absolute top-0 left-[-30px] md:top-10 md:left-[-70px] w-12 h-12 md:w-20 md:h-20 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />

            <div className="w-full max-w-xl text-center md:text-left p-4 md:ml-24">
              <h1 className="text-3xl text-center w-full md:text-5xl font-extrabold text-purple-900 mb-4 md:mb-6">
                OUR <span className="text-black ">VISION</span>
              </h1>

              {/* Paragraph */}
              <div className="p-4 md:p-10 rounded-lg">
                <motion.p
                  className="text-base md:text-lg text-gray-700 leading-relaxed text-left"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <b>Pala:</b> A Community of Health and Fitness. Pala, a town
                  rich in culture and community spirit, envisions a running club
                  to unite people of all ages in the pursuit of health and
                  camaraderie. <br />
                  <br />
                  <b>Building a Fitness-Aware Generation:</b> A running club can
                  foster fitness through group runs, training, and workshops,
                  promoting teamwork, discipline, and resilience among the youth.
                  <br />
                  <br />
                  <b>The Spark for an Annual Marathon:</b> With support, this
                  initiative could grow into a cherished tradition, showcasing the
                  vitality of our community.
                  <br />
                  <br />
                  <b>A Lasting Legacy:</b> Inspiring families to embrace fitness,
                  Pala can become a beacon of health, creating a vibrant, active
                  future for all. Let’s run toward a healthier tomorrow!
                </motion.p>

                {/* About Us Link */}
                <motion.div
                  className="flex justify-end items-center text-lg md:justify-center md:text-xl font-bold text-[#8F1757] mt-6 md:mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to="/about-us">
                    ABOUT<span className="font-medium">&nbsp;US</span>
                    <ArrowForwardIosIcon sx={{ width: "15px" }} className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative w-full md:pl-16 left-14"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Collage Image */}
            <img
              src={collageImg}
              alt="Collage of Running Events"
              className="h-auto object-cover mt-[150px] hidden md:block"
            />
          </motion.div>

          {/* Last Image */}
          <motion.img
            src={imageold}
            alt="Collage of Running Events"
            className="absolute w-[50%] md:w-[30%] h-auto top-[30%] mx-0 left-[10%] object-cover ml-[460px] mt-[400px] border-t-8 border-r-8 border-white hide-imageold"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />

          {/* Mobile Image */}
          <motion.img
            src={mobileImage}
            alt="Mobile Collage of Running Events"
            className="md:hidden w-full h-auto object-cover mx-auto -mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default VisionPage;
