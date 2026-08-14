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
    <div className="relative bg-black px-4 sm:px-6 py-16 overflow-hidden">
      {/* ambient purple glow */}
      <div className="pointer-events-none absolute top-10 right-1/3 w-80 h-80 bg-purple-600/15 rounded-full blur-[110px]" />

      <div className="relative max-w-7xl mx-auto">

        <div className="text-center py-8 animate-fadeUp">
          <Title text1={"BEST"} text2={"SELLER"} />
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Our most-loved pieces, handpicked by thousands of happy customers.
          </p>
        </div>

        {bestSeller.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8">
            {bestSeller.map((items, index) => (
              <div
                key={items._id ?? index}
                className="animate-fadeUp"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <ProductItems
                  id={items._id}
                  price={items.price}
                  name={items.name}
                  image={items.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-16 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
            <p className="text-gray-400 text-sm">
              No best sellers to show right now. Check back soon.
            </p>
          </div>
        )}

      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.6s ease-out both;
        }
      `}</style>
    </div>
  )
}

export default BestSeller