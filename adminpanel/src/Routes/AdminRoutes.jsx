import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "../../../adminpanel/src/context/TokenContext.jsx";
import Login from "../components/Login.jsx"
import Front from "../pages/Front.jsx";


import Add from "../pages/Add.jsx"

import ProductList from "../pages/ProductList.jsx";
export const backendUrl = import.meta.env.VITE_BACKEND_URL;

function AdminRoutes() {
  const { token } = useContext(TokenContext);

  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />

      {/* Protected */}
      <Route
        path="/"
        element={token ? <Front /> : <Navigate to="/login" />}
      />

      <Route
        path="/add"
        element={token ? <Add /> : <Navigate to="/login" />}
      />

      <Route
        path="/list"
        element={token ? <ProductList /> : <Navigate to="/login" />}
      />
      
    </Routes>

    
  );
}

export default AdminRoutes;