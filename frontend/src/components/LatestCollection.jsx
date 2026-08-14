import React from 'react'
import { ShopContext } from '../context/showContext.jsx'
import { useContext } from 'react'
import Title from './Title.jsx'
import { useState, useEffect } from 'react'
import ProductItems from './ProductItems.jsx'

const LatestCollection = () => {

  const { products } = useContext(ShopContext)
  const [latestPrduct, setLatestProduct] = useState([])

  useEffect(() => {
    if (products) {
      setLatestProduct(products.slice(0, 10))
    }
  }, [products])


  return (
    <div className="relative bg-black px-4 sm:px-6 py-16 overflow-hidden">
      {/* ambient purple glow */}
      <div className="pointer-events-none absolute top-10 left-1/3 w-80 h-80 bg-purple-600/15 rounded-full blur-[110px]" />

      <div className="relative max-w-7xl mx-auto">

        <div className="text-center py-8 animate-fadeUp">
          <Title text1={"LATEST"} text2={"COLLECTION"} />
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Fresh drops, curated weekly. Be the first to shop what's new.
          </p>
        </div>

        {latestPrduct.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8">
            {latestPrduct.map((items, index) => (
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
              No products to show right now. Check back soon.
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

export default LatestCollection