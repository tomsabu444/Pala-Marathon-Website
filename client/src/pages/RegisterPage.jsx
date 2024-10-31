import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import MarathonBanner from "../components/MarathonBanner";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <>
      {/* Pala Marathon Banner */}
      <MarathonBanner />

      {/* //? Registration details */}
      <div className="px-7 md:px-20 pt-7 w-full">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
          Registration Form
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          <b> Pala Marathon </b> will be held on <b> 19th January 2024 </b>.
          This annual running event is organized by Lions Club International
          district 318b, St. Thomas College, Pala 75th jubilee celebrations and
          Engineers’ Forum and Engineer's Forum, Pala. There are three
          categories that the runners can choose from:
        </p>
        <ul className="list-disc text-lg list-inside text-gray-700 mb-4">
          <li>
            <span className="font-semibold text-gray-800">Full Marathon</span> –
            21 Kms
          </li>
          <li>
            <span className="font-semibold text-gray-800">Half Marathon</span> –
            10 Kms
          </li>
          <li>
            <span className="font-semibold text-gray-800">Family Fun Run</span>{" "}
            – 3 Kms
          </li>
        </ul>
        <p className="text-gray-600 text-lg">
          Post Registration, a confirmation{" "}
          <span className="font-semibold">E-Mail</span> will be sent to the
          e-mail address provided during registration within 24 hours. Please
          ensure that the e-mail address you enter is correct, as the{" "}
          <span className="font-semibold">E-ticket</span> and other registration
          details will be sent to this email address. Additionally, double-check
          all registration details to avoid any mistakes. For race rules and
          regulations, please{" "}
          <Link to="/rules" className="text-purple-600 underline">
            click here
          </Link>
          . BIB numbers will be assigned on a first-come, first-served basis. If
          your preferred number is already taken, an alternate number will be
          assigned at random. Please note that registration fees are
          non-refundable, and BIB numbers cannot be changed once assigned.
        </p>
      </div>

      {/*//! form  */}
      {/* <RegistrationForm/> */}
    </>
  );
}

export default RegisterPage;
