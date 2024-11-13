import React from "react";

function HomePage() {
  return (
    <main>
      {/* Landing page */}
      <section className="relative w-full min-h-screen bg-cover bg-center pt-16 md:pt-20 flex items-center justify-center">
        {/* Blurred background image */}
        <div
          className="absolute inset-0 bg-[url('/bg-landing.jpg')] bg-cover bg-center filter blur-sm"
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"
          aria-hidden="true"
        ></div>

        {/* Main Text */}
        <div className="relative flex flex-col items-center text-white text-center z-10 px-4">
          {/* Image placeholder for Title Sponsor Logo */}
          <img
            src="https://placehold.co/250x80?text=Title+Sponsor+Logo"
            alt="Title Sponsor Logo"
            className="mb-4 opacity-70 w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96"
          />
          <div className="flex flex-col">
            <h1 className="text-7xl sm:text-8xl md:text-[140px] lg:text-[180px] xl:text-[240px] font-bold leading-none">
              PALA
            </h1>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
              MARATHON
            </p>
          </div>

          <p className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold">
            19th January 2025
          </p>

          <button className="mt-8 px-4 py-2 sm:px-6 sm:py-3 bg-custom-pink rounded-full text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
            Register Now
          </button>
        </div>
      </section>


    </main>
  );
}

export default HomePage;
