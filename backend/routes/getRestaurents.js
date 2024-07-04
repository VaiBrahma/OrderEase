import express from "express";
import Admin from "../models/Admin.js";
import mongoose from "mongoose";

const router = express.Router();

router.get('/restaurents', async(req, res)=>{
    try {
        const restaurants = await Admin.find();
        // console.log(restaurants);
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/restaurents/:id', async(req, res)=>{
    try {
        const restaurant = await Admin.findById(req.params.id);
        if(!restaurant) res.status(404).json({"message": "can't find the requested restaurant"})
        res.status(200).json(restaurant)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;
