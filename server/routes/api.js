const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const user = require("../models/user");
const { Subject } = require("rxjs");
const jwt = require("jsonwebtoken");

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

    let payload = { Subject: registeredUser._id };
    let token = jwt.sign(payload, "secretKey");

    res.status(200).send({ token });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).send("Server error during registration");
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = req.body;
    const foundUser = await user.findOne({ email: userData.email });
    if (!foundUser) {
      res.status(401).send("Invalid User Email!");
    } else if (foundUser.password !== userData.password) {
      res.status(401).send("Invalid Password");
    } else {
      let payload = { Subject: foundUser._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/events", async (req, res) => {
  let events = [
    {
      id: 1,
      name: "Ali",
      description: "lorem ipsum",
      date: "5/5/2025",
    },
    {
      id: 1,
      name: "Ali",
      description: "lorem ipsum",
      date: "5/5/2025",
    },
    {
      id: 1,
      name: "Ali",
      description: "lorem ipsum",
      date: "5/5/2025",
    },
    {
      id: 1,
      name: "Ali",
      description: "lorem ipsum",
      date: "5/5/2025",
    },
    {
      id: 1,
      name: "Ali",
      description: "lorem ipsum",
      date: "5/5/2025",
    },
    {
      id: 1,
      name: "Ali",
      description: "lorem ipsum",
      date: "5/5/2025",
    },
  ];
  res.json(events);
});
router.get("/special", async (req, res) => {
  let events = [
    {
      id: 1,
      name: "Ali",
      description: "lorem ipsum",
      date: "5/5/2025",
    },
    {
      id: 1,
      name: "Ali",
      description: "lorem ipsum",
      date: "5/5/2025",
    },
    {
      id: 1,
      name: "Ali",
      description: "lorem ipsum",
      date: "5/5/2025",
    },
    {
      id: 1,
      name: "Ali",
      description: "lorem ipsum",
      date: "5/5/2025",
    },
    {
      id: 1,
      name: "Ali",
      description: "lorem ipsum",
      date: "5/5/2025",
    },
    {
      id: 1,
      name: "Ali",
      description: "lorem ipsum",
      date: "5/5/2025",
    },
  ];
  res.json(events);
});
module.exports = router;
