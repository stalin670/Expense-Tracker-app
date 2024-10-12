const express = require("express");
const router = express.Router();

const {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/expenseController");

router.get("/", getAllTransactions);
router.post("/", addTransaction);
router.delete("/:expenseId", deleteTransaction);

module.exports = router;
