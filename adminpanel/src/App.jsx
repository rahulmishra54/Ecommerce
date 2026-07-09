import './index.css'
import Add from "./pages/Add.jsx";
import Front from "./pages/Front.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ProductList from "./pages/ProductList.jsx";
import { useEffect, useState } from "react";
import Login from "./components/Login.jsx";
import AdminRoutes from "./Routes/AdminRoutes.jsx";





function App() {
  return(

  <div>

    <AdminRoutes></AdminRoutes>
  </div>
  
  )
  
  

}



export default App;