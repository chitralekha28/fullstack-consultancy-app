const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

/* Contact Schema */
const ContactSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    mobile: String,
    city: String,
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

/* POST: Save contact form */
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* GET: Fetch all contacts (Admin panel) */
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
