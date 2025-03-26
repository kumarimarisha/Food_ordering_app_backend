const express = require("express");
const FoodCourt = require("../models/FoodCourt");

const router = express.Router();

// Get all food courts
router.get("/", async (req, res) => {
  const foodCourts = await FoodCourt.find();
  res.json(foodCourts);
});

module.exports = router;
