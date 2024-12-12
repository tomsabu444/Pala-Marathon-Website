import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MarathonBanner from "../components/MarathonBanner2.0";
import faqimg from "../assets/Faq-img.png";
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
          answer: "The last date for registration is 2024 December 31.",
        },
        {
          question: "Is spot registration available?",
          answer: "No, spot registration is not available at the venue.",
        },
        {
          question: "Is group registration available?",
          answer: "Yes, group registrations are available for groups of 10 or more participants. Please contact us at palamarathon@gmail.com for group registration details.",
        },
        {
          question: "What should I do if I don't receive a confirmation email after registering?",
          answer: "If the registration fee has been deducted but you haven't received a confirmation email, please contact us at palamarathon@gmail.com with a screenshot of your transaction details.",
        },
        {
          question: "Can I cancel my registration and get a refund?",
          answer: "Registrations are non-refundable.",
        },
        {
          question: "Can I change my race category after registering?",
          answer: "No, you cannot change your race category. You may re-register for the desired category, though. Original amount will not be refunded.",
        },
        {
          question: "What are the registration fees for each category?",
          answer: "Registration fees vary by category. Please refer to the official registration page for the latest fee structure.",
        },
      ],
    },
    {
      category: "Marathon Details",
      questions: [
        {
          question: "What are the different race categories?",
          answer: "The Pala Marathon includes the following categories:\nHalf Marathon (21.1 km): Starts at St. Thomas College Pala Gate 2 and goes via Pala town, Chethimattam, Moonnani, Edappadi and Bharananganam till Melambara Sree Dharma Sastha temple Gopuram and turns back to finish at St. Thomas College Pala Gate 2 itself.\n10K Run (10 km): Starts at St. Thomas College Pala Gate 2 and goes via Pala town, Chethimattam, Moonnani till IMA Junction, Moonnani and turns back to finish at St. Thomas College Pala Gate 2 itself.\nFun Run (3 km): Starts at Arunapuram-Manalelpadi road (near St. Thomas College Pala Gate 2) and goes to Andoor Junction and turns back to finish at St. Thomas College Pala Gate 2.",
        },
        {
          question: "Is there an age limit for participants?",
          answer: "Yes, participants must be between 16 years old to participate in Half Marathon, 12 years for 10km and 5 years for 3km. No upper limit though, If you are ready and the doctor says OK, You are in.",
        },
        {
          question: "Who organises the marathon?",
          answer: "The marathon is organised by the St. Thomas College Palai (Autonomous), Lions Clubs International District 318B and Engineers Forum Pala.",
        },
        {
          question: "When will the Pala Marathon take place?",
          answer: "The marathon will take place on January 19.",
        },
        {
          question: "Is there a time limit to complete the race?",
          answer: "Half Marathon: 4 hours, 10K Run: 3 hours, Fun Run: No time limit.",
        },
        {
          question: "What time should participants report at the venue?",
          answer: "Participants should arrive at least half an hour before the starting time for check-in and warm-up activities. The marathon will begin promptly at starting time specified.",
        },
      ],
    },
    {
      category: "Getting to the Race",
      questions: [
        {
          question: "Is parking available at the venue?",
          answer: "Yes, parking is available.",
        },
        {
          question: "When and where will bib distribution take place?",
          answer: "Bib distribution will be held at the venue.",
        },
        {
          question: "What are the transportation options to reach the venue?",
          answer: "The venue is easily accessible.\nBy Bus: Get down at St. Thomas College bus stop.\nBy Train: The nearest railway station is Kottayam.",
        },
      ],
    },
    {
      category: "About the Race Course",
      questions: [
        {
          question: "Are pets or animals allowed on the course?",
          answer: "No, pets or animals are not allowed on the race course for safety reasons.",
        },
        {
          question: "Can I run with headphones?",
          answer: "Yes, you can use headphones during the race, but we recommend staying aware of your surroundings for safety purposes.",
        },
        {
          question: "How many aid stations will there be on the course?",
          answer: "Aid stations will be available every 2.5 km, stocked with water, energy drinks, and light snacks.",
        },
        {
          question: "Will there be medical support on the course?",
          answer: "Yes, medical teams and ambulances will be stationed along the route to assist participants if needed.",
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
          answer: "Yes, cash prizes will be awarded to the top two winners in each race category.",
        },
        {
          question: "I am unable to download my participation certificate. What should I do?",
          answer: "If you face issues downloading your certificate, please contact us at palamarathon@gmail.com with your bib number.",
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
          answer: "The event promotes sustainability by:\nMinimising single-use plastics.\nProviding recycling bins at the venue.\nEncouraging participants to bring reusable water bottles.",
        },
        {
          question: "Are there any safety guidelines I should follow?",
          answer: "Follow all instructions from race officials.\nBe aware of your surroundings, especially if wearing headphones.\nInform the nearest volunteer in case of an emergency.",
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
                  <h3 className="w-full">
                    {categoryData.category.toUpperCase()}
                  </h3>
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
                        className="font-medium text-white text-left text-sm sm:text-base md:text-xl mb-2"
                        role="heading"
                        aria-level="4"
                      >
                        {questionData.question}
                      </h4>
                      <p className="text-white text-montserrat text-left text-sm md:text-base whitespace-pre-line">
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
