const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  foodCourt: { type: mongoose.Schema.Types.ObjectId, ref: "FoodCourt" },
  items: [
    {
      itemName: String,
      quantity: Number
    }
  ],
  status: { type: String, enum: ["Pending", "Preparing", "Completed"], default: "Pending" },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);
