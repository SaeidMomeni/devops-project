const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/devops-app";

mongoose.connect(mongoURL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// مدل ساده
const Note = mongoose.model("Note", {
  title: String,
  content: String,
});

// GET route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// POST route برای ایجاد یادداشت
app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  res.status(201).send(newNote);
});

// GET route برای دریافت همه یادداشت‌ها
app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.send(notes);
});

if (require.main === module) {
  app.listen(3000, () => console.log("✅ Server running on port 3000"));
}

module.exports = app;

