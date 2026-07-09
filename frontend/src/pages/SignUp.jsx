import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const SignUp = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signUp = async (e) => {
    e.preventDefault(); 

    try {
      console.log("Form submitted");

      const response = await axios.post(
        backendUrl + "/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      console.log("SUCCESS:", response.data);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md text-center">

        {/* Heading */}
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-2xl font-semibold mr-3">Sign Up</h2>
          <div className="w-10 h-[2px] bg-gray-600"></div>
        </div>

        {/* Form */}
        <form onSubmit={signUp} className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-400 px-4 py-3 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-400 px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-400 px-4 py-3 outline-none"
          />

          {/* Links */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-black">
              Forgot your password?
            </span>

            <Link to="/login">
              <span className="cursor-pointer hover:text-black">
                Login Here
              </span>
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 mt-4"
          >
            Sign Up
          </button>

        </form>

      </div>
    </div>
  );
};

export default SignUp;