import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/showContext'
import { Link } from 'react-router-dom'

const ProductItems = ({ id, image, name, price }) => {
  const { currency, addToCart } = useContext(ShopContext)

  const [wishlisted, setWishlisted] = useState(false)
  const [added, setAdded] = useState(false)

  const handleWishlist = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setWishlisted((prev) => !prev)
  }

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (typeof addToCart === 'function') {
      addToCart(id)
      setAdded(true)
      setTimeout(() => setAdded(false), 1500)
    }
  }

  return (
    <Link className="group block text-gray-300 cursor-pointer" to={`/product/${id}`}>

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
        <img
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          src={image[0]}
          alt={name}
        />

        {/* gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* wishlist heart */}
        <button
          onClick={handleWishlist}
          aria-label="Toggle wishlist"
          className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 hover:scale-110 active:scale-90 transition-transform duration-200"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill={wishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            className={`transition-colors duration-200 ${wishlisted ? "text-purple-500" : "text-white"}`}
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
        </button>

        {/* Quick add button — only rendered if context provides addToCart */}
        {typeof addToCart === 'function' && (
          <button
            onClick={handleQuickAdd}
            className="absolute left-3 right-3 bottom-3 translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 active:scale-95"
          >
            {added ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Added
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Quick Add
              </>
            )}
          </button>
        )}
      </div>

      {/* Info */}
      <p className="pt-3 pb-1 text-sm text-gray-300 group-hover:text-white transition-colors duration-200 truncate">
        {name}
      </p>
      <p className="text-sm font-semibold text-white">
        {currency}{price}
      </p>

    </Link>
  )
}

export default ProductItems