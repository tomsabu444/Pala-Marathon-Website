import React from 'react';
import MarathonBanner from "../components/MarathonBanner2.0";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import { useLocation, useNavigate } from "react-router-dom";

// Add print-specific styles
const printStyles = `
@media print {
  body * {
    visibility: hidden;
  }
  .print-section, .print-section * {
    visibility: visible;
  }
  .print-section {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  @page {
    margin: 10mm;
  }
}
`;

const RegistrationConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    registrationId,
    orderId,
    amount,
    category,
    email,
    phone,
    qrCodeData,
  } = location.state || {};

  const handleBack = () => {
    navigate(-1); 
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>{printStyles}</style>
      <MarathonBanner />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 print-section">
        <div className="flex flex-col sm:flex-row gap-3 items-center mb-4">
          <div className="flex items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mr-3">Registration Confirmed</h2>
            <svg
              className="text-green-500 w-6 h-6 sm:w-7 sm:h-7"
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
        </div>
        <p className="text-[#330A48] text-base sm:text-lg mb-6">
          Your payment was successful. Thank you for registering for Pala Marathon 2025. 
          Your registration number is: <span className="font-semibold">#{registrationId}</span>. 
          We have sent a mail to <span className="font-semibold">{email}</span> with your ticket and payment receipt.
        </p>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/5 lg:ml-24">
            <h3 className="text-lg sm:text-xl font-bold text-[#330A48] mb-4">REGISTRATION DETAILS:</h3>
            <div className="text-[#330A48] space-y-2 text-base sm:text-lg">
              <p><strong className="font-medium">Race Category:</strong> {category}</p>
              <p><strong className="font-medium">Phone Number:</strong> {phone}</p>
              <p><strong className="font-medium">Amount Paid:</strong> ₹{amount / 100}/-</p>
              <p><strong className="font-medium">Payment type:</strong> UPI</p>
              <p><strong className="font-medium">Transaction ID:</strong> 2346754</p>
              <p><strong className="font-medium">Order ID:</strong> {orderId}</p>
            </div>
            <hr className="border-t-2 border-[#9D356D] my-4" />
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">Your QR Code:</h3>
              <div className="flex justify-center sm:block">
                <img
                  src={qrCodeData || "https://via.placeholder.com/150"}
                  alt="QR Code"
                  className="h-32 w-32 sm:h-40 sm:w-40"
                />
              </div>
              <p className="text-xs sm:text-sm text-[#444444] mt-2 text-center sm:text-left">
                Scan this QR code at the event for a quick check-in.
              </p>
              <div className="flex justify-center sm:justify-start mt-4 print:hidden">
                <button 
                  onClick={handlePrint}
                  className="flex items-center text-white bg-[#330A48] px-4 py-2 rounded-md hover:bg-purple-900"
                >
                  <PrintOutlinedIcon className="mr-2" />
                  Print Ticket
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 max-w-sm mx-auto print:hidden">
            <div className="border border-[#330A48] rounded-md bg-pink-50">
              <a
                href="tel:9858683445"
                className="flex items-center p-4 border-b border-[#330A48] text-[#330A48] hover:bg-purple-100"
              >
                <PhoneOutlinedIcon className="mr-3 text-base sm:text-lg"/> 
                <span className="text-sm sm:text-base">985868 3445</span>
              </a>
              <a
                href="mailto:EMAIL US"
                className="flex items-center p-4 border-b border-[#330A48] text-[#330A48] hover:bg-purple-100"
              >
                <MailOutlinedIcon className="mr-3 text-base sm:text-lg"/> 
                <span className="text-sm sm:text-base">EMAIL US</span>
              </a>
              <a
                href="#"
                className="flex items-center p-4 text-[#330A48] hover:bg-purple-100"
              >
                <ChatBubbleOutlineOutlinedIcon className="mr-3 text-base sm:text-lg"/> 
                <span className="text-sm sm:text-base">CHAT WITH US</span>
              </a>
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-8 print:hidden'>
          <button 
            onClick={handleBack}
            className="flex items-center text-[#4A4A4A] border border-[#4A4A4A] px-4 py-2 rounded-md hover:bg-gray-100"
          >
            <KeyboardArrowLeftIcon />
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default RegistrationConfirmation;