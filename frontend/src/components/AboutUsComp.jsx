import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";

const AboutUsComp = () => {
  return (
    <div className="relative bg-black px-6 py-20 overflow-hidden">
      {/* ambient purple glow */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-violet-700/20 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center mb-14 animate-fadeUp">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mr-4">
            ABOUT <span className="text-purple-500">US</span>
          </h2>
          <div className="w-14 h-[2px] bg-gradient-to-r from-purple-500 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group animate-fadeUp [animation-delay:100ms]">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-purple-600/30 to-transparent blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
              <img
                src={assets.about_img}
                alt="about"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-gray-400 text-sm leading-7 animate-fadeUp [animation-delay:200ms]">
            <p className="mb-5">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>

            <p className="mb-8">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>

            <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              Our Mission
            </h3>

            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
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

export default AboutUsComp;