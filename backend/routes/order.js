import express from "express";
import Order from "../models/orders.js";

const router = express.Router();
// Create a new order
router.post("/create", async (req, res) => {
  try {
    const {
      userId,
      items,
      paymentMethod,
      cookingTime,
      orderTime,
      totalAmount,
      deliveryAddress,
    } = req.body;
    console.log(userId);
    console.log(items);

    const newOrder = new Order({
      userId: userId,
      items: items,
      paymentMethod: paymentMethod,
      cookingTime: cookingTime,
      totalAmount: totalAmount,
      orderTime: orderTime,
      deliveryAddress: deliveryAddress,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find orders by userId
    const orders = await Order.find({ userId: userId });

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
