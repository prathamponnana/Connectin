const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./src/server/models/user.model");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Connectin:Connectin2022@connectin.cbk5h.mongodb.net/connectin"
);

app.post("/api/register", async (req, res) => {
  try {
    await User.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Email already registered" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.log(user)
  if (user) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "connectin"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: "Invalid Login" });
  }
});

app.listen(5500, () => console.log("Up and running!!"));
