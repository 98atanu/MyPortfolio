const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { fname, lname, email, mobile, message } = req.body;
    
    const newContact = new Contact({ fname, lname, email, mobile, message });
    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Failed to submit form" });
  }
});

module.exports = router;
