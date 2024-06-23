import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Customer from '../models/Customer.js';
import Admin from '../models/Admin.js';

const router = express.Router();

// Customer signup
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const CustomerExists = await Customer.findOne({ email });
    if (CustomerExists) {
      return res.status(400).json({ message: 'Customer already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const Customer = new Customer({ name, email, password: hashedPassword });
    await Customer.save();

    res.status(201).json({ message: 'Customer registered successfully' });
  } catch (error) {
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
    res.status(500).json({ message: 'Server error' });
  }
});

// Customer login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const Customer = await Customer.findOne({ email });
    if (!Customer) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, Customer.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ CustomerId: Customer._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, CustomerId: Customer._id });
  } catch (error) {
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

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, adminId: admin._id });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
