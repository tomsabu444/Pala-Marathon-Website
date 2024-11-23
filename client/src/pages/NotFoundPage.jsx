import React from "react";
import error from "Pala-Marathon-Website/client/src/assets/404.png";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-b from-[#f8eded] to-[#c28e8e] flex items-center justify-center p-4">
      <div className="text-center w-full max-w-3xl mx-auto px-4">
        <div className="mb-6 sm:mb-8">
          <img
            src={error}
            alt="404 Error Illustration"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto mx-auto"
          />
        </div>
        <h2
          className="text-[#330A48] text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
          style={{ fontFamily: "Podkova, serif" }}
        >
          PAGE NOT FOUND!
        </h2>
        <p
          className="text-[#8F1757] text-base sm:text-lg md:text-2xl mb-6"
          style={{ fontFamily: "Mynerve, sans-serif" }}
        >
          Sorry! The page you are looking for does not exist
        </p>
        <button
          className="px-6 py-2 bg-gradient-to-r from-[#8D1455] to-[#573859] text-white rounded-md ] 
                     transition-colors duration-300 text-base sm:text-lg font-medium
                     shadow-md hover:shadow-lg"
          onClick={() => navigate("/")}
        >
          GO HOME
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
