import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative flex flex-col items-center gap-1.5 transition-colors duration-200 ${
      isActive ? "text-purple-400" : "text-gray-300 hover:text-white"
    }`;

  return (
    <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between font-medium">

        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} className="w-32 sm:w-36" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 text-sm tracking-wide">

          <NavLink to="/" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <p>HOME</p>
                <span
                  className={`h-[2px] rounded-full bg-purple-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink to="/collection" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <p>COLLECTION</p>
                <span
                  className={`h-[2px] rounded-full bg-purple-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <p>ABOUT</p>
                <span
                  className={`h-[2px] rounded-full bg-purple-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            {({ isActive }) => (
              <>
                <p>CONTACT</p>
                <span
                  className={`h-[2px] rounded-full bg-purple-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </>
            )}
          </NavLink>

        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">

          {/* NOTE: invert filter assumes these icons are dark/black assets
              (as used on the original light navbar). Remove `invert brightness-0
              invert` classes below if your icons are already light-colored. */}
          <img
            src={assets.search_icon}
            className="w-5 cursor-pointer invert brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-200"
            alt="search"
          />

          <Link to="/login">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer invert brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-200"
              alt="profile"
            />
          </Link>

          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              className="w-5 cursor-pointer invert brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-200"
              alt="cart"
            />
            {/* Cart count badge intentionally omitted — wire up with
                context cart count when available */}
          </Link>

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="sm:hidden w-5 cursor-pointer invert brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-200"
            alt="menu"
          />

        </div>

      </div>

      {/* Mobile Sidebar Backdrop */}
      <div
        onClick={() => setVisible(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${
          visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 max-w-[85%] bg-black/95 backdrop-blur-xl border-l border-white/10 transition-transform duration-300 ease-out sm:hidden ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col text-gray-300">

          {/* Close Button */}
          <button
            onClick={() => setVisible(false)}
            className="flex items-center gap-2 p-5 border-b border-white/10 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Close
          </button>

          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `p-5 border-b border-white/10 text-sm tracking-wide transition-colors duration-200 ${
                isActive ? "text-purple-400 bg-white/5" : "hover:text-white hover:bg-white/5"
              }`
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `p-5 border-b border-white/10 text-sm tracking-wide transition-colors duration-200 ${
                isActive ? "text-purple-400 bg-white/5" : "hover:text-white hover:bg-white/5"
              }`
            }
            to="/collection"
          >
            Collection
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `p-5 border-b border-white/10 text-sm tracking-wide transition-colors duration-200 ${
                isActive ? "text-purple-400 bg-white/5" : "hover:text-white hover:bg-white/5"
              }`
            }
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `p-5 border-b border-white/10 text-sm tracking-wide transition-colors duration-200 ${
                isActive ? "text-purple-400 bg-white/5" : "hover:text-white hover:bg-white/5"
              }`
            }
            to="/contact"
          >
            Contact
          </NavLink>

        </div>
      </div>

    </div>
  );
};

export default NavBar;