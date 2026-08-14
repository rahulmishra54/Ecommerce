import React from "react"
import { assets } from "../assets/frontend_assets/assets.js"

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange Policy",
      desc: "We offer hassle free exchange policy",
    },
    {
      icon: assets.quality_icon,
      title: "7 Days Return Policy",
      desc: "We provide 7 days free return policy",
    },
    {
      icon: assets.support_img,
      title: "Best Customer Support",
      desc: "We provide 24/7 customer support",
    },
  ]

  return (
    <div className="relative bg-black px-4 sm:px-6 py-16 overflow-hidden">
      {/* ambient purple glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-56 bg-purple-600/10 rounded-full blur-[130px]" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {policies.map((item, index) => (
          <div
            key={item.title}
            className="group flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300 animate-fadeUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-600/15 border border-purple-500/20 group-hover:bg-purple-600/25 transition-colors duration-300">
              <img
                src={item.icon}
                className="w-7 h-7 invert brightness-0 invert opacity-90"
                alt={item.title}
              />
            </div>
            <p className="font-semibold text-white text-sm sm:text-base">{item.title}</p>
            <p className="text-gray-500 text-xs sm:text-sm">{item.desc}</p>
          </div>
        ))}
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
  )
}

export default OurPolicy