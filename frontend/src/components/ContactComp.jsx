import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";

const ContactComp = () => {
  return (
    <div className="bg-gray-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-center mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mr-4">
            CONTACT US
          </h2>
          <div className="w-12 h-[2px] bg-gray-600"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={assets.contact_img}
              alt="contact"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Store Info */}
            <h3 className="text-lg font-semibold mb-3">Our Store</h3>
            <p className="text-gray-600 text-sm mb-4 leading-6">
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>

            <p className="text-gray-600 text-sm mb-2">
              Tel: (415) 555-0132
            </p>
            <p className="text-gray-600 text-sm mb-6">
              Email: admin@forever.com
            </p>

            {/* Careers */}
            <h3 className="text-lg font-semibold mb-3">
              Careers at Forever
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Learn more about our teams and job openings.
            </p>

            <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition">
              Explore Jobs
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactComp;