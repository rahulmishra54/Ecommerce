import { assets } from "../assets/admin_assets/assets.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "../context/TokenContext.jsx";

function Navbar() {
  const { logout } = useContext(TokenContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          // ✅ correct function
    navigate("/login"); // ✅ correct redirect
  };

  return (
    <div className="w-full bg-gray-100 px-4 sm:px-8 py-4 flex items-center justify-between">
      
      <div className="flex items-center gap-3">
        <img src={assets.logo} alt="logo" className="h-8 sm:h-10" />
        <span className="text-sm text-gray-500 font-medium hidden sm:block">
          ADMIN PANEL
        </span>
      </div>

      <button
        onClick={handleLogout}
        className="bg-gray-700 text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;