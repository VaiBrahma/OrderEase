import Admin from "../models/Admin.js";

const getRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Admin.findById(req.params.adminId);
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    res.restaurant = restaurant;
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching restaurant", details: error.message });
  }
};

export default getRestaurant;
