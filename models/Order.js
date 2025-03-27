const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      foodItem: { type: mongoose.Schema.Types.ObjectId, ref: "FoodItem" },
      quantity: { type: Number, required: true }
    }
  ],
  status: { type: String, enum: ["Pending", "Preparing", "Completed"], default: "Pending" }
});

module.exports = mongoose.model("Order", OrderSchema);
