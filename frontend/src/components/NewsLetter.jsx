import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState(null); // { type: 'error' | 'success', message: string }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      setFeedback({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    // BACKEND INTEGRATION POINT:
    // Replace this block with an Axios call once a subscribe endpoint exists, e.g.
    // await axios.post(`${backendUrl}/api/newsletter/subscribe`, { email })
    setFeedback({ type: "success", message: "Thanks! We'll be in touch soon." });
    setEmail("");
  };

  return (
    <div className="relative w-full bg-black py-16 px-4 overflow-hidden">
      {/* ambient purple glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-64 bg-purple-600/15 rounded-full blur-[130px]" />

      <div className="relative max-w-2xl mx-auto text-center animate-fadeUp">

        {/* Badge */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-600/15 border border-purple-500/20 mb-6">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 6 12 13 2 6" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Subscribe now &amp; get{" "}
          <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
            20% off
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-sm sm:text-base mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* Input + Button */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          noValidate
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (feedback) setFeedback(null);
            }}
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-full bg-white/5 border border-white/15 text-white placeholder-gray-500 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-200"
          />

          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-violet-600 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
          >
            SUBSCRIBE
          </button>
        </form>

        {/* Feedback */}
        {feedback && (
          <p
            className={`mt-4 text-sm animate-fadeUp ${
              feedback.type === "error" ? "text-red-400" : "text-purple-400"
            }`}
          >
            {feedback.message}
          </p>
        )}

      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default NewsLetter;