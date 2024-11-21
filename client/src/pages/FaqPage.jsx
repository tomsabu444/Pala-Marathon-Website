import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MarathonBanner from "../components/MarathonBanner2.0";
import faqimg from "Pala-Marathon-Website/client/src/assets/Faq-img.png";

const FAQPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
    <div
        className="text-center flex justify-center items-center h-36 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${faqimg})` }}
      >
        <h1 className="text-4xl font-outfit font-bold mb-4 text-white">
        FREQUENTLY ASKED QUESTIONS
        </h1>
      </div>
      <MarathonBanner/>
    <div className="flex justify-center mt-8 min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl">
        <div className="space-y-2">
          <div>
            <button
              className={`w-full flex justify-between items-center p-4 text-base font-semibold ${
                openSection === "registration"
                  ? "bg-purple-900 text-white"
                  : "bg-pink-200 text-black"
              }`}
              onClick={() => toggleSection("registration")}
            >
              <span>REGISTRATION</span>
              {openSection === "registration" ? (
                <ExpandLessIcon
                  className={`transition-transform transform ${
                    openSection === "registration" ? "rotate-0" : "rotate-180"
                  }`}
                />
              ) : (
                <ExpandMoreIcon className="transition-transform transform rotate-0" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openSection === "registration" ? "max-h-40 p-4" : "max-h-0"
              } bg-purple-900 text-white text-sm`}
            >
              <p>
                <strong>When is the last date to register for Ageas Federal Pala Marathon?</strong>
              </p>
              <p>The last date of registration is October 13, 2024.</p>
              <p className="mt-2">
                <strong>Can I register offline or as a group?</strong>
              </p>
              <p>
                Group registrations are only available for 25 or more
                participants. If you are the group administrator, please fill
                your group details <a href="#" className="underline">here</a>.
              </p>
            </div>
          </div>
          {["Race Expo", "Getting to the Race", "About the Race Course", "Travel and Accommodation", "Results and Prizes", "Behind the Scenes"].map(
            (section, index) => (
              <div key={index}>
                <button
                  className={`w-full flex justify-between items-center p-4 text-base font-semibold ${
                    openSection === section.toLowerCase().replace(/\s/g, "")
                      ? "bg-purple-700 text-white"
                      : "bg-pink-200 text-black"
                  }`}
                  onClick={() =>
                    toggleSection(section.toLowerCase().replace(/\s/g, ""))
                  }
                >
                  <span>{section.toUpperCase()}</span>
                  {openSection === section.toLowerCase().replace(/\s/g, "") ? (
                    <ExpandLessIcon
                      className={`transition-transform transform ${
                        openSection ===
                        section.toLowerCase().replace(/\s/g, "")
                          ? "rotate-0"
                          : "rotate-180"
                      }`}
                    />
                  ) : (
                    <ExpandMoreIcon className="transition-transform transform rotate-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openSection === section.toLowerCase().replace(/\s/g, "")
                      ? "max-h-40 p-4"
                      : "max-h-0"
                  } bg-purple-700 text-white text-sm`}
                >
                  <p>Details about {section} will go here.</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQPage;
