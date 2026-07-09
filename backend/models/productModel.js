import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    image: [
      {
        type: String, // Cloudinary URLs
        required: true,
      },
    ],

    category: { 
      type: String,
      required: true,
    },

    subCategory: {
      type: String,
      required: true,
    },

    sizes: [
      {
        type: String, // e.g. S, M, L, XL
      },
    ],

    bestseller: {
      type: Boolean,
      default: false,
    },

   
  

  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("product", productSchema);

export default productModel;