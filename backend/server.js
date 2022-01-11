const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//routes
app.get("/", (req, res) => {
  res.send("API is running....");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((note) => note._id === req.params.id);
  res.send(note);
});

app.listen(port, () => console.log("Server running on port 5000"));
