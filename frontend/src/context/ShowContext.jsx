import React from "react"
import { createContext } from "react"
import { products } from "../assets/frontend_assets/assets.js"
import axios from "axios"
import { backendUrl } from "../../../adminpanel/src/Routes/AdminRoutes.jsx"
import { useState } from "react"
export const ShopContext = createContext()

const ShopContextProvider = (props) => {

  const currency = "$"
  const delivery_fees = 10
  const backendUrl=import.meta.env.VITE_BACKEND_URL

 const [product,showProduct] = useState([])

   const getAllProducts = async ()=>{

    try{
      const response = await axios.get(backendUrl+"/api/product/list")
      showProduct(response.data)

      console.log(response)
    }catch(error){
      console.log(error)
    }
  

  }
   const value = {
    products,
    currency,
    delivery_fees,
    backendUrl,
    getAllProducts,
    product
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider