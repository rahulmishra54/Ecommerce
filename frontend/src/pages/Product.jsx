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
  const [loading, setLoading] = useState(false);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(
          `${backendUrl}/api/product/single/${id}`
        );
        setSingleProduct(res.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [id, backendUrl]);

 
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

 
  const handleAddToCart = async () => {
    if (!singleProduct) return;

    if (!selectedSize) {
      alert("Select size");
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

      const res = await axios.post(
        `${backendUrl}/api/cart/add`,
        cartItem,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Cart Response:", res.data);
      alert("Item added to cart");

    } catch (error) {
      console.log(error);
      alert("Error adding to cart");
    } finally {
      setLoading(false);
    }
  };



  if (!singleProduct) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">


        <div className="flex gap-4">
          <div className="flex md:flex-col gap-2">
            {singleProduct.image?.map((img, i) => (
              <img key={i} src={img} className="w-16 h-16 border" />
            ))}
          </div>

          <img
            src={singleProduct.image?.[0]}
            className="w-72 md:w-96 object-cover"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">
            {singleProduct.name}
          </h1>

          <h2 className="text-2xl font-bold mt-4">
            {currency}{singleProduct.price}
          </h2>

          <p className="text-gray-600 mt-3">
            {singleProduct.description || "No description available"}
          </p>

          {/* SIZE SELECTION */}
          <div className="mt-6">
            <h3 className="mb-2 font-medium">Select Size</h3>

            <div className="flex gap-2 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`px-4 py-2 border ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : ""
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
            className="mt-6 bg-black text-white px-6 py-3 disabled:opacity-50"
          >
            {loading ? "Adding..." : "ADD TO CART"}
          </button>

          <div className="mt-6 text-sm text-gray-500 space-y-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available.</p>
            <p>Easy return within 7 days.</p>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-10 border-t pt-6">
        <h3 className="font-semibold mb-2">Description</h3>
        <p className="text-gray-600">
          {singleProduct.description}
        </p>
      </div>
    </div>
  );
}

export default Product;