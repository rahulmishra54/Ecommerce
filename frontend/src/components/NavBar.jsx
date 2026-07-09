import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="py-5 flex items-center justify-between font-medium">

      {/* Logo */}
      <Link to="/"><img src={assets.logo} className="w-36" alt="logo" /></Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-5 text-gray-700 text-sm">

        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">

        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <Link to="/login"><img src={assets.profile_icon} className="w-5 cursor-pointer" alt="" /></Link>

        <Link to="/cart">
          <img src={assets.cart_icon} className="w-5 cursor-pointer" alt="" />
        </Link>

      </div>

      {/* Mobile Menu Icon */}
      <img
        onClick={() => setVisible(true)}
        src={assets.menu_icon}
        className="sm:hidden w-5 cursor-pointer"
        alt=""
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300
        ${visible ? "w-full " : "w-0"} overflow-hidden`}
      >

        <div className="flex flex-col text-gray-600">

          {/* Close Button */}
          <p
            onClick={() => setVisible(false)}
            className="p-4 cursor-pointer border-b"
          >
            Close
          </p>

          <NavLink onClick={()=>setVisible(false)} className="p-4 border-b" to="/">
            Home
          </NavLink>

          <NavLink onClick={()=>setVisible(false)} className="p-4 border-b" to="/collection">
            Collection
          </NavLink>

          <NavLink onClick={()=>setVisible(false)} className="p-4 border-b" to="/about">
            About
          </NavLink>

          <NavLink onClick={()=>setVisible(false)} className="p-4 border-b" to="/contact">
            Contact
          </NavLink>

        </div>
      </div>

    </div>
  );
};

export default NavBar;