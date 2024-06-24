import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import Customer from '../models/Customer.js';

const router = express.Router();

// Customer signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const customerExists = await Customer.findOne({ email });
    if (customerExists) {
      return res.status(400).json({ message: 'Customer already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = new Customer({ name, email, password: hashedPassword });
    await newCustomer.save();

    res.status(201).json({ message: 'Customer registered successfully' });
  } catch (error) {
    console.log('error aayi hain mere bhai []=[=======>',error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin signup
router.post('/admin/signup', async (req, res) => {
  const { title, admin, admin_handle, admin_mobile_no, password } = req.body;

  try {
    const adminExists = await Admin.findOne({ admin_handle });
    if (adminExists) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      title,
      admin,
      admin_handle,
      admin_mobile_no,
      password: hashedPassword,
    });
    await newAdmin.save();

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    console.log('error aayi hain mere bhai []=[=======>',error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Customer login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({ email });
    if (!customer) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = bcrypt.compare(password, customer.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ customerId: customer._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, customerId: customer._id });
  } catch (error) {
    console.log('error aayi hain mere bhai []=[=======>',error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin login
router.post('/admin/login', async (req, res) => {
  const { admin_handle, password } = req.body;

  try {
    const admin = await Admin.findOne({ admin_handle });
    if (!admin) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, adminId: admin._id });
  } catch (error) {
    console.log('error aayi hain mere bhai []=[=======>',error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
