import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <Link to="/"><img src={assets.logo} className="w-36" alt="logo" /></Link>
            </h2>
            <p className="text-gray-500 text-sm leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book.
            </p>
          </div>

          {/* MIDDLE */}
          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="cursor-pointer hover:text-black">Home</li>
              <li className="cursor-pointer hover:text-black">About us</li>
              <li className="cursor-pointer hover:text-black">Delivery</li>
              <li className="cursor-pointer hover:text-black">Privacy policy</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>+1-000-000-0000</li>
              <li>greatstackdev@gmail.com</li>
              <li className="cursor-pointer hover:text-black">Instagram</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-500">
          Copyright 2024@ greatstack.dev - All Right Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;