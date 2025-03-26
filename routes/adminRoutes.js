const express = require("express");
const Admin = require("../models/Admin");

const router = express.Router();

// Admin Login (example)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (!admin || admin.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", admin });
});

module.exports = router;
