import React from "react";

function Loading() {
  return (
    <div className={` px-28 py-5 flex items-center justify-center ${
            location.pathname == "/register" ? "" : "h-screen"
          }`}>
      <div className="w-16 h-16 rounded-full border-t-4 border-l-4 border-custom-pink border-opacity-100 border-r-transparent animate-spin"></div>
    </div>
  );
}

export default Loading;
