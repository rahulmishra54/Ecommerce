import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";

const ContactComp = () => {
  return (
    <div className="relative bg-black px-6 py-20 overflow-hidden">
      {/* ambient purple glow */}
      <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-96 h-96 bg-violet-700/15 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-center mb-14 animate-fadeUp">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mr-4">
            CONTACT <span className="text-purple-500">US</span>
          </h2>
          <div className="w-14 h-[2px] bg-gradient-to-r from-purple-500 to-transparent" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative group animate-fadeUp [animation-delay:100ms]">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-purple-600/30 to-transparent blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              <img
                src={assets.contact_img}
                alt="contact"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="animate-fadeUp [animation-delay:200ms]">

            {/* Store Info */}
            <h3 className="text-lg font-semibold text-white mb-4">Our Store</h3>

            <div className="flex items-start gap-3 mb-4">
              <span className="mt-0.5 flex items-center justify-center w-8 h-8 rounded-lg bg-purple-600/15 border border-purple-500/20 text-purple-400 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <p className="text-gray-400 text-sm leading-6">
                54709 Willms Station <br />
                Suite 350, Washington, USA
              </p>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-600/15 border border-purple-500/20 text-purple-400 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.63a2 2 0 0 1-.45 2.11L8.09 9.68a16 16 0 0 0 6.23 6.23l1.22-1.22a2 2 0 0 1 2.11-.45c.85.31 1.73.53 2.63.65A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <p className="text-gray-400 text-sm">Tel: (415) 555-0132</p>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-600/15 border border-purple-500/20 text-purple-400 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6 12 13 2 6" />
                </svg>
              </span>
              <p className="text-gray-400 text-sm">Email: admin@forever.com</p>
            </div>

            {/* Careers */}
            <h3 className="text-lg font-semibold text-white mb-3">
              Careers at Forever
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Learn more about our teams and job openings.
            </p>

            <button className="relative px-7 py-2.5 rounded-full font-medium text-sm text-white bg-gradient-to-r from-purple-600 to-violet-600 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
              Explore Jobs
            </button>

          </div>
        </div>

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

export default ContactComp;