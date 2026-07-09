import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Collection = () => {

  const [productlist, setProductlist] = useState([]);

  async function fetchProducts() {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      console.log(response.data);

    
      if (response.data.products) {
        setProductlist(response.data.products);
      } else {
        setProductlist(response.data);
      }

    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="px-6 py-8">

    
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold tracking-wide">
          ALL COLLECTIONS
        </h1>

        <select className="border px-3 py-2 text-sm">
          <option>Sort by: Relevant</option>
          <option>Price: Low to High</option>
        </select>
      </div>

      <div className="flex gap-8">

   
        <div className="w-64 hidden md:block">

          <h2 className="font-semibold mb-4">FILTERS</h2>

          <div className="border p-4 mb-6">
            <p className="font-medium mb-2">CATEGORIES</p>
            <div className="space-y-2 text-sm">
              <label className="block">
                <input type="checkbox" /> Men
              </label>
              <label className="block">
                <input type="checkbox" /> Women
              </label>
              <label className="block">
                <input type="checkbox" /> Kids
              </label>
            </div>
          </div>

          <div className="border p-4">
            <p className="font-medium mb-2">TYPE</p>
            <div className="space-y-2 text-sm">
              <label className="block">
                <input type="checkbox" /> Topwear
              </label>
              <label className="block">
                <input type="checkbox" /> Bottomwear
              </label>
              <label className="block">
                <input type="checkbox" /> Winterwear
              </label>
            </div>
          </div>
        </div>

        
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productlist.map((item) => (
            <Link to={`/product/${item._id}`} key={item._id}>
              <div>
                <img
                  src={item.image[0]} 
                  alt={item.name}
                  className="w-full h-64 object-cover mb-2"
                />
                <p className="text-sm">{item.name}</p>
                <p className="font-semibold">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Collection;