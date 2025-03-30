const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// POST a new project (for admin use)
router.post("/", async (req, res) => {
  try {
    console.log("Received Data:", req.body);
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json({ message: "Project added successfully" });
  } catch (err) {
    console.error("Error Saving Project:", err); // Log error for debugging
    res.status(500).json({ error: "Failed to add project", details: err.message });
  }
});

module.exports = router;
