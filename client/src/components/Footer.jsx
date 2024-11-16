import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(''); 
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      alert(`Thank you for subscribing with: ${email}`);
      setEmail(''); // Clear input after submission
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#2D1140] to-[#84185F] text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Social Media Section */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-6">SOCIAL MEDIA</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:opacity-80">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <FaFacebookF className="text-[#2D1140]" />
                </div>
              </a>
              <a href="#" className="hover:opacity-80">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <FaTwitter className="text-[#2D1140]" />
                </div>
              </a>
              <a href="#" className="hover:opacity-80">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <FaInstagram className="text-[#2D1140]" />
                </div>
              </a>
            </div>
          </div>

          {/* Center Links Section */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-3">
              <a href="#" className="block text-xl font-bold mb-6">HOME</a>
              <a href="#" className="block text-sm">PARTICIPANT INFO</a>
              <a href="#" className="block text-sm">FAQ</a>
              <a href="#" className="block text-sm">TERMS&CONDITIONS</a>
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              <a href="#" className="block text-xl font-bold mb-6">RESULTS</a>
              <a href="#" className="block text-sm">SPONSORS</a>
              <a href="#" className="block text-sm">DISCLAIMER</a>
              <a href="#" className="block text-sm">PRIVACY POLICIES</a>
            </div>
          </div>

          {/* Stay Up To Date Section */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-6">STAY UP TO DATE</h3>
            <div className="flex h-10">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-3 py-2 bg-transparent border border-white rounded-l text-sm focus:outline-none"
              />
              <button
                onClick={handleSubmit}
                className="px-6 bg-white text-[#2D1140] rounded-r text-sm hover:bg-gray-100 transition-colors"
              >
                Submit
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
