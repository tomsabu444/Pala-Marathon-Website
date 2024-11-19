import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Import the running man icon and shadow
import runningManIcon from "../assets/runninglogo.svg";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

//? svg pattern
import dots_Pattern from "../assets/dots_Pattern.svg";
import rectangle_bar from "../assets/rectangle_bar.svg";

// Custom Icon with Shadow
const runningManMarker = L.divIcon({
  html: `
    <div style="position: relative; display: inline-block;">
      <img
        src="${runningManIcon}"
        alt="Running Man"
        style="width: 69px; height: 60px; display: block;"
      />
      <div
        style="
          width: 6px;
          height: 6px;
          background-color: #330A48;
          border-radius: 50%;
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
        "
      ></div>
    </div>
  `,
  iconSize: [69, 60],
  className: "custom-icon", // Optional custom class for further styling
});

function ContactPage() {
  const position = [9.70126, 76.664652]; // Coordinates for St. Thomas College Palai

  const handleMarkerClick = () => {
    // Open Google Maps with the given location
    window.open(
      `https://www.google.com/maps?q=${position[0]},${position[1]}`,
      "_blank"
    );
  };

  return (
    <div className=" relative font-outfit text-gray-800 ">
      {/*//! Dots Pattern */}
      <div className="hidden md:block absolute bottom-8 ">
        <img src={dots_Pattern} alt="Dots Pattern" />
      </div>
      {/*//! Rectangle Bar */}
      <div className=" hidden md:block absolute right-0">
        <img src={rectangle_bar} alt="Rectangle Bar" />
      </div>
      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-10  p-8 md:p-20 ">
        {/* Map Section */}
        <div className="flex justify-center md:w-full">
          <MapContainer
            center={position}
            zoom={16}
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] rounded-full shadow-2xl border"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={position}
              icon={runningManMarker}
              eventHandlers={{ click: handleMarkerClick }}
            >
              <Popup>
                St. Thomas College Palai <br /> Assembly Point for the Marathon
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col justify-center md:w-full">
          <h1 className="text-4xl mb-5 font-light text-[#330A48]">
            CONTACT <span className="fomt font-semibold">US</span>
          </h1>
          <p className="text-lg leading-relaxed">
            For any questions or assistance regarding the Pala Marathon 2024,
            feel free to reach out:
          </p>
          <ul className="mt-4 space-y-2 text-lg">
            <li>
              📞 <span className="font-bold">Phone:</span>{" "}
              <a
                href="tel:+917896567697"
                className="text-purple-800 hover:underline"
              >
                +91 7896 567 697
              </a>
            </li>
            <li>
              📧 <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:info@palamarathon2024.com"
                className="text-purple-800 hover:underline"
              >
                palamarathon@gmail.com
              </a>
            </li>
            <li>
              🌐 <span className="font-bold">Website:</span>{" "}
              <a
                href="http://palamarathon.efpala.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-800 hover:underline"
              >
                palamarathon.efpala.org
              </a>
            </li>
          </ul>

          {/* Assembly Point Section */}
          <div className="mt-6">
            <h3 className="font-bold text-xl text-purple-800">
              Assembly Point:
            </h3>
            <p className="text-lg leading-relaxed mt-2">
              Starting Location: Pala Community Park, Main Entrance <br />
              Please arrive by 6:30 AM for check-in and warm-up activities.{" "}
              <br />
              The marathon will begin promptly at 7:00 AM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
