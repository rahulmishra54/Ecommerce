import { useState, useContext } from "react";
import axios from "axios";
import { TokenContext } from "../../../adminpanel/src/context/TokenContext.jsx";
import { backendUrl } from "../Routes/AdminRoutes.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(TokenContext); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("INPUT:", email, password);

      const response = await axios.post(
        backendUrl + "/api/auth/adminLogin",
        { email: email.trim(), password: password.trim() }
      );

      console.log("RESPONSE:", response);

      login(response.data.token);   // ✅ store token
      navigate("/");                // ✅ redirect

    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md w-full max-w-sm">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Admin Panel
          </h2>

          {/* Email */}
          <label className="block text-sm text-gray-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="admin@example.com"
            className="w-full px-4 py-2 border rounded-md mb-4 outline-none focus:ring-2 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <label className="block text-sm text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 border rounded-md mb-6 outline-none focus:ring-2 focus:ring-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Login
          </button>

        </div>
      </div>
    </form>
  );
}