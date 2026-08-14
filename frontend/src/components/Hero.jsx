import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="relative flex flex-col sm:flex-row bg-black rounded-2xl border border-white/10 overflow-hidden">

      {/* ambient purple glow */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 bg-purple-600/25 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-72 h-72 bg-violet-700/15 rounded-full blur-[110px]" />

      {/* LEFT SIDE */}
      <div className="relative w-full sm:w-1/2 flex flex-col justify-center items-start p-8 sm:p-16 z-10">

        <div className="flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fadeUp">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <p className="text-xs font-medium tracking-wide text-gray-300">
            OUR BESTSELLERS
          </p>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold leading-tight text-white animate-fadeUp [animation-delay:100ms]">
          Latest <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Arrivals.</span>
        </h1>

        <p className="text-gray-400 text-sm mt-5 max-w-xs animate-fadeUp [animation-delay:150ms]">
          Discover the newest additions to our collection — premium quality, timeless style, just for you.
        </p>

        <button className="group flex items-center gap-2.5 mt-8 px-7 py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-violet-600 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 animate-fadeUp [animation-delay:200ms]">
          SHOP NOW
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full sm:w-1/2 min-h-[320px] sm:min-h-[480px] group">
        <img
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          src={assets.hero_img}
          alt="hero"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent sm:from-black/50" />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.7s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Hero;