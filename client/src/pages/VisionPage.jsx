import React from 'react';
import runningManIcon from '../assets/runninglogo.svg';
import dots_Pattern from '../assets/dots_Pattern.svg';
import rectangle_Bar from '../assets/rectangle_bar.svg';

const VisionPage = () => {
  return (
    <div className="relative font-outfit text-gray-800 bg-white">
      {/* Dots Pattern - Reduced size */}
      <div className="hidden lg:block absolute bottom-8 left-0 opacity-70">
        <img src={dots_Pattern} alt="Dots Pattern" className="w-16 h-auto" />
      </div>
      {/* Rectangle Bar */}
      <div className="hidden lg:block absolute right-0 top-0 w-24 h-auto opacity-80">
        <img src={rectangle_Bar} alt="Rectangle Bar" className="w-full h-full" />
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white">OUR VISION</h2>
              <p className="mt-4 text-lg text-white">
                Pala, a town rich in culture and community spirit, presents a great opportunity to start a running club, bringing together people of all ages to promote health, fitness, and camaraderie. We aim to revive the spirit of Pala!
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img src="/path/to/image1.jpg" alt="Image 1" className="rounded-lg" />
              <img src="/path/to/image2.jpg" alt="Image 2" className="rounded-lg" />
              <img src="/path/to/image3.jpg" alt="Image 3" className="rounded-lg" />
              <img src="/path/to/image4.jpg" alt="Image 4" className="rounded-lg" />
              <img src="/path/to/image5.jpg" alt="Image 5" className="rounded-lg" />
              <img src="/path/to/image6.jpg" alt="Image 6" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;