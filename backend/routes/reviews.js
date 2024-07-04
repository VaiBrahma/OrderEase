import express from "express";
import Admin from "../models/Admin.js";
import mongoose from "mongoose";
import Customer from "../models/Customer.js";

const router = express.Router();

router.post('/:adminId/addReview/:userId', getRestaurant, async (req, res)=>{
    const restaurant = res.restaurant;
    const customer = await Customer.findById(req.params.userId);  
    const {rating, comment} = req.body;
    const newComment = {
        user: customer.name,
        rating,
        date: new Date().toString(),
        comment,
    }
})

export default router;
