const mongoose = require("mongoose");

const FoodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  foodCourt: { type: String, required: true }, // To categorize by food court
  description: { type: String }
});

module.exports = mongoose.model("FoodItem", FoodItemSchema);
