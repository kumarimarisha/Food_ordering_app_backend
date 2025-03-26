const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Place an order
router.post("/place-order", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  const orders = await Order.find().populate("user").populate("foodCourt");
  res.json(orders);
});

module.exports = router;
