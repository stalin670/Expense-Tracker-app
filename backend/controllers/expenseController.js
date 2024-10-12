const User = require("../models/userModel.js");

const addTransaction = async (req, res) => {
  const { _id } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      _id,
      { $push: { expenses: req.body } },
      { new: true }
    );
    return res.status(200).json({
      message: "Expense added successfully",
      success: true,
      data: user?.expenses,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error, success: false });
  }
};

const getAllTransactions = async (req, res) => {};

const deleteTransaction = async (req, res) => {};

module.exports = {
  addTransaction,
  getAllTransactions,
  deleteTransaction,
};
