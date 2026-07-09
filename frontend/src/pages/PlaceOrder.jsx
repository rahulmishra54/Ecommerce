import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../../../adminpanel/src/Routes/AdminRoutes";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [payment, setPayment] = useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  
  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${backendUrl}/api/cart/list`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCart(res.data.cart.items);
    };

    fetchCart();
  }, []);

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  
  const placeOrder = () => {
    console.log("Order Data:", {
      formData,
      cart,
      payment,
      total,
    });
  };

  return (
    <div className="px-6 md:px-16 py-10">
      <div className="flex flex-col lg:flex-row gap-10">

    
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-6">
            DELIVERY INFORMATION
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <input name="firstName" placeholder="First Name" onChange={handleChange} className="border p-2" />
            <input name="lastName" placeholder="Last Name" onChange={handleChange} className="border p-2" />
          </div>

          <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full mt-4" />
          <input name="street" placeholder="Street" onChange={handleChange} className="border p-2 w-full mt-4" />

          <div className="grid grid-cols-2 gap-4 mt-4">
            <input name="city" placeholder="City" onChange={handleChange} className="border p-2" />
            <input name="state" placeholder="State" onChange={handleChange} className="border p-2" />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <input name="zip" placeholder="Zip Code" onChange={handleChange} className="border p-2" />
            <input name="country" placeholder="Country" onChange={handleChange} className="border p-2" />
          </div>

          <input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 w-full mt-4" />
        </div>

        <div className="w-full lg:w-1/3">

     
          <div className="border p-6">
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
          </div>

       
          <div className="mt-6 border p-6">
            <h2 className="text-sm font-semibold mb-4">
              PAYMENT METHOD
            </h2>

            <div className="flex gap-4">

              <button
                onClick={() => setPayment("stripe")}
                className={`border px-4 py-2 ${
                  payment === "stripe" ? "bg-gray-200" : ""
                }`}
              >
                Stripe
              </button>

              <button
                onClick={() => setPayment("razorpay")}
                className={`border px-4 py-2 ${
                  payment === "razorpay" ? "bg-gray-200" : ""
                }`}
              >
                Razorpay
              </button>

              <button
                onClick={() => setPayment("cod")}
                className={`border px-4 py-2 ${
                  payment === "cod" ? "bg-green-200" : ""
                }`}
              >
                Cash on Delivery
              </button>
            </div>

            <button
              onClick={placeOrder}
              className="w-full bg-black text-white py-3 mt-6"
            >
              PLACE ORDER
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;