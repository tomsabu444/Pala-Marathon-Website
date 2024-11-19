import React from 'react';

//? images
import Dr_Siby_James from '../assets/Dr-Siby-James.webp';
import R_Venkitchalam from '../assets/DGs-photo.jpg';
import Cpt_Babu_Joseph from '../assets/Gp-Capt-Babu-Joseph.png';

export default function GoverningBodyPage() {
  const governingBodyMembers = [
    {
      name: 'Dr. Siby James',
      designation: 'Principal, St. Thomas College, Pala',
      image: Dr_Siby_James,
    },
    {
      name: 'MJF Lion R. Venkitchalam',
      designation: 'District Governor, District 318B',
      image: R_Venkitchalam,
    },
    {
      name: 'Gp. Cpt. Babu Joseph',
      designation: 'President, Engineers’ Forum, Pala',
      image: Cpt_Babu_Joseph,
    },
  ];

  return (
    <div className="flex font-outfit flex-col items-center w-full p-16">
      <h1 className="text-3xl font-bold mb-14">GOVERNING BODY</h1>
      <div className="flex flex-col md:flex-row justify-evenly gap-12 lg:w-5/6">
        {governingBodyMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div
            //   className="w-44 h-44 lg:w-48 lg:h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 lg:w-48 lg:h-48 object-cover rounded-full shadow-2xl"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4 md:text-2xl">{member.name}</h2>
            <p className="text-center text-lg">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
