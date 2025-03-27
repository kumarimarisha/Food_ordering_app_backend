const express = require("express");
const FoodItem = require("../models/FoodItem");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Add a new food item (Only for Admin)
router.post("/", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Access denied" });

  const { name, price, foodCourt, description } = req.body;
  try {
    const newFood = new FoodItem({ name, price, foodCourt, description });
    await newFood.save();
    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ message: "Error adding food item" });
  }
});

// Get all food items
router.get("/", async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ message: "Error fetching food items" });
  }
});

// Update a food item (Only for Admin)
router.put("/:id", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Access denied" });

  try {
    const updatedFood = await FoodItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedFood);
  } catch (error) {
    res.status(500).json({ message: "Error updating food item" });
  }
});

// Delete a food item (Only for Admin)
router.delete("/:id", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Access denied" });

  try {
    await FoodItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Food item deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting food item" });
  }
});

module.exports = router;
