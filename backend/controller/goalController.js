const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc GET goals
// @route GET /api/goals
//@access Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc SET goals
// @route POST /api/goals
//@access Private

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc update goal
// @route PUT /api/goals/:id
//@access Private

const updateGoal = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: `Update goal ${req.params.id}` });

  const goal = await Goal.findById(req.params.id);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Text is Required");
  }

  if (!goal) {
    res.status(400);
    throw new error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc delete goal
// @route delete /api/goals/:id
//@access Private

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new error("Goal not found");
  }
  const deletedGoal = await Goal.deleteOne({_id:req.params.id});
  res.status(200).json(req.params.id);
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
