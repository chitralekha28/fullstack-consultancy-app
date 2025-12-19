const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

// ADD SUBSCRIBER
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Already subscribed" });
    }

    const subscriber = new Subscriber({ email });
    await subscriber.save();

    res.status(201).json(subscriber);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL SUBSCRIBERS (ADMIN)
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
