import React, { useState } from "react";

const FAQPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">FAQ - Marathon</h1>
        <div className="space-y-4">
          {/* FAQ Section */}
          <div>
            <button
              className={`w-full text-left p-4 text-lg font-medium ${
                openSection === "registration"
                  ? "bg-purple-700 text-white"
                  : "bg-pink-200 text-black"
              } rounded-lg`}
              onClick={() => toggleSection("registration")}
            >
              Registration
            </button>
            {openSection === "registration" && (
              <div className="p-4 bg-purple-700 text-white rounded-b-lg">
                <p>
                  <strong>When is the last date to register?</strong>
                </p>
                <p>The last date of registration is October 13, 2024.</p>
                <p className="mt-2">
                  <strong>Can I register offline or as a group?</strong>
                </p>
                <p>
                  Group registrations are only available for 25 or more
                  participants. If you are the group administrator, please
                  contact us for further details.
                </p>
              </div>
            )}
          </div>

          {/* Other Sections */}
          {["Race Expo", "Getting to the Race", "About the Race Course", "Travel and Accommodation", "Results and Prizes", "Behind the Scenes"].map(
            (section, index) => (
              <div key={index}>
                <button
                  className={`w-full text-left p-4 text-lg font-medium ${
                    openSection === section.toLowerCase().replace(/\s/g, "")
                      ? "bg-purple-700 text-white"
                      : "bg-pink-200 text-black"
                  } rounded-lg`}
                  onClick={() =>
                    toggleSection(section.toLowerCase().replace(/\s/g, ""))
                  }
                >
                  {section}
                </button>
                {openSection === section.toLowerCase().replace(/\s/g, "") && (
                  <div className="p-4 bg-purple-700 text-white rounded-b-lg">
                    <p>Details about {section} will go here.</p>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
