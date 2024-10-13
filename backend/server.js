require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./models/dbConnect.js");
const authRouter = require("./routes/authRouter.js");
const expenseRouter = require("./routes/expenseRouter.js");
const authChecker = require("./middlewares/authChecker.js");

const app = express();

const PORT = process.env.PORT || 8001;

// Database Connection
dbConnect();

// Middlewares
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
};
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Routes
app.get("/", (req, res) => {
  return res.send("Hello");
});

app.use("/api/auth", authRouter);
app.use("/api/expenses", authChecker, expenseRouter);

// listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
