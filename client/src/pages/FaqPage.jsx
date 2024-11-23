import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MarathonBanner from "../components/MarathonBanner2.0";
import faqimg from "Pala-Marathon-Website/client/src/assets/Faq-img.png";
import { motion } from "framer-motion";


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
          question: "When is the last date to register for the Pala Marathon?",
          answer: "The last date for registration is 2025 January 10.",
        },
        {
          question: "Is spot registration available?",
          answer: "Yes, spot registration is available at the venue.",
        },
        {
          question: "Is group registration available?",
          answer:
            "Yes, group registrations are available for groups of 10 or more participants. Please contact us at palamarathon@gmail.com for group registration details.",
        },
        {
          question: "What should I do if I don’t receive a confirmation email after registering?",
          answer:
            "If the registration fee has been deducted but you haven’t received a confirmation email, please contact us at palamarathon@gmail.com with a screenshot of your transaction details.",
        },
        {
          question: "Can I cancel my registration and get a refund?",
          answer: "Registrations are non-refundable.",
        },
        {
          question: "Can I change my race category after registering?",
          answer:
            "Yes, you can change your race category by re-registering for the desired category. Please inform the organisers about the change at the venue.",
        },
        {
          question: "What are the registration fees for each category?",
          answer:
            "Registration fees vary by category. Please refer to the official registration page for the latest fee structure.",
        },
      ],
    },
    {
      category: "Marathon Details",
      questions: [
        {
          question: "What are the different race categories?",
          answer:
            "The Pala Marathon includes the following categories: Half Marathon (21 km), 10K Run (10 km), Fun Run (3 km).",
        },
        {
          question: "Is there an age limit for participants?",
          answer: "Yes, participants must be between 18 to 65 years old.",
        },
        {
          question: "Who organises the marathon?",
          answer:
            "The marathon is organised by the Engineers Forum Palai, St. Thomas Palai, Lions Club.",
        },
        {
          question: "When will the Pala Marathon take place?",
          answer: "The marathon will take place on January 22.",
        },
        {
          question: "Is there a time limit to complete the race?",
          answer:
            "Half Marathon: 6 hours, 10K Run: 4 hours, Fun Run: No time limit.",
        },
        {
          question: "What time should participants report at the venue?",
          answer:
            "Participants should arrive by 6:30 AM for check-in and warm-up activities. The marathon will begin promptly at 7:00 AM.",
        },
      ],
    },
    {
      category: "Getting to the Race",
      questions: [
        {
          question: "Is parking available at the venue?",
          answer:
            "Yes, parking is available near both the start and finish lines.",
        },
        {
          question: "When and where will bib distribution take place?",
          answer: "Bib distribution will be held at the venue.",
        },
        {
          question: "What are the transportation options to reach the venue?",
          answer:
            "The venue is easily accessible by bus, train, and nearby roads.",
        },
        
      ],
    },
    {
      category: "Travel & Accommodation",
      questions: [
        {
          question: "Are there accommodations available for participants?",
          answer: "No, the organisers are not providing accommodation facilities. Participants can book their stay at nearby hotels or lodges.",
        },
        {
          question: "Are there any travel facilities for participants?",
          answer: "No, participants need to arrange their own transportation to and from the venue.",
        },
      ],
    },
    {
      category: "Results and Prizes",
      questions: [
        {
          question: "How can I check my race results?",
          answer: "Race results will be published on our website within 24 hours after the event. You can search for your results using your bib number.",
        },
        {
          question: "Is there prize money for winners?",
          answer: "Yes, cash prizes will be awarded to the top three winners in each race category.",
        },
        {
          question: "I am unable to download my participation certificate. What should I do?",
          answer: "If you face issues downloading your certificate, please contact us at palamarathon@gmail.com with your bib number.",
        },
        {
          question: "Are there finisher medals for all participants?",
          answer: "Yes, all participants who complete the race will receive a finisher medal.",
        },
      ],
    },
    {
      category: "Volunteering & Sponsorship",
      questions: [
        {
          question: "Can I volunteer for the Pala Marathon?",
          answer: "Yes, volunteers are welcome! Please email us at palamarathon@gmail.com with your name, age, contact details, and a brief description of why you want to volunteer.",
        },
        {
          question: "How can I become a sponsor for the Pala Marathon?",
          answer: "If you are interested in sponsorship opportunities, please contact us at palamarathon@gmail.com for more details.",
        },
      ],
    },
    {
      category: "Sustainability and Guidelines",
      questions: [
        {
          question: "How is the Pala Marathon eco-friendly?",
          answer: "The event promotes sustainability by minimising single-use plastics, providing recycling bins at the venue, and encouraging participants to bring reusable water bottles.",
        },
        {
          question: "Are there any safety guidelines I should follow?",
          answer: "Follow all instructions from race officials, stay aware of your surroundings, and inform the nearest volunteer in case of an emergency.",
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
      <div className="flex justify-center my-8 lg:my-12">
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
                  className={`w-full flex justify-between items-center p-6 text-base md:text-xl font-semibold ${
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
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openCategory === categoryData.category
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    overflow: "hidden",
                    borderRadius: "0 0 20px 20px",
                    backgroundColor: "#330A48",
                  }}
                >
                                  {categoryData.questions.map((questionData, qIndex) => (
                  <div key={qIndex} className="mb-4 p-4">
                    <h4
                      className="font-normal text-left text-sm sm:text-base md:text-lg mb-2"
                      style={{
                        color: "grey",  // Correct hex color
                      }}
                    >
                        {questionData.question}
                      </h4>
                      <p className="text-white text-montserrat text-left text-sm md:text-base">
                        {questionData.answer}
                      </p>
                      <hr
                        style={{
                          border: "0.5px solid grey",
                          opacity: 0.6,
                          marginTop: "16px",
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
