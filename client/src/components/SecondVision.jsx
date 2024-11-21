import React from 'react';
import dot from 'Pala-Marathon-Website/client/src/assets/dot.png';
import collageImg from 'Pala-Marathon-Website/client/src/assets/palaimg.png';
import imageold from 'Pala-Marathon-Website/client/src/assets/palaimg1.png';
import mobileImage from 'Pala-Marathon-Website/client/src/assets/mobileImage.png';

const SecondVision = () => {
  return (
    <div className="relative py-6 md:py-8 px-0 md:px-16 z-10 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Section */}
        <div className="relative flex flex-col items-center md:items-start">
          {/* Dot Image */}
          <img
            src={dot}
            alt="Dots"
            className="absolute top-[-30px] left-[-30px] md:left-[-70px] w-12 h-12 md:w-20 md:h-20 z-10"
          />

          <div className="w-full max-w-lg text-center md:text-left md:ml-24">
            <h1 className="text-3xl md:text-4xl font-extrabold text-purple-900 mb-4 md:mb-6">
              OUR <span className="text-black">VISION</span>
            </h1>

            {/* Paragraph with mobile border and responsive padding */}
            <div className="p-4 md:p-0 mx-4 md:mx-0 border-2 border-purple-150 bg-purple-50/50 md:border-none rounded-lg">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left md:text-left">
                <b>Pala:</b> A Community of Health and Fitness. Pala, a town rich in culture and community spirit, envisions a running club to unite people of all ages in the pursuit of health and camaraderie. <br /><br />
                
                <b>Building a Fitness-Aware Generation:</b> A running club can foster fitness through group runs, training, and workshops, promoting teamwork, discipline, and resilience among the youth.<br /><br />
                
                <b>The Spark for an Annual Marathon:</b> With support, this initiative could grow into a cherished tradition, showcasing the vitality of our community.<br /><br />
                
                <b>A Lasting Legacy:</b> Inspiring families to embrace fitness, Pala can become a beacon of health, creating a vibrant, active future for all.
                Let's run toward a healthier tomorrow!
              </p>
            </div>
          </div>

          {/* Contact Text - Responsive Positioning */}
          <div className="hidden md:block absolute left-[-115px] top-[300px] rotate-90 text-purple-900 text-sm font-bold">
            CONTACT: 9784 - 586 - 721
          </div>
        </div>

        {/* Right Section - Responsive Collage Image */}
        <div className="relative w-full mt-6 md:mt-0 md:pl-16 left-20">
          {/* Visible only on larger screens (screen > 1190px) */}
          <img
            src={collageImg}
            alt="Collage of Running Events"
            className="w-full h-auto object-cover mt-[100px] md:mt-[150px] lg:mt-[200px] hidden lg:block"
          />
        </div>

        {/* Last Image with adjusted width and height for large screens */}
        <img
          src={imageold}
          alt="Collage of Running Events"
          className="absolute w-[50%] md:w-[30%] h-auto top-[30%] mx-0 left-[10%] object-cover ml-[460px] mt-[480px] border-t-8 border-r-8 border-white hidden lg:block"
        />

        {/* Mobile Image - Visible only on mobile screens */}
        <img
          src={mobileImage}
          alt="Mobile Collage of Running Events"
          className="lg:hidden w-screen h-auto object-cover -mx-4 -mt-6"
        />
      </div>
    </div>
  );
};

export default SecondVision;