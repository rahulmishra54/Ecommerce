import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../../../adminpanel/src/Routes/AdminRoutes";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);


  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${backendUrl}/api/cart/list`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCart(res.data.cart.items);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  
  const removeItem = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.delete(
        `${backendUrl}/api/cart/remove/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCart(res.data.cart.items);

    } catch (err) {
      console.log(err);
    }
  };

 
  const subtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const shipping = cart.length > 0 ? 10 : 0;
  const total = subtotal + shipping;


  return (
    <div className="px-6 md:px-16 py-10">
      <h1 className="text-xl font-semibold mb-8">YOUR CART</h1>

      <div className="flex flex-col lg:flex-row gap-10">


        <div className="flex-1">
          {cart.length === 0 ? (
            <p className="text-gray-500">No items in cart</p>
          ) : (
            cart.map((item) => (
              <div
                key={item._id}
                className="border-b py-4 flex justify-between items-center"
              >
                <div className="flex gap-4">

             
                  <Link to={`/product/${item.productId}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover border"
                    />
                  </Link>

          
                  <div>
                    <Link to={`/products/${item.productId}`}>
                      <p className="font-medium cursor-pointer">
                        {item.name}
                      </p>
                    </Link>

                    <p className="text-sm text-gray-500">
                      Size: {item.size}
                    </p>

                    <p className="text-sm">
                      Qty: {item.quantity}
                    </p>

                  
                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-red-500 text-sm mt-2 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>

               
                <p className="font-medium text-lg">
                  ${item.price * item.quantity}
                </p>
              </div>
            ))
          )}
        </div>

    
        <div className="w-full lg:w-1/3 border p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">CART TOTALS</h2>

          <div className="flex justify-between border-b py-2 text-sm">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between border-b py-2 text-sm">
            <span>Shipping Fee</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-3 font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link to="/placeorder">
            <button className="w-full bg-black text-white py-3 mt-4 hover:bg-gray-800">
              PROCEED TO CHECKOUT
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Cart;