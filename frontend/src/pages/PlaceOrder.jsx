import React, { useState, useEffect } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const REQUIRED_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "street",
  "city",
  "state",
  "zip",
  "country",
  "phone",
];

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [loadingCart, setLoadingCart] = useState(true);
  const [payment, setPayment] = useState("cod");
  const [formError, setFormError] = useState("");
  const [placing, setPlacing] = useState(false);

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
      try {
        setLoadingCart(true);
        const token = localStorage.getItem("token");

        const res = await axios.get(`${backendUrl}/api/cart/list`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCart(res.data.cart?.items || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingCart(false);
      }
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
    setFormError("");

    if (cart.length === 0) {
      setFormError("Your cart is empty.");
      return;
    }

    const missing = REQUIRED_FIELDS.filter((field) => !formData[field].trim());
    if (missing.length > 0) {
      setFormError("Please fill in all delivery information fields.");
      return;
    }

    setPlacing(true);
    console.log("Order Data:", {
      formData,
      cart,
      payment,
      total,
    });
    // TODO: replace with real POST to e.g. `${backendUrl}/api/order/place`
    setTimeout(() => setPlacing(false), 600);
  };

  const inputClass =
    "w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 outline-none focus:border-purple-600 transition-colors duration-200";

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 px-6 md:px-16 py-12 relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -right-32 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px]" />

      <div className="relative">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-wide mb-10">
          CHECKOUT
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* DELIVERY INFO */}
          <div className="flex-1">
            <div className="border border-neutral-800 rounded-2xl p-6 md:p-8 bg-white/[0.02]">
              <h2 className="text-base font-semibold mb-6 tracking-wide text-neutral-200">
                DELIVERY INFORMATION
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className={`${inputClass} mt-4`}
              />
              <input
                name="street"
                placeholder="Street"
                onChange={handleChange}
                className={`${inputClass} mt-4`}
              />

              <div className="grid grid-cols-2 gap-4 mt-4">
                <input
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  name="state"
                  placeholder="State"
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <input
                  name="zip"
                  placeholder="Zip Code"
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  name="country"
                  placeholder="Country"
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <input
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                className={`${inputClass} mt-4`}
              />
            </div>
          </div>

          {/* SUMMARY + PAYMENT */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="border border-neutral-800 rounded-2xl p-6 bg-white/[0.03] backdrop-blur-sm shadow-[0_0_40px_-15px_rgba(147,51,234,0.25)]">
              <h2 className="text-base font-semibold mb-5 tracking-wide">
                CART TOTALS
              </h2>

              {loadingCart ? (
                <div className="space-y-3 animate-pulse">
                  <div className="h-3 bg-neutral-800 rounded w-full" />
                  <div className="h-3 bg-neutral-800 rounded w-full" />
                  <div className="h-3 bg-neutral-800 rounded w-2/3" />
                </div>
              ) : (
                <>
                  {cart.length > 0 && (
                    <div className="space-y-2 mb-4 max-h-40 overflow-y-auto pr-1">
                      {cart.map((item) => (
                        <div
                          key={item._id}
                          className="flex justify-between text-xs text-neutral-400"
                        >
                          <span className="truncate pr-2">
                            {item.name} × {item.quantity}
                          </span>
                          <span className="text-neutral-300 flex-shrink-0">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-between border-b border-neutral-800 py-3 text-sm text-neutral-400">
                    <span>Subtotal</span>
                    <span className="text-neutral-200">${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between border-b border-neutral-800 py-3 text-sm text-neutral-400">
                    <span>Shipping Fee</span>
                    <span className="text-neutral-200">${shipping.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between py-4 font-semibold text-base">
                    <span>Total</span>
                    <span className="text-purple-400">${total.toFixed(2)}</span>
                  </div>
                </>
              )}
            </div>

            <div className="border border-neutral-800 rounded-2xl p-6 bg-white/[0.03] backdrop-blur-sm">
              <h2 className="text-sm font-semibold mb-4 tracking-wide text-neutral-200">
                PAYMENT METHOD
              </h2>

              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => setPayment("stripe")}
                  className={`border rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                    payment === "stripe"
                      ? "bg-purple-600/20 border-purple-500 text-purple-300 shadow-[0_0_15px_-5px_rgba(147,51,234,0.6)]"
                      : "border-neutral-800 text-neutral-400 hover:border-neutral-700"
                  }`}
                >
                  Stripe
                </button>

                <button
                  onClick={() => setPayment("razorpay")}
                  className={`border rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                    payment === "razorpay"
                      ? "bg-purple-600/20 border-purple-500 text-purple-300 shadow-[0_0_15px_-5px_rgba(147,51,234,0.6)]"
                      : "border-neutral-800 text-neutral-400 hover:border-neutral-700"
                  }`}
                >
                  Razorpay
                </button>

                <button
                  onClick={() => setPayment("cod")}
                  className={`border rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                    payment === "cod"
                      ? "bg-purple-600/20 border-purple-500 text-purple-300 shadow-[0_0_15px_-5px_rgba(147,51,234,0.6)]"
                      : "border-neutral-800 text-neutral-400 hover:border-neutral-700"
                  }`}
                >
                  Cash on Delivery
                </button>
              </div>

              {formError && (
                <p className="text-red-400 text-xs mt-4 bg-red-500/10 border border-red-500/20 rounded-lg py-2 px-3">
                  {formError}
                </p>
              )}

              <button
                onClick={placeOrder}
                disabled={placing || loadingCart}
                className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3.5 mt-6 rounded-full font-medium tracking-wide transition-all duration-300 hover:bg-purple-500 shadow-[0_0_20px_-5px_rgba(147,51,234,0.6)] hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.9)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
              >
                {placing ? "Placing order..." : "PLACE ORDER"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;