import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import runningManIcon from "../assets/runninglogo.svg";
import dots_Pattern from "../assets/dots_Pattern.svg";
import rectangle_bar from "../assets/rectangle_bar.svg";

const runningManMarker = L.divIcon({
  html: `
    <div style="position: relative; display: inline-block;">
      <img src="${runningManIcon}" alt="Running Man" style="width: 69px; height: 60px; display: block;" />
      <div style="width: 6px; height: 6px; background-color: #330A48; border-radius: 50%; position: absolute; bottom: -5px; left: 50%; transform: translateX(-50%);" />
    </div>
  `,
  iconSize: [69, 60],
  className: "custom-icon",
});

function ContactPage() {
  const position = [9.70126, 76.664652];

  const handleMarkerClick = () => {
    window.open(`https://www.google.com/maps?q=${position[0]},${position[1]}`, "_blank");
  };

  return (
    <div className="relative font-outfit text-gray-800 bg-white">
      {/* Dots Pattern - Reduced size */}
      <div className="hidden lg:block absolute bottom-8 left-0 opacity-70">
        <img src={dots_Pattern} alt="Dots Pattern" className="w-16 h-auto" />
      </div>
      {/* Rectangle Bar */}
      <div className="hidden md:block absolute right-0 top-0 w-20 lg:w-24 h-auto ">
        <img src={rectangle_bar} alt="Rectangle Bar" className="w-full h-full" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 lg:p-20 mx-auto">
        {/* Map Section */}
        <div className="flex justify-center items-center md:w-full">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-purple-600/20 blur-xl" />
            <MapContainer
              center={position}
              zoom={16}
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] rounded-full border-[4px] border-[#3A0945] overflow-hidden relative z-10"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={position}
                icon={runningManMarker}
                eventHandlers={{ click: handleMarkerClick }}
              >
                <Popup className="text-sm sm:text-base font-medium">
                  St. Thomas College Palai <br /> Assembly Point for the Marathon
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col justify-center md:w-full px-2 sm:px-4">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl mb-4 mt-4 sm:mb-5 font-light text-[#330A48] tracking-wide sm:text-left">
            CONTACT <span className="font-semibold">US</span>
          </h1>
          <p className="text-sm xs:text-base sm:text-lg leading-relaxed text-gray-700">
            For any questions or assistance regarding the Pala Marathon 2024, feel free to reach out:
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">📞</span>
              <div className="text-sm xs:text-base sm:text-lg">
                <span className="font-bold">Phone:</span>{" "}
                <a href="tel:+917896567697" className="text-purple-800 hover:underline hover:text-purple-900">
                  +91 7896 567 697
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">📧</span>
              <div className="text-sm xs:text-base sm:text-lg">
                <span className="font-bold">Email:</span>{" "}
                <a href="mailto:info@palamarathon2024.com" className="text-purple-800 hover:underline hover:text-purple-900">
                  palamarathon@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">🌐</span>
              <div className="text-sm xs:text-base sm:text-lg">
                <span className="font-bold">Website:</span>{" "}
                <a
                  href="http://palamarathon.efpala.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-800 hover:underline hover:text-purple-900"
                >
                  palamarathon.efpala.org
                </a>
              </div>
            </li>
          </ul>

          <div className="mt-6 sm:mt-8 bg-purple-50/50 p-3 sm:p-4 rounded-lg border border-purple-150">
            <h3 className="font-bold text-lg sm:text-xl text-purple-900 mb-2">Assembly Point:</h3>
            <p className="text-sm xs:text-base sm:text-lg leading-relaxed text-gray-700">
              Starting Location: Pala Community Park, Main Entrance <br />
              Please arrive by 6:30 AM for check-in and warm-up activities. <br />
              The marathon will begin promptly at 7:00 AM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;