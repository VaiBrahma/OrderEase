import express, { urlencoded } from 'express';
import connectDB from './db.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import cors from "cors";
import cookieParser from "cookie-parser";
import orderRoutes from './routes/order.js';
import getRestaurentsRoutes from './routes/getRestaurents.js';
import getMenuItemsRoutes from './routes/getMenuItems.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/data', getRestaurentsRoutes);
app.use('/api/menu', getMenuItemsRoutes);

export default app;
