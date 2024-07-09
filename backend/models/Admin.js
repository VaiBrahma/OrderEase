import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  isAdmin: Boolean,
  title: String,
  isOpen: {
    type: Boolean,
    default: false,
  },
  admin: String,
  password: "String",
  admin_handle: { type: String, unique: true },
  admin_mobile_no: { type: Number, unique: true },
  no_of_tables: Number,
  address: {
    local_address: String,
    city: String,
    state: String,
    pincode: Number,
    country: String,
  },
  restaurant_img: {
    type: String,
    default: "/images/restaurentCoverPhotos/restaurantbg.jpeg",
  },
  menu: [
    {
      title: String,
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
    },
  ],
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

const Admin = mongoose.model("admin", adminSchema);

export default Admin;
