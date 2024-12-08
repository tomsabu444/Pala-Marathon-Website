import React from 'react';
import MarathonBanner from "../components/MarathonBanner2.0";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useLocation } from "react-router-dom";

const RegistrationConfirmation = () => {
  const location = useLocation();
  const { 
    registrationId, 
    orderId, 
    amount, 
    category, 
    name, 
    email,
    phone,
    qrCodeData 
  } = location.state || {};

  return (
    <>
      <MarathonBanner />
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row">
        <div className="md:w-3/4">
          <div className="flex items-center mb-4">
            
            <h2 className="text-4xl font-bold">Registration Confirmed  </h2>
            <svg className="text-green-500 ml-3 mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor" />
            </svg>
          </div>

          <div className="mb-4">
            <p>Your payment was successful. Thank you for registering for Paia Marathon 2025. Your registration number is: #{registrationId}.</p>
            <p>We have sent a mail to {email} with your ticket and payment receipt.</p>
          </div>

          <div className="flex justify-between">
  {/* Left Section */}
  <div className="border-t pt-4 w-1/2 ml-32">
    <h3 className="text-lg font-medium mb-2">Registration Details:</h3>
    <div className="grid grid-cols-2 gap-2">
      <p className="font-medium">Race Category:</p>
      <p>{category}</p>
      <p className="font-medium">Name:</p>
      <p>{name}</p>
      <p className="font-medium">Phone Number:</p>
      <p>{phone}</p>
      <p className="font-medium">Amount Paid:</p>
      <p>₹{amount / 100}/-</p>
      <p className="font-medium">Registration ID:</p>
      <p>{registrationId}</p>
      <p className="font-medium">Order ID:</p>
      <p>{orderId}</p>
      <div className='border-t-4 border-r-8 border-[#9D356D] w-[200%] my-8'></div>
    </div>
  </div>

  {/* Right Section */}
  <div className="border-t pt-4 w-1/3 ml-auto text-right">
    <h3 className="text-lg font-medium mb-2">Have any questions?</h3>
    <div className="flex flex-col space-y-2">
      <a href="tel:9858683445" className="text-purple-600 hover:underline">
        985868 3445
      </a>
      <a href="mailto:EMAIL US" className="text-purple-600 hover:underline">
        EMAIL US
      </a>
      <a href="#" className="text-purple-600 hover:underline">
        CHAT WITH US
      </a>
    </div>
  </div>
</div>


          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Your QR Code:</h3>
            <div className="flex justify-center">
              <img src={qrCodeData} alt="QR Code" />
            </div>
            <p className="text-center text-sm">Scan this QR code at the event for a quick check-in.</p>
          </div>

          <div className="mt-4 text-center">
            <a href="#" className="text-white px-4 py-2 border border-purple-600 rounded bg-purple-600 ">Download your ticket</a>
          </div>

          <div className="mt-4 text-right">
            <button className="text-grey border border-[black] px-4 py-2 rounded"><KeyboardArrowLeftIcon/>Back</button>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default RegistrationConfirmation;