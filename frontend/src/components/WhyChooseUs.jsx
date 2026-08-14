import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Quality Assurance:",
      desc: "We meticulously select and vet each product to ensure it meets our stringent quality standards.",
    },
    {
      title: "Convenience:",
      desc: "With our user-friendly interface and hassle-free ordering process, shopping has never been easier.",
    },
    {
      title: "Exceptional Customer Service:",
      desc: "Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.",
    },
  ];

  return (
    <div className="relative bg-black px-6 py-16 overflow-hidden">
      {/* ambient purple glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-64 bg-purple-600/10 rounded-full blur-[130px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex items-center mb-12 animate-fadeUp">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mr-4">
            WHY <span className="text-purple-500">CHOOSE US</span>
          </h2>
          <div className="w-14 h-[2px] bg-gradient-to-r from-purple-500 to-transparent" />
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className="group p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300 animate-fadeUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-purple-600/15 border border-purple-500/20 mb-5 group-hover:bg-purple-600/25 transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-purple-400">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-6">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;