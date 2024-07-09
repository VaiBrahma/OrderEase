import mongoose from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      name: String,
      price: Number,
      vegetarian: Boolean,
      isAvailable: Boolean,
      image_src: String,
      id: String,
      category: String,
    },
  ],

  paymentMethod: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  cookingTime: {
    type: Number,
  },
  orderTime: {
    type: Date,
    default: Date.now,
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
