import express from "express";
import Customer from "../models/Customer.js";
import getRestaurant from "../middleware/getRestaurant.js";

const router = express.Router();

router.delete('/:adminId/clearReviews/:userId', getRestaurant, async (req, res)=>{

    try {
        const restaurant = res.restaurant;        
        const customer = await Customer.findById(req.params.userId); 
        
        restaurant.reviews = [];
        customer.reviews = [];

        await restaurant.save();
        await customer.save();
        res.json({
            "message": "reviews are cleared!",
            "reviews1": restaurant.reviews,
            "reviews2": customer.reviews,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
})

router.get('/:adminId/getReviews/:userId', getRestaurant, async (req, res)=>{

    try {
        const restaurant = res.restaurant;

        const {userId} = req.params;
        
        if(userId === "all"){
            return res.json(restaurant.reviews);
        }
        const customer = await Customer.findById(req.params.userId);  
        res.json(customer.reviews);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
})

router.post('/:adminId/addReview/:userId', getRestaurant, async (req, res)=>{
       
    try {
        const restaurant = res.restaurant;
        const customer = await Customer.findById(req.params.userId); 
        const {rating, comment, id} = req.body;
        const newComment = {
            user: customer.name,
            rating,
            date: new Date().toString(),
            id,
            comment,
        } 
        restaurant.reviews.push(newComment);
        customer.reviews.push(newComment);

        await restaurant.save();
        await customer.save();

        res.json({
            "message" : "Review Successfully Added!",
            "review" : newComment
        })
    } 
    catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
})

router.delete('/:adminId/deleteReview/:userId', getRestaurant, async (req, res)=>{
       
    try {
        const restaurant = res.restaurant;
        const customer = await Customer.findById(req.params.userId); 
        const {id} = req.body;

        let reviewIndex = restaurant.reviews.findIndex(review => review.id == id);
        if (reviewIndex === -1) {
            return res.status(404).json({ error: 'Review not found in restaurant' });
        }
        restaurant.reviews.splice(reviewIndex, 1);
        
        reviewIndex = customer.reviews.findIndex(review => review.id == id);
        if (reviewIndex === -1) {
            return res.status(404).json({ error: 'Review not found in restaurant' });
        }
        customer.reviews.splice(reviewIndex, 1);


        await restaurant.save();
        await customer.save();

        res.json({
            "message" : "Review Successfully deleted!",
            "restaurant reviews": restaurant.reviews,
            "customer review" : customer.reviews,
        })
    } 
    catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
})

export default router;
