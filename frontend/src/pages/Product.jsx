import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/showContext.jsx";
import axios from "axios";
import React from "react";

function Product() {
  const { id } = useParams();
  const { currency, backendUrl } = useContext(ShopContext);

  const [singleProduct, setSingleProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [toast, setToast] = useState(null);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(`${backendUrl}/api/product/single/${id}`);
        setSingleProduct(res.data.product);
        setSelectedImage(0);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [id, backendUrl]);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = async () => {
    if (!singleProduct) return;

    if (!selectedSize) {
      showToast("Please select a size");
      return;
    }

    const cartItem = {
      productId: singleProduct._id,
      name: singleProduct.name,
      price: singleProduct.price,
      image: singleProduct.image?.[0],
      size: selectedSize,
    };

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.post(`${backendUrl}/api/cart/add`, cartItem, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Cart Response:", res.data);
      showToast("Added to cart");
    } catch (error) {
      console.log(error);
      showToast("Couldn't add item — try again");
    } finally {
      setLoading(false);
    }
  };

  if (!singleProduct) {
    return (
      <div className="min-h-screen bg-[#0a0a0c] px-6 md:px-16 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 animate-pulse">
          <div className="flex gap-4">
            <div className="flex md:flex-col gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-16 h-16 rounded-lg bg-neutral-800" />
              ))}
            </div>
            <div className="w-72 md:w-96 h-96 rounded-xl bg-neutral-800" />
          </div>
          <div className="flex-1 space-y-4 pt-2">
            <div className="h-6 bg-neutral-800 rounded w-2/3" />
            <div className="h-6 bg-neutral-800 rounded w-1/4" />
            <div className="h-4 bg-neutral-800 rounded w-full" />
            <div className="h-4 bg-neutral-800 rounded w-5/6" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 px-6 md:px-16 py-10 relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-32 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row gap-10">
          {/* IMAGE GALLERY */}
          <div className="flex gap-4">
            <div className="flex md:flex-col gap-3">
              {singleProduct.image?.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border transition-colors duration-200 ${
                    selectedImage === i
                      ? "border-purple-500 ring-2 ring-purple-500/40"
                      : "border-neutral-800 hover:border-neutral-600"
                  }`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt={`${singleProduct.name} thumbnail ${i + 1}`}
                  />
                </button>
              ))}
            </div>

            <div className="w-72 md:w-96 h-72 md:h-96 rounded-xl overflow-hidden border border-neutral-800">
              <img
                src={singleProduct.image?.[selectedImage]}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                alt={singleProduct.name}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
                {singleProduct.name}
              </h1>

              <button
                onClick={() => setWishlisted((w) => !w)}
                className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center flex-shrink-0 hover:border-purple-700/50 transition-colors duration-200"
                aria-label="Toggle wishlist"
              >
                <svg
                  className={`w-4.5 h-4.5 transition-colors duration-200 ${
                    wishlisted ? "fill-purple-500 text-purple-500" : "fill-none text-neutral-400"
                  }`}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>

            <h2 className="text-2xl font-bold mt-4 text-purple-400">
              {currency}
              {singleProduct.price}
            </h2>

            <p className="text-neutral-400 mt-3 leading-relaxed">
              {singleProduct.description || "No description available"}
            </p>

            {/* SIZE SELECTION */}
            <div className="mt-8">
              <h3 className="mb-3 font-medium text-sm tracking-wide text-neutral-300">
                Select Size
              </h3>

              <div className="flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`w-12 h-12 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-purple-600 border-purple-600 text-white shadow-[0_0_15px_-5px_rgba(147,51,234,0.7)]"
                        : "border-neutral-800 text-neutral-300 hover:border-purple-700/50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* ADD TO CART BUTTON */}
            <button
              onClick={handleAddToCart}
              disabled={loading}
              className="flex items-center justify-center gap-2 mt-8 bg-purple-600 text-white px-8 py-3.5 rounded-full font-medium tracking-wide transition-all duration-300 hover:bg-purple-500 shadow-[0_0_20px_-5px_rgba(147,51,234,0.6)] hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.9)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
            >
              {loading && (
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {loading ? "Adding..." : "ADD TO CART"}
            </button>

            <div className="mt-8 text-sm text-neutral-500 space-y-2">
              <p className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-500" />
                100% Original product.
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-500" />
                Cash on delivery is available.
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-500" />
                Easy return within 7 days.
              </p>
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-14 border-t border-neutral-800 pt-8">
          <h3 className="font-semibold mb-3 text-sm tracking-wide text-neutral-300">
            Description
          </h3>
          <p className="text-neutral-400 leading-relaxed max-w-3xl">
            {singleProduct.description}
          </p>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900 border border-purple-700/50 text-neutral-100 text-sm px-5 py-3 rounded-full shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)] animate-[fadeIn_0.3s_ease-out] z-50">
          {toast}
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </div>
  );
}

export default Product;