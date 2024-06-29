import express from "express";
import Admin from "../models/Admin.js";
import mongoose from "mongoose";

const router = express.Router();

router.get('/restaurents', async(req, res)=>{
    try {
        const restaurants = await Admin.find();
        console.log(restaurants);
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/restaurents/:id', async(req, res)=>{
    try {
        const restaurantId = new mongoose.Types.ObjectId(req.params.id);
        // console.log(req.params.id)
        const restaurants = await Admin.find(restaurantId);
        // console.log(restaurants);
        res.json(restaurants[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;
