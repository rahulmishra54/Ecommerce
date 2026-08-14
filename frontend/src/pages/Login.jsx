import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${backendUrl}/api/auth/login`, {
        email,
        password,
      });

      if (!res.data.success) {
        setError(res.data.message);
        return;
      }

      localStorage.setItem("token", res.data.token);

      navigate("/");
    } catch (err) {
      setError("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0c] px-4 relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px]" />

      <div className="w-full max-w-md relative">
        <div className="border border-neutral-800 rounded-2xl p-8 md:p-10 bg-white/[0.03] backdrop-blur-sm shadow-[0_0_50px_-15px_rgba(147,51,234,0.25)]">
          <h2 className="text-2xl font-semibold mb-2 text-center text-neutral-100 tracking-wide">
            Welcome back
          </h2>
          <p className="text-sm text-neutral-500 text-center mb-8">
            Sign in to continue to FOREVER
          </p>

          {error && (
            <p className="text-red-400 text-sm mb-5 text-center bg-red-500/10 border border-red-500/20 rounded-lg py-2 px-3">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-neutral-900/60 border rounded-xl px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition-colors duration-200 ${
                error && !email
                  ? "border-red-500/50"
                  : "border-neutral-800 focus:border-purple-600"
              }`}
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full bg-neutral-900/60 border rounded-xl px-4 py-3 pr-11 text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition-colors duration-200 ${
                  error && !password
                    ? "border-red-500/50"
                    : "border-neutral-800 focus:border-purple-600"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex justify-between text-sm text-neutral-500 pt-1">
              <span className="cursor-pointer hover:text-purple-400 transition-colors duration-200">
                Forgot password?
              </span>

              <Link
                to="/signup"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Create account
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3.5 mt-2 rounded-full font-medium tracking-wide transition-all duration-300 hover:bg-purple-500 shadow-[0_0_20px_-5px_rgba(147,51,234,0.6)] hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.9)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
            >
              {loading && (
                <svg
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;