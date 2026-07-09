import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  name: String, 
  price: Number, 
  image: String,

  quantity: {
    type: Number,
    required: true,
    default: 1
  }
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true 
  },

  items: [cartItemSchema],

  totalPrice: {
    type: Number,
    default: 0
  }

}, { timestamps: true });

const CartModel = mongoose.model("Cart", cartSchema);

export default CartModel;