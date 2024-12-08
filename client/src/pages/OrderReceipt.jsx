import React from 'react';
import MarathonBanner from "../components/MarathonBanner2.0";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useLocation } from "react-router-dom";

const RegistrationConfirmation = () => {
  const location = useLocation();
  const {
    registrationId,
    orderId,
    amount,
    category,
    email,
    phone,
    qrCodeData,
  } = location.state || {};

  return (
    <>
      <MarathonBanner />
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap gap-3 items-center">
          <h2 className="text-3xl font-bold text-black">Registration Confirmed</h2>
          <svg
            className="text-green-500"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <p className="text-[#330A48] text-lg mt-2">
          Your payment was successful. Thank you for registering for Pala Marathon 2025. 
          Your registration number is: <span className="font-semibold">#{registrationId}</span>. 
          We have sent a mail to <span className="font-semibold">{email}</span> with your ticket and payment receipt.
        </p>
      </div>
      <div className="flex flex-wrap justify-around items-start gap-6">
        <div className="w-full lg:w-2/5">
          <h3 className="text-xl font-bold text-[#330A48] mb-4">REGISTRATION DETAILS:</h3>
          <div className="text-[#330A48] space-y-2 text-lg md:text-lg">
            <p><strong><span className="font-medium">Race Category:</span></strong> {category}</p>
            <p><strong><span className="font-medium">Phone Number:</span></strong> {phone}</p>
            <p><strong><span className="font-medium">Amount Paid:</span></strong> ₹{amount / 100}/-</p>
            <p><strong><span className="font-medium">Payment type:</span></strong> UPI</p>
            <p><strong><span className="font-medium">Transaction ID:</span></strong> 2346754</p>
            <p><strong><span className="font-medium">Order ID:</span></strong> {orderId}</p>
          </div>
          <hr className="border-t border-[#9D356D] my-4" />
          <div>
            <h3 className="text-xl font-semibold text-[black] mb-4">Your QR Code:</h3>
            <img
              src={qrCodeData || "https://via.placeholder.com/150"}
              alt="QR Code"
              className="h-32 w-32 md:h-40 md:w-40"
            />
            <p className="text-sm text-[#444444] mt-2">Scan this QR code at the event for a quick check-in.</p>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/3 max-w-sm border border-[#330A48] rounded-md bg-pink-50">
          <a
            href="tel:9858683445"
            className="flex items-center px-8 py-3 border-b border-[#330A48] text-[#330A48] hover:bg-purple-100"
          >
            <span className="mr-3"><PhoneOutlinedIcon/></span> 985868 3445
          </a>
          <a
            href="mailto:EMAIL US"
            className="flex items-center px-8 py-3 border-b border-[#330A48] text-[#330A48] hover:bg-purple-100"
          >
            <span className="mr-3"><MailOutlinedIcon/></span> EMAIL US
          </a>
          <a
            href="#"
            className="flex items-center px-8 py-3 text-[#330A48] hover:bg-purple-100"
          >
            <span className="mr-3"><ChatBubbleOutlineOutlinedIcon/></span> CHAT WITH US
          </a>
        </div>
      </div>
      <div className='flex justify-center m-8'>
      <button className="flex items-center text-[#4A4A4A] border border-[#4A4A4A] px-4 py-2 rounded-md hover:bg-gray-100">
              <KeyboardArrowLeftIcon />
              Back
            </button>
      </div>
    </>
  );
};

export default RegistrationConfirmation;
