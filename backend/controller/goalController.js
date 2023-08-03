const asyncHandler = require("express-async-handler");

// @desc GET goals
// @route GET /api/goals
//@access Private

const getGoals = asyncHandler((req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "get goals" });
});

// @desc SET goals
// @route POST /api/goals
//@access Private

const setGoals = asyncHandler((req, res) => {
  res.status(200).json({ message: "Set goals" });
});

// @desc update goal
// @route PUT /api/goals/:id
//@access Private

const updateGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc delete goal
// @route delete /api/goals/:id
//@access Private

const deleteGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
