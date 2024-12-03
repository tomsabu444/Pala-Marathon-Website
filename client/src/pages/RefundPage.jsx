import React from "react";
import MarathonBanner from "../components/MarathonBanner2.0";
import terms_condition_banner from "../assets/about-us-bg.png";

const RefundPage = () => {
  return (
    <>
      <div
        className="text-center flex justify-center items-center h-28 sm:h-36 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${terms_condition_banner})` }}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-outfit font-bold text-white px-4 text-shadow">
          REFUND POLICY
        </h1>
      </div>

      <MarathonBanner />
      <div className="flex font-outfit mx-auto flex-col p-8 w-full max-w-7xl md:text-lg ">
        <section className="mb-4">
          <p className="text-gray-600">
            The Pala Marathon, organized by the Lions Clubs International District 318B in partnership with St. Thomas College, Palai, and the Engineers' Forum, Pala, is committed to ensuring a fair and transparent refund process for all participants.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Refund Eligibility
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Event Cancellation: Refunds will be issued if the Pala Marathon is canceled due to unforeseen circumstances.
            </li>
            <li>
              Duplicate Transactions: Refunds are available for duplicate registrations or payments.
            </li>
            <li>
              Exceptional Cases: Specific cases, such as medical emergencies, will be reviewed and approved by the event organizers.
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Refund Process
          </h2>
          <p className="text-gray-600">
            To request a refund, participants must provide the necessary details, including proof of registration and any supporting documents for exceptional cases, such as medical emergencies. Refund requests will be reviewed by the organizing committee and processed within a reasonable timeframe.
          </p>
          <p className="text-gray-600 mt-2">
            Refunds will be issued through the original payment method. Please allow up to 7–10 business days after approval for the refund to reflect in your account.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Non-Refundable Conditions
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Participant withdrawal due to personal reasons or change of plans.</li>
            <li>Refund requests made after the specified eligibility period.</li>
            <li>Failure to participate in the event without prior notice.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Transfer of Registration
          </h2>
          <p className="text-gray-600">
            Participants unable to attend the event may transfer their registration to another eligible individual. This transfer must be initiated and completed at least one week before the event date. Transfers are subject to verification and approval by the organizing team.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Important Notes
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Refunds for international payments may be subject to currency conversion rates and additional processing fees.</li>
            <li>
              The organizers reserve the right to make decisions on refund eligibility in exceptional cases, ensuring fairness and transparency for all participants.
            </li>
            <li>All refund requests and registration transfers must be completed before the event date.</li>
          </ul>
        </section>

        <section className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Thank you for your understanding and cooperation. We look forward to seeing you at the Pala Marathon.
          </p>
        </section>
      </div>
    </>
  );
};

export default RefundPage;
