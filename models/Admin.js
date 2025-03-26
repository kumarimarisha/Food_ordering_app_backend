const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  foodCourt: { type: mongoose.Schema.Types.ObjectId, ref: "FoodCourt" }
});

module.exports = mongoose.model("Admin", AdminSchema);
