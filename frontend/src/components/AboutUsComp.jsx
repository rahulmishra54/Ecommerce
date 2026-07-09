import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";
const AboutUsComp = () => {
  return (
    <div className="bg-gray-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">

    
        <div className="flex items-center justify-center mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mr-4">
            ABOUT US
          </h2>
          <div className="w-12 h-[2px] bg-gray-600"></div>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      
          <div>
            <img
              src={assets.about_img}
              alt="about"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="text-gray-600 text-sm leading-6">

            <p className="mb-4">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>

            <p className="mb-4">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>

            <h3 className="text-black font-semibold mt-6 mb-2">
              Our Mission
            </h3>

            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a seamless
              shopping experience that exceeds expectations, from browsing and
              ordering to delivery and beyond.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUsComp;