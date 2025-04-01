const express = require("express");
const multer = require("multer");
const Contact = require("../models/Contact");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { fname, lname, email, mobile, message } = req.body;
    const image = req.file ? req.file.filename : null; 
    const imageUrl = req.file ? `http://localhost:6002/uploads/${req.file.filename}` : null; 
    const newContact = new Contact({ fname, lname, email, mobile, message, image });
    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully", contact: newContact });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ error: "Failed to submit form" });
  }
});

router.get("/", async (req, res) => {
  try {
    let contacts = await Contact.find(); 

    if (!Array.isArray(contacts)) {
      return res.status(500).json({ error: "Contacts data is not an array." });
    }

    contacts = contacts.map((contact) => ({
      ...contact.toObject(), 
      imageUrl: contact.image ? `http://localhost:6002/uploads/${contact.image}` : null,
    }));

    res.json(contacts);
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).json({ error: "Failed to fetch contacts." });
  }
});

module.exports = router;
