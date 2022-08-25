const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (request, response) => {
	const goals = await Goal.find({ user: request.user.id });
	response.status(200).json({
		message: "Success",
		goals,
	});
});
const getGoalById = asyncHandler(async (request, response) => {
	const goal = await Goal.findById(request.params.id);
	if (!goal) {
		response.status(400);
		throw new Error("Goal Not Found");
	}
	response.status(200).json({
		message: `Success`,
		goal,
	});
});

const createGoal = asyncHandler(async (request, response) => {
	if (!request.body.text) {
		response.status(400);
		throw new Error("Please add a text field");
	}
	const goal = await Goal.create({
		text: request.body.text,
		user: request.user.id,
	});
	response.status(200).json({
		message: "Success",
		goal,
	});
});

const updateGoal = asyncHandler(async (request, response) => {
	const goal = await Goal.findById(request.params.id);
	if (!goal) {
		response.status(400);
		throw new Error("Goal Not Found");
	}
	if (!req.user) {
		response.status(401);
		throw new Error("User not found");
	}
	// make sure user is updating their own goal
	if (goal.user.toString() !== req.user.id) {
		response.status(401);
		throw new Error("not authorized");
	}
	const updated = await Goal.findByIdAndUpdate(
		request.params.id,
		request.body,
		{ new: true }
	);
	response.status(200).json({
		message: `Success`,
		goal: updated,
	});
});

const deleteGoal = asyncHandler(async (request, response) => {
	const goal = await Goal.findById(request.params.id);
	if (!goal) {
		response.status(400);
		throw new Error("Goal Not Found");
	}
	if (!request.user) {
		response.status(401);
		throw new Error("User not found");
	}
	// make sure user is updating their own goal
	if (goal.user.toString() !== request.user.id) {
		response.status(401);
		throw new Error("not authorized");
	}
	goal.remove();
	response.status(200).json({
		message: `Success`,
		id: request.params.id,
	});
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal, getGoalById };
