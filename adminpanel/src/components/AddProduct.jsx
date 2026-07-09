import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../Routes/AdminRoutes.jsx";
import { useContext } from "react";
import { ProductContext } from "../context/addproduct.jsx";

function AddProduct() {
const {setProductAdded} = useContext(ProductContext)
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [price, setPrice] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);


  const [images, setImages] = useState([null, null, null, null, null]);


  function handleImage(e, index) {
    const file = e.target.files[0];

    setImages(prev => {
      const updated = [...prev];
      updated[index] = file;
      return updated;
    });
  }


  function handleSize(size) {
    if (sizes.includes(size)) {
      setSizes(prev => prev.filter(s => s !== size));
    } else {
      setSizes(prev => [...prev, size]);
    }
  }


  const sendProduct = async () => {
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      images.forEach(file => {
        if (file) {
          formData.append("images", file);
        }
      });

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        {
          headers: {
            token: token
          }
        }
      );
      setProductAdded(true)

      console.log("SUCCESS:", response.data);

    } catch (error) {
      console.log("ERROR:", error.response?.data);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-xl">

  {/* Title */}
  <h2 className="text-2xl font-semibold mb-6">Add Product</h2>

  {/* Upload */}
  <p className="mb-2 font-medium text-gray-700">Upload Images</p>

  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
    {[0, 1, 2, 3, 4].map((index) => (
      <label
        key={index}
        className="border-2 border-dashed rounded-lg h-28 flex items-center justify-center cursor-pointer hover:border-black transition"
      >
        <input
          type="file"
          hidden
          onChange={(e) => handleImage(e, index)}
        />

        {images[index] ? (
          <img
            src={URL.createObjectURL(images[index])}
            alt=""
            className="h-full w-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-gray-400 text-sm">Upload</span>
        )}
      </label>
    ))}
  </div>

  {/* Product Name */}
  <div className="mb-5">
    <p className="mb-1 text-gray-700">Product Name</p>
    <input
      type="text"
      placeholder="Enter product name"
      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      onChange={(e) => setName(e.target.value)}
    />
  </div>

  {/* Description */}
  <div className="mb-5">
    <p className="mb-1 text-gray-700">Product Description</p>
    <textarea
      placeholder="Write description..."
      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      rows={3}
      onChange={(e) => setDescription(e.target.value)}
    />
  </div>

  {/* Row */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

    <div>
      <p className="mb-1 text-gray-700">Category</p>
      <select
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Men</option>
        <option>Women</option>
        <option>Kids</option>
      </select>
    </div>

    <div>
      <p className="mb-1 text-gray-700">Sub Category</p>
      <select
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black"
        onChange={(e) => setSubCategory(e.target.value)}
      >
        <option>Topwear</option>
        <option>Bottomwear</option>
        <option>Winterwear</option>
      </select>
    </div>

    <div>
      <p className="mb-1 text-gray-700">Price</p>
      <input
        type="number"
        placeholder="₹"
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-black"
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>

  </div>

  {/* Sizes */}
  <div className="mb-6">
    <p className="mb-2 text-gray-700">Sizes</p>
    <div className="flex gap-2 flex-wrap">
      {["S", "M", "L", "XL", "XXL"].map((size) => (
        <button
          key={size}
          onClick={() => handleSize(size)}
          className={`px-4 py-1 rounded-lg border transition ${
            sizes.includes(size)
              ? "bg-black text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  </div>

  {/* Bestseller */}
  <div className="flex items-center gap-2 mb-6">
    <input
      type="checkbox"
      onChange={(e) => setBestseller(e.target.checked)}
    />
    <span className="text-gray-700">Add to Bestseller</span>
  </div>

  {/* Button */}
  <button
    onClick={sendProduct}
    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium"
  >
    ADD PRODUCT
  </button>

</div>
  );
}

export default AddProduct;