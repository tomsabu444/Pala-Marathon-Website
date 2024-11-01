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
        <table className="table-auto text-lg text-gray-700 text-center mb-4 border-collapse w-full">
          <thead>
            <tr className="h-16 ">
              <th className="border border-gray-300 p-2  font-semibold text-gray-800">
                Category
              </th>
              <th className="border border-gray-300 p-2  font-semibold text-gray-800">
                Kilometer
              </th>
              <th className="border border-gray-300 p-2  font-semibold text-gray-800">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Full Marathon</td>
              <td className="border border-gray-300 p-2">21 Kms</td>
              <td className="border border-gray-300 p-2">₹ 1,000</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Half Marathon</td>
              <td className="border border-gray-300 p-2">10 Kms</td>
              <td className="border border-gray-300 p-2">₹ 800</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Family Fun Run</td>
              <td className="border border-gray-300 p-2">3 Kms</td>
              <td className="border border-gray-300 p-2">₹ 500</td>
            </tr>
          </tbody>
        </table>

        <p className="text-gray-600 text-lg">
          Post Registration, a confirmation{" "}
          <span className="font-semibold">E-Mail</span> will be sent to the
          e-mail address provided during registration within 24 hours. Please
          ensure that the e-mail address you enter is correct, as the{" "}
          <span className="font-semibold">E-ticket</span> will be sent to this
          email address. Additionally, double-check all registration details to
          avoid any mistakes. For race rules and regulations, please{" "}
          <Link to="/rules" className="text-purple-600 underline">
            click here
          </Link>
          . Please note that registration fees are non-refundable and
          registration details, cannot be changed once registration is
          completed.
        </p>
      </div>
      <hr className="mt-7 mx-auto border-2 w-11/12" />

      {/*//! form  */}
      <RegistrationForm />
    </>
  );
}

export default RegisterPage;
