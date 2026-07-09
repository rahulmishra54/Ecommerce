import React from "react";

const NewsLetter= () => {
  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Subscribe now & get 20% off
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-sm sm:text-base mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 outline-none"
          />

          <button className="w-full sm:w-auto bg-black text-white px-6 py-3">
            SUBSCRIBE
          </button>

        </div>

      </div>
    </div>
  );
};

export default NewsLetter;