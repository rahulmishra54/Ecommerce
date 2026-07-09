import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const backendUrl = "http://localhost:4000";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      const res = await axios.post(
        `${backendUrl}/api/auth/login`,
        { email, password }
      );

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
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">

   
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Login to your account
        </h2>


        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

   
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-3 outline-none focus:border-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-3 outline-none focus:border-black"
          />

   
          <div className="flex justify-between text-sm text-gray-600">
            <span className="cursor-pointer hover:text-black">
              Forgot password?
            </span>

            <Link to="/signup" className="hover:text-black">
              Create account
            </Link>
          </div>

   
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 mt-2 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;