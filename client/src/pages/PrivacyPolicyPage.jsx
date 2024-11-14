import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="flex font-outfit mx-auto flex-col p-8 w-full max-w-7xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 text-shadow">
        Privacy Policy
      </h1>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Introduction
        </h2>
        <p className="text-gray-600">
          This Privacy Policy outlines how the Pala Marathon (organized by Lions
          Clubs International District 318B, St. Thomas College, Pala, and
          Engineers' Forum, Pala) collects, uses, and protects your personal
          information when you register for the event or interact with our
          website (palamarathon.efpala.org).
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Information Collection
        </h2>
        <p className="text-gray-600">
          We collect personal information provided directly by you during event
          registration, including your name, contact details, date of birth, and
          emergency contact information. Additional information such as your
          preferred marathon category may also be collected to enhance your
          event experience.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Use of Information
        </h2>
        <p className="text-gray-600">
          The information we collect is used solely for organizing the marathon
          event, including processing registrations, assigning bib numbers, and
          contacting participants regarding event updates. We may also use your
          information for internal analysis and to improve future events.
        </p>
        <p className="text-gray-600">
          By registering, you consent to receiving occasional communications
          from us about this and future events related to the Pala Marathon.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Information Sharing and Disclosure
        </h2>
        <p className="text-gray-600">
          We do not sell, rent, or share your personal information with third
          parties except as necessary to conduct the event, such as sharing
          participant lists with timing partners or emergency response teams.
          All third parties involved in the event are required to handle your
          data securely and in compliance with this policy.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Data Security
        </h2>
        <p className="text-gray-600">
          We prioritize the security of your personal information. Our website
          and event management systems implement industry-standard security
          measures to protect your data. However, please be aware that no method
          of transmission over the internet is completely secure.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-600">
          Our website uses cookies to enhance your browsing experience and
          gather usage statistics. Cookies are small data files that your
          browser stores on your device. You can control or disable cookies
          through your browser settings, though this may affect certain
          functionalities of our website.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Your Rights
        </h2>
        <p className="text-gray-600">
          You have the right to access, update, or delete your personal
          information held by us. If you wish to exercise any of these rights,
          please contact us at privacy@palamarathon.org. We will respond to your
          request within a reasonable timeframe.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Changes to This Policy
        </h2>
        <p className="text-gray-600">
          We may update this Privacy Policy periodically to reflect changes in
          our practices or for legal, regulatory, or operational reasons. Any
          changes will be posted on this page, and we encourage you to review
          our policy periodically.
        </p>
      </section>

      <section className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at privacy@palamarathon.org.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
