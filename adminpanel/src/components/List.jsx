import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { backendUrl } from "../Routes/AdminRoutes.jsx";
import { ProductContext } from "../context/addproduct.jsx";

function List() {
  const { productAdded } = useContext(ProductContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const res = await axios.get(backendUrl + "/api/product/list");
      setProducts(res.data.products || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [productAdded]);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token")
      await axios.delete(`${backendUrl}/api/product/remove/${id}`,{
          headers: {
            token: token
          }
        });
      setProducts((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-xl">
      
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        All Products
      </h2>

      {/* Header (hidden on small screens) */}
      <div className="hidden sm:grid grid-cols-5 bg-gray-100 px-4 py-3 text-sm font-medium rounded-t-lg">
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p className="text-center">Action</p>
      </div>

      {/* List */}
      {products.length === 0 ? (
        <p className="text-center py-6">No products found</p>
      ) : (
        products.map((item) => (
          <div
            key={item._id}
            className="
              flex flex-col sm:grid sm:grid-cols-5 
              gap-3 sm:gap-0 
              px-4 py-4 border-b 
              hover:bg-gray-50 transition
            "
          >
            {/* Image */}
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                className="w-14 h-14 sm:w-12 sm:h-12 object-cover rounded-md"
              />
              <div className="sm:hidden">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </div>

            {/* Name (hidden on mobile) */}
            <p className="hidden sm:block font-medium">{item.name}</p>

            {/* Category (hidden on mobile) */}
            <p className="hidden sm:block text-gray-600">
              {item.category}
            </p>

            {/* Price */}
            <p className="font-medium">{item.price}</p>

            {/* Action */}
            <div className="flex justify-end sm:justify-center">
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-100 text-red-600 px-3 py-1 rounded-md hover:bg-red-200 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default List;