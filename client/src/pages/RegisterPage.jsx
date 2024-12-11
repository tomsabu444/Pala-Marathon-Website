import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import MarathonBanner from "../components/MarathonBanner2.0";
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
          <b>Pala Marathon</b> will be held on <b>19th January 2024</b>. This
          annual running event is organized by Lions Club International district
          318b, St. Thomas College Palai (Autonomous) 75th jubilee celebrations
          and Engineer's Forum, Pala. There are three categories that the
          runners can choose from, with starting times as follows :&nbsp;
          <b>Half Marathon (21 km):</b> Starts at <b>5:00 AM</b> | &nbsp;
          <b>10 km Marathon:</b> Starts at <b>6:00 AM</b> | &nbsp;
          <b>Family Fun Run (3 km):</b> Starts at <b>6:30 AM</b>
        </p>
        <table className="table-auto text-lg text-gray-700 text-center mb-4 border-collapse w-full">
          <thead>
            <tr className="h-16 ">
              <th className="border border-gray-300 p-2 font-semibold text-gray-800">
                Category
              </th>
              <th className="border border-gray-300 p-2 font-semibold text-gray-800">
                Kilometer
              </th>
              <th className="border border-gray-300 p-2 font-semibold text-gray-800">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Half Marathon</td>
              <td className="border border-gray-300 p-2">21 km</td>
              <td className="border border-gray-300 p-2">₹ 900</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">10 km Marathon</td>
              <td className="border border-gray-300 p-2">10 km</td>
              <td className="border border-gray-300 p-2">₹ 700</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Family Fun Run</td>
              <td className="border border-gray-300 p-2">3 km</td>
              <td className="border border-gray-300 p-2">₹ 500</td>
            </tr>
          </tbody>
        </table>

        <p className="text-gray-600 text-lg mb-4">
          Post Registration, a confirmation{" "}
          <span className="font-semibold">E-Mail</span> will be sent to the
          e-mail address provided during registration within 24 hours. Please
          ensure that the e-mail address you enter is correct, as the{" "}
          <span className="font-semibold">E-ticket</span> will be sent to this
          email address. Additionally, double-check all registration details to
          avoid any mistakes. For race rules, regulations, and additional
          information, please visit the following links:
          <a
            href="/terms-conditions"
            className="text-purple-600 underline ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms and Conditions
          </a>
          ,{" "}
          <a
            href="/faq"
            className="text-purple-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ
          </a>
          ,{" "}
          <a
            href="/privacy-policy"
            className="text-purple-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          ,{" "}
          <a
            href="/disclaimer"
            className="text-purple-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Disclaimer
          </a>
          , and{" "}
          <a
            href="/refund-policy"
            className="text-purple-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Refund Policy
          </a>
          . Please note that registration fees are non-refundable, and
          registration details cannot be changed once registration is completed.
        </p>
      </div>

      <hr className="mt-7 mx-auto border-2 w-11/12" />

      {/*//! form  */}
      <RegistrationForm />
    </>
  );
}

export default RegisterPage;
