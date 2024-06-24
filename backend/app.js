import express, { urlencoded } from 'express';
import connectDB from './db.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);

export default app;
