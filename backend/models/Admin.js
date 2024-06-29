import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  isAdmin: Boolean,
  title: String,
  admin: String,
  password: "String",
  admin_handle: { type: String, unique: true },
  admin_mobile_no: { type: Number, unique: true },
  no_of_tables: Number,
  address: {
    street: String,
    city: String,
    state: String,
    postal_code: String,
    country: String,
  },
  restaurant_img: String,
  opening_hours: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String,
  },
  contact_info: {
    phone: String,
    email: String,
    website: String,
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
        },
      ],
    },
  ],
  reviews: [
    {
      user: String,
      rating: Number,
      comment: String,
    },
  ],
  services: [String],
});

const Admin = mongoose.model('admin', adminSchema);

export default Admin;
