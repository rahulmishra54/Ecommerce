import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-black px-6 pt-16 pb-8 overflow-hidden border-t border-white/5">
      {/* top gradient hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      {/* ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-96 h-72 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* LEFT */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={assets.logo} className="w-36" alt="logo" />
            </Link>
            <p className="text-gray-500 text-sm leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book.
            </p>
          </div>

          {/* MIDDLE */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-purple-400 mb-4">
              COMPANY
            </h3>
            <ul className="space-y-2.5 text-gray-500 text-sm">
              {["Home", "About us", "Delivery", "Privacy policy"].map((item) => (
                <li
                  key={item}
                  className="group cursor-pointer w-fit flex items-center gap-1.5 hover:text-white transition-colors duration-200"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-purple-500 transition-all duration-200" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest text-purple-400 mb-4">
              GET IN TOUCH
            </h3>
            <ul className="space-y-2.5 text-gray-500 text-sm">
              <li>
                <a href="tel:+10000000000" className="hover:text-white transition-colors duration-200">
                  +1-000-000-0000
                </a>
              </li>
              <li>
                <a href="mailto:stackdev@gmail.com" className="hover:text-white transition-colors duration-200">
                  stackdev@gmail.com
                </a>
              </li>
              <li className="group cursor-pointer w-fit flex items-center gap-2 hover:text-white transition-colors duration-200">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-600">
          Copyright 2024© greatstack.dev - All Right Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;