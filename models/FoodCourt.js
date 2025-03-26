const mongoose = require("mongoose");

const FoodCourtSchema = new mongoose.Schema({
  name: String,
  location: String,
  menu: [
    {
      itemName: String,
      price: Number
    }
  ]
});

module.exports = mongoose.model("FoodCourt", FoodCourtSchema);

