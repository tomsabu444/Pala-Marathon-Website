import React from "react";

const committeeMembers = [
  {
    name: "Ashish Joseph",
    designation: "Assistant Professor, St. Thomas College, Pala",
  },
  {
    name: "Dr. Jince Kappen",
    designation: "Assistant Professor, St. Thomas College, Pala",
  },
  {
    name: "Sanu Joseph",
    designation: "Chartered Accountant, Lions Clubs International",
  },
  {
    name: "Maggie Jose Menamparampil",
    designation:
      "Past District Governor, Lions Clubs International District 318B",
  },
  {
    name: "Madhu M V",
    designation:
      "District Coordinator, Lions Clubs International District 318B",
  },
  {
    name: "Chery A Menamparampan",
    designation: "Engineers' Forum, Pala",
  },
  {
    name: "Dr. Jubilant J Kizhakkethottam",
    designation: "Engineers' Forum, Pala",
  },
];

function OrganisingCommittee() {
  return (
    <div className="flex font-outfit flex-col items-center w-full p-10">
      <h1 className="text-2xl text-center md:text-4xl font-semibold mb-14">
        ORGANISING COMMITTEE
      </h1>
      <div className="flex flex-col items-center text-center space-y-8">
        {committeeMembers.map((member, index) => (
          <div key={index}>
            <h2 className="font-bold text-lg md:text-xl">{member.name}</h2>
            <p className="text-lg md:text-xl">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrganisingCommittee;
