import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  isAdmin: Boolean,
  name: String,
  email: { type: String, unique: true },
  password: String,
  reviews: [
    {
      user: String,
      rating: Number,
      date: String,
      comment: String,
      id: String,
    },
  ],
});

const Customer = mongoose.model("customer", customerSchema);

export default Customer;
