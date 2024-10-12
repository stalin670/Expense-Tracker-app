require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./models/dbConnect.js");
const authRouter = require("./routes/authRouter.js");

const app = express();

const PORT = process.env.PORT || 8001;

// Database Connection
dbConnect();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  return res.send("Hello");
});

app.use("/auth", authRouter);

// listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
