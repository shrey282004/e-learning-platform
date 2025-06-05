const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

router.post("/", async (req, res) => {
  try {
    const { serviceType, latitude, longitude } = req.body;
    const newReport = new Report({ serviceType, latitude, longitude });
    await newReport.save();
    res.status(201).json({ message: `${serviceType} notified!` });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

