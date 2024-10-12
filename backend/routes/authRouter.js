const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/authController");
const {
  signupValidation,
  loginValidation,
} = require("../middlewares/authValidation");

router.post("/login", loginValidation, login);
router.post("/signup", signupValidatiin, signup);

module.exports = router;
