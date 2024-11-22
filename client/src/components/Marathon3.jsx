import React from 'react';
import ShaderBackground from './ShaderBackground';
import Im1 from "Pala-Marathon-Website/client/src/assets/pala1.png";
import Im2 from "Pala-Marathon-Website/client/src/assets/pala2.png";
import Im3 from "Pala-Marathon-Website/client/src/assets/pala3.png";

const MarathonBanner = () => {
 return (
   <div className="relative flex justify-center items-center mx-auto mt-3 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] h-24 sm:h-32 md:h-42 rounded-lg">
     <ShaderBackground className="rounded-lg" />
     <div className="flex items-center justify-around w-full px-2 sm:px-6 md:px-12 z-10">
       <div className="rounded-md">
         <img 
           src={Im1} 
           alt="Lions Clubs International District 318B" 
           className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
         />
       </div>
       <div className="rounded-md">
         <img 
           src={Im2} 
           alt="St. Thomas College, Pala 75th Jubilee Celebrations" 
           className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
         />
       </div>
       <div className="rounded-md">
         <img 
           src={Im3} 
           alt="Engineers' Forum, Pala" 
           className="w-20 h-16 sm:w-24 sm:h-20 md:w-32 md:h-28 lg:w-36 lg:h-32"
         />
       </div>
     </div>
   </div>
 );
};

export default MarathonBanner;