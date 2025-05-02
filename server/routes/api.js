const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const user = require("../models/user");

const db =
  "mongodb+srv://haseebsardar286:haseeb286@cluster0.t1hkvde.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

router.get("/", (req, res) => {
  res.send("Response from API");
});

router.post("/register", async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new user(userData);
    const registeredUser = await newUser.save();
    res.status(200).send(registeredUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error registering user");
  }
});
module.exports = router;
