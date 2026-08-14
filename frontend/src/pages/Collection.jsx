import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const CATEGORIES = ["Men", "Women", "Kids"];
const TYPES = ["Topwear", "Bottomwear", "Winterwear"];

const Collection = () => {
  const [productlist, setProductlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await axios.get(backendUrl + "/api/product/list");

      console.log(response.data);

      if (response.data.products) {
        setProductlist(response.data.products);
      } else {
        setProductlist(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleFilter = (value, list, setList) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  const displayedProducts = useMemo(() => {
    let result = [...productlist];

    if (categoryFilter.length > 0) {
      result = result.filter((item) => categoryFilter.includes(item.category));
    }
    if (typeFilter.length > 0) {
      result = result.filter((item) => typeFilter.includes(item.subCategory));
    }

    if (sortOption === "low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [productlist, categoryFilter, typeFilter, sortOption]);

  const activeFilterCount = categoryFilter.length + typeFilter.length;

  const FilterPanel = () => (
    <>
      <div className="border border-neutral-800 rounded-xl p-4 mb-6 bg-white/[0.02]">
        <p className="font-medium mb-3 text-sm tracking-wide text-neutral-200">
          CATEGORIES
        </p>
        <div className="space-y-2.5 text-sm">
          {CATEGORIES.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2.5 cursor-pointer text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
            >
              <input
                type="checkbox"
                checked={categoryFilter.includes(cat)}
                onChange={() => toggleFilter(cat, categoryFilter, setCategoryFilter)}
                className="w-4 h-4 rounded accent-purple-600 bg-neutral-800 border-neutral-700"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div className="border border-neutral-800 rounded-xl p-4 bg-white/[0.02]">
        <p className="font-medium mb-3 text-sm tracking-wide text-neutral-200">
          TYPE
        </p>
        <div className="space-y-2.5 text-sm">
          {TYPES.map((type) => (
            <label
              key={type}
              className="flex items-center gap-2.5 cursor-pointer text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
            >
              <input
                type="checkbox"
                checked={typeFilter.includes(type)}
                onChange={() => toggleFilter(type, typeFilter, setTypeFilter)}
                className="w-4 h-4 rounded accent-purple-600 bg-neutral-800 border-neutral-700"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={() => {
            setCategoryFilter([]);
            setTypeFilter([]);
          }}
          className="text-xs text-purple-400 hover:text-purple-300 mt-4 transition-colors duration-200"
        >
          Clear all filters
        </button>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 px-6 md:px-16 py-10 relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-0 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-32 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px]" />

      <div className="relative">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
              ALL COLLECTIONS
            </h1>
            {!loading && (
              <p className="text-xs text-neutral-500 mt-1">
                {displayedProducts.length}{" "}
                {displayedProducts.length === 1 ? "product" : "products"}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 border border-neutral-800 px-3 py-2 rounded-full text-sm text-neutral-300 hover:border-purple-700/50 transition-colors duration-200"
            >
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-purple-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 text-sm text-neutral-300 focus:outline-none focus:border-purple-600 transition-colors duration-200 cursor-pointer"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* DESKTOP FILTERS */}
          <div className="w-64 hidden md:block flex-shrink-0">
            <h2 className="font-semibold mb-4 text-sm tracking-wider text-neutral-400">
              FILTERS
            </h2>
            <FilterPanel />
          </div>

          {/* PRODUCT GRID */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="w-full h-64 rounded-xl bg-neutral-800 mb-3" />
                    <div className="h-3 bg-neutral-800 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-neutral-800 rounded w-1/3" />
                  </div>
                ))}
              </div>
            ) : displayedProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center border border-neutral-800 rounded-2xl py-24 px-6 bg-white/[0.02]">
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
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </div>
                <p className="text-neutral-300 font-medium mb-1">
                  No products found
                </p>
                <p className="text-neutral-500 text-sm">
                  Try adjusting your filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayedProducts.map((item) => (
                  <div key={item._id} className="group relative">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(item._id);
                      }}
                      className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-transform duration-200 hover:scale-110"
                      aria-label="Toggle wishlist"
                    >
                      <svg
                        className={`w-4 h-4 transition-colors duration-200 ${
                          wishlist.includes(item._id)
                            ? "fill-purple-500 text-purple-500"
                            : "fill-none text-white"
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

                    <Link to={`/product/${item._id}`}>
                      <div className="overflow-hidden rounded-xl border border-neutral-800 group-hover:border-purple-700/50 mb-3 transition-colors duration-300">
                        <img
                          src={item.image?.[0]}
                          alt={item.name}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <p className="text-sm text-neutral-300 group-hover:text-purple-400 transition-colors duration-200 truncate">
                        {item.name}
                      </p>
                      <p className="font-semibold text-neutral-100">
                        ${item.price}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE FILTER DRAWER */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-[#0a0a0c] border-l border-neutral-800 p-6 overflow-y-auto animate-[slideIn_0.3s_ease-out]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-sm tracking-wider text-neutral-400">
                FILTERS
              </h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-neutral-500 hover:text-neutral-200 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
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
              </button>
            </div>
            <FilterPanel />
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Collection;