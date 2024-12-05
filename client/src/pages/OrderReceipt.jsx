import React from 'react';

const RegistrationConfirmation = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <svg className="text-green-500 mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor" />
        </svg>
        <h2 className="text-2xl font-bold">Registration Confirmed</h2>
      </div>

      <div className="mb-4">
        <p>Your payment was successful. Thank you for registering for Paia Marathon 2025. Your registration number is: #9345.</p>
        <p>We have sent a mail to raju@gmail.com with your ticket and payment receipt.</p>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-medium mb-2">Registration Details:</h3>
        <div className="grid grid-cols-2 gap-2">
          <p className="font-medium">Race Category:</p>
          <p>Half Marathon</p>
          <p className="font-medium">Phone Number:</p>
          <p>69958584</p>
          <p className="font-medium">Amount Paid:</p>
          <p>250/-</p>
          <p className="font-medium">Payment type:</p>
          <p>UPI</p>
          <p className="font-medium">Transaction ID:</p>
          <p>2346754</p>
          <p className="font-medium">Order ID:</p>
          <p>2345</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">Your QR Code:</h3>
        <div className="flex justify-center">
          <img src="/api/placeholder/200/200" alt="QR Code" />
        </div>
        <p className="text-center text-sm">Scan this QR code at the event for a quick check-in.</p>
      </div>

      <div className="mt-4 text-center">
        <a href="#" className="text-white p-2 border-1 bg-[#8D1455]">Download your ticket</a>
      </div>

      <div className="mt-4 text-right">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">Back</button>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;