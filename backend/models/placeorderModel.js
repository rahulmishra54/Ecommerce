import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  items: [
    {
      productId: String,
      name: String,
      price: Number,
      image: String,
      size: String,
      quantity: Number,
    },
  ],

  // Delivery Info
  address: {
    firstName: String,
    lastName: String,
    email: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    phone: String,
  },

  paymentMethod: {
    type: String,
    enum: ["stripe", "razorpay", "cod"],
    default: "cod",
  },

  subtotal: Number,
  shipping: Number,
  totalAmount: Number,

  status: {
    type: String,
    default: "Pending",
  },
},{timestamps : true});

const OrderModel = mongoose.model("Order", orderSchema);
export default OrderModel;