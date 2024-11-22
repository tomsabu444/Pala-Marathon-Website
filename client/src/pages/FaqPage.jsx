import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MarathonBanner from "../components/MarathonBanner2.0";
import faqimg from "Pala-Marathon-Website/client/src/assets/Faq-img.png";

const FAQPage = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const faqData = [
    {
      category: "Registration",
      questions: [
        {
          question:
            "When is the last date to register for Ageas Federal Kochi Spice Coast Marathon?",
          answer: "The last date of registration is October 13, 2024.",
        },
        {
          question: "Can I register offline or as a group?",
          answer: `Group registrations are only available for 25 or above participants. 
                   If you are the group administrator of such a group, then please fill your group details here.`,
        },
        {
          question:
            "I tried to register. The registration amount was deducted from my bank account, but I haven’t received a confirmation email. What should I do?",
          answer:
            "If you are facing issues with your online registration, please write to support@hultinfo.tech",
        },
        {
          question:
            "What is the Registration Fee for Full Marathon, Half Marathon, and Family Fun Run?",
          answer: `Registration fees vary:
            - Early Bird Offer (till August 15th): Marathon ₹1000, Half Marathon ₹1000, Fun Run ₹550.
            - After August 15th: Marathon ₹1200, Half Marathon ₹1200, Fun Run ₹600.
            Includes GST, gateway charges, and an optional ₹200 discount for opting out of the complimentary T-shirt.`,
        },
        {
          question: "Can I pick up my race kit on the same day as the race?",
          answer:
            "No, race kits must be collected the day prior to the race at the expo. They will NOT be provided on race day.",
        },
      ],
    },
    {
      category: "Race Expo",
      questions: [
        {
          question: "When and where is the bib distribution?",
          answer: `Bib distribution will be held at Water Metro station, Vyttila, Ernakulam on Saturday, 26th October, 10:00 AM to 05:00 PM.`,
        },
        {
          question: "Can I authorize another person to pick up my race packet?",
          answer:
            "Yes, the authorized person must produce a copy of your photo ID and an authorization letter to collect your race kit.",
        },
      ],
    },
    {
      category: "Getting to the Race",
      questions: [
        {
          question: "Will there be space for car parking?",
          answer:
            "Limited parking is available. Carpooling or public transport is recommended to avoid congestion.",
        },
      ],
    },
    {
      category: "About The Race Course",
      questions: [
        {
          question: "Are pets allowed on the course?",
          answer: "No, pets or animals are not allowed to participate.",
        },
        {
          question:
            "Are skates, skateboards, bikes, or carriages of any kind allowed on the course?",
          answer:
            "No, external assistance or vehicles are prohibited and may result in disqualification.",
        },
        {
          question: "Is there food available on the course?",
          answer:
            "Aid stations provide electrolyte, water, oranges, bananas, biscuits, and salt.",
        },
      ],
    },
    {
      category: "Travel & Accommodation",
      questions: [
        {
          question: "What is the distance from the airport to the race start?",
          answer:
            "The Start/Finish Point is 42 km from the airport. Consider it your warm-up marathon!",
        },
        {
          question: "How do I get to the city?",
          answer: `Cochin is well connected by:
            - Railroad: Ernakulam North (ERN) and Ernakulam South (ERS).
            - Air: Cochin International Airport at Nedumbassery.
            - Road: NH 47 and MC Road.`,
        },
      ],
    },
    {
      category: "Results and Prizes",
      questions: [
        {
          question: "What are the different award categories?",
          answer: `Awards are presented for both Men and Women in these age categories:
            - Open
            - Young (Under 45 Years)
            - Veteran (45-54 Years)
            - Senior (55-64 Years)
            - Super Senior (65 and above).`,
        },
        {
          question: "What is the prize money for podium finishers?",
          answer: `The marathon has no prize money to emphasize the joy of running. All finishers receive a unique medal.`,
        },
      ],
    },
    {
      category: "Behind the Scenes",
      questions: [
        {
          question: "I’d like to volunteer, where do I sign up?",
          answer: `Email scm@solesofcochin.org with your name, age, contact number, email address, and why you'd like to volunteer.`,
        },
        {
          question:
            "Where can I find information regarding becoming a Spice Coast Marathon sponsor?",
          answer:
            "Please contact support@hultinfo.tech for sponsorship details.",
        },
      ],
    },
  ];

  return (
    <>
      {/* FAQ Banner */}
      <div
        className="text-center flex justify-center items-center h-28 sm:h-36 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${faqimg})` }}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-bold text-white px-4">
          FREQUENTLY ASKED QUESTIONS
        </h1>
      </div>

      {/* Marathon Banner */}
      <MarathonBanner />

      {/* FAQ Section */}
      <div className="flex justify-center my-8 lg:my-12 ">
        <div className="w-full max-w-screen-2xl px-4 sm:px-8 lg:px-12">
          <div className="space-y-2 md:space-y-4">
            {faqData.map((categoryData, index) => (
              <div key={index}>
                {/* Category Header */}
                <button
                  style={{
                    borderRadius:
                      openCategory === categoryData.category
                        ? "20px 20px 0 0"
                        : "20px 20px 20px 20px",
                  }}
                  className={`w-full flex justify-between  items-center p-6 text-base md:text-xl font-semibold ${
                    openCategory === categoryData.category
                      ? "bg-[#330A48] text-white"
                      : "bg-pink-200 text-black"
                  }`}
                  onClick={() => toggleCategory(categoryData.category)}
                >
                  <span className="w-full">
                    {categoryData.category.toUpperCase()}
                  </span>
                  {openCategory === categoryData.category ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </button>
                {/* Questions */}
                <div
                  style={{ borderRadius: "0 0 20px 20px " }}
                  className={`overflow-hidden  transition-all bg-[#330A48] text-white duration-500 ${
                    openCategory === categoryData.category
                      ? "max-h-full p-4"
                      : "max-h-0"
                  }`}
                >
                  {categoryData.questions.map((questionData, qIndex) => (
                    <div key={qIndex} className="mb-4">
                      <h4 className="font-medium text-sm sm:text-base md:text-lg mb-2">
                        {questionData.question}
                      </h4>
                      <p className="text-white text-sm">
                        {questionData.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
