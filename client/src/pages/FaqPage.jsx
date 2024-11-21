import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const FAQPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex justify-center my-auto min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl">
        {/* FAQ Section */}
        <div className="space-y-2">
          {/* Registration Section */}
          <div>
            <button
              className={`w-full flex justify-between items-center p-4 text-base font-semibold ${
                openSection === "registration"
                  ? "bg-purple-700 text-white"
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
              } bg-purple-700 text-white text-sm`}
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

          {/* Other Sections */}
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
  );
};

export default FAQPage;
