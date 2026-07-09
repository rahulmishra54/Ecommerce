import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold mr-4">
            WHY CHOOSE US
          </h2>
          <div className="w-12 h-[2px] bg-gray-600"></div>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-300">

          {/* Box 1 */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-gray-300">
            <h3 className="font-semibold mb-3">Quality Assurance:</h3>
            <p className="text-gray-600 text-sm leading-6">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-gray-300">
            <h3 className="font-semibold mb-3">Convenience:</h3>
            <p className="text-gray-600 text-sm leading-6">
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>

          {/* Box 3 */}
          <div className="p-6">
            <h3 className="font-semibold mb-3">
              Exceptional Customer Service:
            </h3>
            <p className="text-gray-600 text-sm leading-6">
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;