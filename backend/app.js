import express, { urlencoded } from "express";
import connectDB from "./db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import orderRoutes from "./routes/order.js";
import getRestaurantsRoutes from "./routes/getRestaurants.js";
import getMenuItemsRoutes from "./routes/getMenuItems.js";
import getReviewRoutes from "./routes/reviews.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/data", getRestaurantsRoutes);
app.use("/api/menu", getMenuItemsRoutes);
app.use("/api/review", getReviewRoutes);

export default app;
