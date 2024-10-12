require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dbConnect = require("./models/dbConnect.js");

const app = express();

const PORT = process.env.PORT || 8001;

// Database Connection
dbConnect();

// Routes
app.get("/", (req, res) => {
  return res.send("Hello");
});

// listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
