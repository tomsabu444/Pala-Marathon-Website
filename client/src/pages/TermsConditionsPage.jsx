import React from "react";
import MarathonBanner from "../components/MarathonBanner2.0";
import terms_condition_banner from "../assets/terms-condition-banner.png";
const TermsConditionsPage = () => {
  return (
    <>
      <div
        className="text-center flex justify-center items-center h-28 sm:h-36 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${terms_condition_banner})` }}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-bold text-white px-4 text-shadow">
        TERMS & CONDITIONS
        </h1>
      </div>
      <MarathonBanner />
      <div className="flex font-outfit mx-auto flex-col p-8 w-full max-w-7xl md:text-lg">
        {/* <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 text-shadow">
          TERMS & CONDITIONS
        </h1> */}

        <section className="mb-4">
          <p className="text-gray-600">
            By registering for the Pala Marathon, organized by the Lions Clubs
            International District 318B in partnership with St. Thomas College,
            Palai and Engineers' Forum, Pala, participants agree to abide by the
            conditions outlined below and any instructions provided by the race
            organizers and officials.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Safety Guidelines
          </h2>
          <p className="text-gray-600">
            For the safety of all participants, roller skates, bicycles, or
            other devices are prohibited. Strollers are permitted for children.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Entry Fees
          </h2>
          <p className="text-gray-600">
            All entry fees are non-refundable. Race bibs are non-transferable
            and must not be swapped or transferred to another runner. Violation
            will result in immediate disqualification.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Medical Conditions
          </h2>
          <p className="text-gray-600">
            Participants are responsible for ensuring they are medically fit for
            the event.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Race Memento
          </h2>
          <p className="text-gray-600">
            Finisher medals will be awarded upon course completion.
            Non-participants are not eligible.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Use of Image
          </h2>
          <p className="text-gray-600">
            By participating, you consent to the use of your name, voice, and
            image in event-related media, promotions, or accounts of the event.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Event Cancellation
          </h2>
          <p className="text-gray-600">
            The event may be canceled due to unforeseen circumstances.
            Organizers are not liable for any costs incurred.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Data Use</h2>
          <p className="text-gray-600">
            By registering, participants agree to the collection and use of
            their information for event organization, promotion, and future
            activities by the organizing team.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Race Ejection
          </h2>
          <p className="text-gray-600">
            The organizer reserves the right to disqualify any participant who
            poses a safety risk.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Fun Run</h2>
          <p className="text-gray-600">
            Participants under 9 years must be accompanied by an adult. Ages
            10-18 do not require adult supervision.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Banners and Posters
          </h2>
          <p className="text-gray-600">
            No stationary banners or posters are allowed on the race course or
            event grounds.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Organizer
          </h2>
          <p className="text-gray-600">
            The Pala Marathon is organized by Lions Clubs International District
            318B in partnership with St. Thomas College, Palai and Engineers'
            Forum, Pala.
          </p>
        </section>

        <section className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            By participating, you agree to all the terms and conditions listed
            above.
          </p>
        </section>
      </div>
    </>
  );
};

export default TermsConditionsPage;
