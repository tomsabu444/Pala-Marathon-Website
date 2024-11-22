import React from "react";

//? images
import Dr_Siby_James from "../assets/Dr-Siby-James.jpg";
import R_Venkitchalam from "../assets/DGs-photo.jpg";
import Cpt_Babu_Joseph from "../assets/Gp-Capt-Babu-Joseph.png";

export default function GoverningBodyPage() {
  const governingBodyMembers = [
    {
      name: "Dr. Siby James",
      designation: "Principal, St. Thomas College, Palai",
      image: Dr_Siby_James,
    },
    {
      name: "MJF Lion R. Venkitchalam",
      designation: "District Governor, District 318B",
      image: R_Venkitchalam,
    },
    {
      name: "Gp. Cpt. Babu Joseph",
      designation: "President, Engineers’ Forum, Pala",
      image: Cpt_Babu_Joseph,
    },
  ];

  return (
    <div className="flex font-outfit flex-col items-center w-full p-16">
      <h1 className="text-2xl text-center  md:text-4xl font-semibold mb-14">GOVERNING BODY</h1>
      <div className="flex flex-col md:flex-row justify-evenly gap-12 lg:w-5/6">
        {governingBodyMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 lg:w-48 lg:h-48 object-cover rounded-full border-2 border-custom-pink shadow-2xl"
            />

            <h2 className="text-xl font-semibold mt-4 md:text-2xl">
              {member.name}
            </h2>
            <p className="text-center text-lg">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
