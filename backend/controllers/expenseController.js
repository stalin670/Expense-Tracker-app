const User = require("../models/userModel.js");

const addTransaction = async (req, res) => {
  const { _id } = req.user;
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

const getAllTransactions = async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await User.findById(_id).select("expenses");
    return res.status(200).json({
      message: "Fetched Expenses successfully",
      success: true,
      data: user?.expenses,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error, success: false });
  }
};

const deleteTransaction = async (req, res) => {
  const { _id } = req.user;
  const { expenseId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      _id,
      { $pull: { expenses: { _id: expenseId } } },
      { new: true }
    );
    return res.status(200).json({
      message: "Expense deleted successfully",
      success: true,
      data: user?.expenses,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error, success: false });
  }
};

module.exports = {
  addTransaction,
  getAllTransactions,
  deleteTransaction,
};
