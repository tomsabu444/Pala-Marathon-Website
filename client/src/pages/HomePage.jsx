import React from "react";

function HomePage() {
  return (
    <main>
      {/* landing page */}
      <section className="relative w-full h-screen bg-cover bg-center">
        {/* Blurred background image */}
        <div
          className="absolute inset-0 bg-[url('/bg-landing.jpg')] bg-cover bg-center filter blur-sm"
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"
          aria-hidden="true"
        ></div>

        {/* Text MAin */}
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center z-10">
          {/* Image placeholder for Title Sponsor Logo */}
          <img
            src="https://placehold.co/250x80?text=Title+Sponsor+Logo"
            alt="Title Sponsor Logo"
            className="mb-4 opacity-70"
          />
          <div className="flex flex-col">
            <h1 className="text-[240px] font-bold">PALA</h1>
            <p className="text-8xl font-bold"> MARATHON</p>
          </div>

          <p className="mt-4 text-5xl font-semibold">20th December 2024</p>

          <button className="mt-8 px-6 py-3 bg-custom-pink  rounded-full text-white font-semibold text-lg">
            Register Now
          </button>
        </div>
      </section>

      {/* about us */}
      <section></section>

      {/* services */}
      <section></section>

      {/* contact us */}
      <section></section>
    </main>
  );
}

export default HomePage;
