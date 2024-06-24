import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import Customer from "../models/Customer.js";

const router = express.Router();

// Customer signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const customerExists = await Customer.findOne({ email });
    if (customerExists) {
      return res.status(400).json({ message: "Customer already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = new Customer({ name, email, password: hashedPassword, isAdmin: false, });
    await newCustomer.save();

    res.status(201).json({ message: "Customer registered successfully" });
  } catch (error) {
    console.log("error aayi hain mere bhai []=[=======>", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Admin signup
router.post("/admin/signup", async (req, res) => {
  const { title, admin, admin_handle, admin_mobile_no, password } = req.body;

  try {
    const adminExists = await Admin.findOne({ admin_handle });
    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      title,
      admin,
      admin_handle,
      admin_mobile_no,
      password: hashedPassword,
      isAdmin: true,
    });
    await newAdmin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.log("error aayi hain mere bhai []=[=======>", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Customer login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Try to find the user as a customer first
    const user = await Customer.findOne({ email }) || await Admin.findOne({ admin_handle: email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Determine user type
    const tokenPayload = user instanceof Customer ? { customerId: user._id } : { adminId: user._id };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with token and user ID
    res.json({ token, userId: user._id, isAdmin: user instanceof Customer ? false : true });
  } catch (error) {
    console.log('Error occurred during login:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
