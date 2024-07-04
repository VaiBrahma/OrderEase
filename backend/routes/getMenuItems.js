import express from "express";
import Admin from "../models/Admin.js";
import mongoose from "mongoose";

const router = express.Router();

const getRestaurant = async (req, res, next) => {
    try {
        const restaurant = await Admin.findById(req.params.adminId);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.restaurant = restaurant;
        next();
    } catch (error) {
        res.status(500).json({ error: 'Error fetching restaurant', details: error.message });
    }
};

router.get('/:adminId/clearMenu', getRestaurant, async(req, res)=>{
  try{
    const restaurant = res.restaurant;
    restaurant.menu = [];
    await restaurant.save()
    .then(()=>{
      res.status(200).json({
        message: "Cleared Menu Successfully",
        menu: restaurant.menu
      })
    })
  }catch(err){
    res.status(500).send("cant clear menu");
  }
})

router.get('/:adminId',getRestaurant, async(req, res) => {
    const menu = res.restaurant.menu;
    res.json(menu);
})

router.post('/:adminId/addItem', getRestaurant, async (req, res) => {
  try {
      const restaurant = res.restaurant;
      const newItems = req.body;

      newItems.forEach(newItem => {
          let category = restaurant.menu.find(cat => cat.title.toLowerCase() === newItem.category.toLowerCase());

          if (!category) {
              category = {
                  title: newItem.category.charAt(0).toUpperCase() + newItem.category.slice(1).toLowerCase(),
                  items: []
              };
              restaurant.menu.push(category);
              category = restaurant.menu[restaurant.menu.length - 1]; 
          }

          category.items.push({
              name: newItem.name,
              price: newItem.price,
              vegetarian: newItem.vegetarian,
              isAvailable: newItem.isAvailable,
              id: newItem.id || new Date().getTime().toString(),
              image_src: newItem.image_src || '',
              cooking_time: newItem.cooking_time || ''
          });
      });
      
      await restaurant.save();

      res.status(200).json({ message: 'Items added successfully', menu: restaurant.menu });
  } catch (error) {
      res.status(500).json({ error: 'An error occurred while adding items to the menu', details: error.message });
  }
});

router.put('/:adminId/updateItem', getRestaurant, async (req, res) => {
  try {
      const restaurant = res.restaurant;
      const { id, category, updatedItem } = req.body;

      let categoryObj = restaurant.menu.find(cat => cat.title.toLowerCase() === category.toLowerCase());

      if (!categoryObj) {
          return res.status(404).json({ error: 'Category not found' });
      }

      let item = categoryObj.items.find(item => item.id === id);

      if (!item) {
          return res.status(404).json({ error: 'Item not found' });
      }

      // Update the item with new values
      Object.assign(item, updatedItem);

      await restaurant.save();

      res.status(200).json({ message: 'Item updated successfully', menu: restaurant.menu });
  } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the item', details: error.message });
  }
});

router.delete('/:adminId/deleteItem', getRestaurant, async (req, res) => {
  try {
      const restaurant = res.restaurant;
      const { id, category } = req.body;

      let categoryObj = restaurant.menu.find(cat => cat.title.toLowerCase() === category.toLowerCase());

      if (!categoryObj) {
          return res.status(404).json({ error: 'Category not found' });
      }

      let itemIndex = categoryObj.items.findIndex(item => item.id === id);

      if (itemIndex === -1) {
          return res.status(404).json({ error: 'Item not found' });
      }

      categoryObj.items.splice(itemIndex, 1);

      await restaurant.save();

      res.status(200).json({ message: 'Item deleted successfully', menu: restaurant.menu });
  } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the item', details: error.message });
  }
});

export default router;
