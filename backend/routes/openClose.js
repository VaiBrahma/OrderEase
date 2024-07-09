import express from "express";
import Admin from "../models/Admin.js";
import getRestaurant from "../middleware/getRestaurant.js";

const router = express.Router();

router.post("/:adminId", getRestaurant, async (req, res) => {
  const restaurant = res.restaurant;
  const { isOpen } = req.body || false;
  res.restaurant.isOpen = !isOpen;

  try {
    await res.restaurant.save().then(() => {
      res.json({
        message: `${res.restaurant.title} is now ${!isOpen ? "open" : "closed"}`,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "error while closing/ opening restaurant",
      details: error.message,
    });
  }
});

export default router;
