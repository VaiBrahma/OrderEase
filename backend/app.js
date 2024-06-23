import express from 'express';
import connectDB from './db.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

export default app;
