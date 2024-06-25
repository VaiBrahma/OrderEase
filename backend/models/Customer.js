import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  isAdmin: Boolean,
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;