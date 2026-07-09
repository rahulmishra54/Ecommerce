import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300">

      {/* LEFT SIDE */}
      <div className="w-full   sm:w-1/2 flex flex-col justify-center items-start p-8 sm:p-16">

        <div className="flex items-center gap-2">
          <p className="w-8 md:w-11 h-[2px] bg-gray-700"></p>
          <p className="text-sm font-medium text-gray-700">
            OUR BESTSELLERS
          </p>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif mt-4">
          Latest Arrivals
        </h1>

        <div className="flex items-center gap-2 mt-6">
          <p className="font-semibold text-sm md:text-base">
            SHOP NOW
          </p>
          <p className="w-8 md:w-11 h-[1px] bg-gray-700"></p>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full sm:w-1/2">
        <img
          className="w-full h-full object-cover"
          src={assets.hero_img}
          alt=""
        />
      </div>

    </div>
  );
};

export default Hero