import React from "react";
import M1 from "Pala-Marathon-Website/client/src/assets/m1.png";
import M2 from "Pala-Marathon-Website/client/src/assets/m2.png";
import M3 from "Pala-Marathon-Website/client/src/assets/m3.png";
import M4 from "Pala-Marathon-Website/client/src/assets/m4.png";

function SecondVision() {
  return (
    <div className="relative py-36">
      <div className="dot absolute"></div>
      <div className="main flex justify-between relative w-full">
        <div className="writing ml-[5rem]">
          <h1 className="text-4xl font-bold mb-4">Our Vision</h1>
          <p className="max-w-[500px] text-lg">
            Pala, a town rich in culture and community spirit, presents a great 
            opportunity to start a running club, bringing together people of all 
            ages to promote health, fitness, and camaraderie. We aim to revive 
            the spirit of Pala!
          </p>
        </div>
        <div className="image relative w-[800px]">
          <div 
            className="img1 absolute z-10 -mt-24 ml-[15rem] w-[364px] h-[392px] bg-cover bg-center border-[10px] border-white"
            style={{backgroundImage: `url(${M1})`}}
          ></div>
          <div 
            className="img2 absolute z-10 mt-[19rem] -ml-[15rem] w-[451px] h-[275px] bg-cover bg-center border-t-[10px] border-r-[10px] border-white"
            style={{backgroundImage: `url(${M2})`}}
          ></div>
          <div 
            className="img3 absolute z-0 mt-[10rem] w-[385px] h-[408px] bg-cover bg-center"
            style={{backgroundImage: `url(${M3})`}}
          ></div>
          <div 
            className="img4 absolute right-0 top-[9rem] z-0 w-[365px] h-[408px] bg-cover bg-center"
            style={{backgroundImage: `url(${M4})`}}
          ></div>
          <div className="img5 absolute"></div>
        </div>
      </div>
    </div>
  );
}

export default SecondVision;