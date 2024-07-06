import express from "express";
import Admin from "../models/Admin.js";
import mongoose from "mongoose";
import getRestaurant from "../middleware/getRestaurant.js";

const router = express.Router();

router.get('/restaurants', async(req, res)=>{
    try {
        const restaurants = await Admin.find();
        // console.log(restaurants);
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/restaurants/:id', async(req, res)=>{
    try {
        const restaurant = await Admin.findById(req.params.id);
        if(!restaurant) res.status(404).json({"message": "can't find the requested restaurant"})
        res.status(200).json(restaurant)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/restaurants/:adminId', getRestaurant, async(req, res)=>{
    try {
        const {no_of_tables, address} = req.body;
        res.restaurant.no_of_tables = no_of_tables;
        res.restaurant.address = address;

        await res.restaurant.save()
        .then(()=>{
            res.json(res.restaurant);
        })
        .catch(err=> res.status(500).json({message: err.message}));
    } catch (error) {
        res.status(500).json({
            message: "error occurred while updating form1 data",
            details: error.message
        })
    }
})

export default router;
