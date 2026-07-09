import React, { useContext, useState, useEffect } from "react"
import { ShopContext } from "../context/showContext.jsx"
import ProductItems from "./ProductItems.jsx"
import Title from "./Title.jsx"

const BestSeller = () => {

  const { products } = useContext(ShopContext)

  const [bestSeller, setbestSeller] = useState([])

  useEffect(() => {

    if(products){
      const result = products.filter(items => items.bestseller)
      setbestSeller(result)
    }

  }, [products])


  return (
    <div>

      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLER"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">

        {bestSeller.map((items,index)=>(
          <ProductItems
            key={index}
            id={items._id}
            price={items.price}
            name={items.name}
            image={items.image}
          />
        ))}

      </div>

    </div>
  )
}

export default BestSeller