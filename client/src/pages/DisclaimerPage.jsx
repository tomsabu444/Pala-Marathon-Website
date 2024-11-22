import React from "react";
import MarathonBanner from "../components/MarathonBanner2.0";
import disclaimer_banner from "../assets/about-us-bg.png";

const DisclaimerPage = () => {
  return (
    <>
      <div
        className="text-center flex justify-center items-center h-28 sm:h-36 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${disclaimer_banner})` }}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-bold text-white px-4 text-shadow">
          DISCLAIMER
        </h1>
      </div>

      <MarathonBanner />
      <div className="flex font-outfit mx-auto flex-col p-8 w-full max-w-7xl ">
        {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 text-shadow">
          DISCLAIMER
        </h1> */}

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            General Disclaimer
          </h2>
          <p className="text-gray-600">
            The information provided on the Pala Marathon website
            (palamarathon.efpala.org) and related materials is for general
            information and event promotion. All details are provided in good
            faith, but no representation or warranty, express or implied, is
            made about the accuracy, adequacy, validity, reliability, or
            completeness of the information.
          </p>
          <p className="text-gray-600">
            Under no circumstance shall the Pala Marathon organizers, including
            Lions Clubs International District 318B, St. Thomas College, Pala,
            and Engineers' Forum, Pala, be liable for any loss or damage
            incurred as a result of using the website or participating in the
            event.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Health and Safety Disclaimer
          </h2>
          <p className="text-gray-600">
            Participation in the Pala Marathon requires physical fitness and
            endurance. Participants are solely responsible for ensuring they are
            medically fit to engage in the event. The organizers assume no
            liability for any injuries, health conditions, or adverse events
            that may arise before, during, or after the marathon.
          </p>
          <p className="text-gray-600">
            By registering, participants acknowledge their own responsibility
            for health and safety and agree to seek medical advice if necessary.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Sponsorship and Advertising Disclaimer
          </h2>
          <p className="text-gray-600">
            The Pala Marathon event may feature sponsorships by various
            organizations, including title sponsors and other supporters.
            Sponsors are acknowledged on race materials and other promotional
            media as specified by sponsorship agreements. These sponsorships do
            not imply endorsement by the marathon organizers of the sponsors'
            products or services.
          </p>
          <p className="text-gray-600">
            Sponsor logos and branding placements are handled according to prior
            agreements and are in line with community event standards.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Community and Legacy Disclaimer
          </h2>
          <p className="text-gray-600">
            The Pala Marathon seeks to foster community spirit and encourage a
            fitness-aware generation in Pala. However, the community engagement
            and legacy building aspects promoted by the event are aspirational
            and do not guarantee specific outcomes for participants or the local
            community.
          </p>
          <p className="text-gray-600">
            The organizers reserve the right to modify or cancel event details
            in response to unforeseen circumstances or changes in community
            needs, without any liability to participants.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Website Disclaimer
          </h2>
          <p className="text-gray-600">
            The Pala Marathon website may contain links to third-party websites
            for convenience. These external sites are not endorsed by the Pala
            Marathon or its organizers, and we do not assume responsibility for
            their content or availability.
          </p>
        </section>

        <section className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            By using the Pala Marathon website or participating in the event,
            you agree to the terms outlined in this disclaimer.
          </p>
        </section>
      </div>
    </>
  );
};

export default DisclaimerPage;
