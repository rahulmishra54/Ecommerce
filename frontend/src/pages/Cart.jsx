import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removingId, setRemovingId] = useState(null);
  const [toast, setToast] = useState(null);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await axios.get(`${backendUrl}/api/cart/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart(res.data.cart?.items || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  };

  const removeItem = async (id) => {
    try {
      setRemovingId(id);
      const token = localStorage.getItem("token");

      const res = await axios.delete(`${backendUrl}/api/cart/remove/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart(res.data.cart?.items || []);
      showToast("Item removed from cart");
    } catch (err) {
      console.log(err);
      showToast("Couldn't remove item — try again");
    } finally {
      setRemovingId(null);
    }
  };

  const subtotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const shipping = cart.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 px-6 md:px-16 py-12 relative overflow-hidden">
      {/* ambient background glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-32 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px]" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
            YOUR CART
          </h1>
          {!loading && cart.length > 0 && (
            <span className="text-xs text-neutral-500 border border-neutral-800 rounded-full px-2.5 py-1">
              {cart.length} {cart.length === 1 ? "item" : "items"}
            </span>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* CART ITEMS */}
          <div className="flex-1">
            {loading ? (
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="border border-neutral-800 rounded-xl p-4 flex gap-4 animate-pulse"
                  >
                    <div className="w-20 h-20 rounded-lg bg-neutral-800" />
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-4 bg-neutral-800 rounded w-1/2" />
                      <div className="h-3 bg-neutral-800 rounded w-1/4" />
                      <div className="h-3 bg-neutral-800 rounded w-1/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center border border-neutral-800 rounded-2xl py-20 px-6 bg-white/[0.02]">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-5">
                  <svg
                    className="w-7 h-7 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.94-4.706 2.436-7.184.078-.393-.203-.766-.703-.766H5.605m1.895 7.95L4.5 6.272M7.5 14.25L5.605 6.272M9.75 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm7.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
                <p className="text-neutral-300 font-medium mb-1">
                  Your cart is empty
                </p>
                <p className="text-neutral-500 text-sm mb-6">
                  Items you add will show up here.
                </p>
                <Link to="/collection">
                  <button className="bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-[0_0_20px_-5px_rgba(147,51,234,0.6)] hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.9)]">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className={`group border border-neutral-800 hover:border-purple-700/50 rounded-xl p-4 flex justify-between items-center bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 ${
                      removingId === item._id
                        ? "opacity-40 scale-[0.98]"
                        : "opacity-100"
                    }`}
                  >
                    <div className="flex gap-4">
                      <Link
                        to={`/product/${item.productId}`}
                        className="overflow-hidden rounded-lg border border-neutral-800 w-20 h-20 flex-shrink-0"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </Link>

                      <div>
                        <Link to={`/product/${item.productId}`}>
                          <p className="font-medium cursor-pointer hover:text-purple-400 transition-colors duration-200">
                            {item.name}
                          </p>
                        </Link>

                        <p className="text-sm text-neutral-500 mt-1">
                          Size: {item.size}
                        </p>

                        <p className="text-sm text-neutral-500">
                          Qty: {item.quantity}
                        </p>

                        <button
                          onClick={() => removeItem(item._id)}
                          disabled={removingId === item._id}
                          className="flex items-center gap-1 text-neutral-500 hover:text-red-400 text-xs mt-3 transition-colors duration-200 disabled:cursor-not-allowed"
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          {removingId === item._id ? "Removing..." : "Remove"}
                        </button>
                      </div>
                    </div>

                    <p className="font-medium text-lg text-neutral-100">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CART TOTALS */}
          <div className="w-full lg:w-1/3 h-fit">
            <div className="border border-neutral-800 rounded-2xl p-6 bg-white/[0.03] backdrop-blur-sm shadow-[0_0_40px_-15px_rgba(147,51,234,0.25)]">
              <h2 className="text-base font-semibold mb-5 tracking-wide">
                CART TOTALS
              </h2>

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

              <Link to="/placeorder">
                <button
                  disabled={cart.length === 0}
                  className="w-full bg-purple-600 text-white py-3.5 mt-2 rounded-full font-medium tracking-wide transition-all duration-300 hover:bg-purple-500 shadow-[0_0_20px_-5px_rgba(147,51,234,0.6)] hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.9)] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  PROCEED TO CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900 border border-purple-700/50 text-neutral-100 text-sm px-5 py-3 rounded-full shadow-[0_0_30px_-5px_rgba(147,51,234,0.5)] animate-[fadeIn_0.3s_ease-out]">
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
};

export default Cart;