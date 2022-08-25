const express = require("express");
const {
	getGoals,
	createGoal,
	deleteGoal,
	updateGoal,
	getGoalById,
} = require("../controllers/goalController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, createGoal);
router
	.route("/:id")
	.delete(protect, deleteGoal)
	.put(protect, updateGoal)
	.get(protect, getGoalById);

// router.get("/", getGoals);

// router.get("/:id", getGoalById);

// router.post("/", createGoal);

// router.put("/:id", updateGoal);

// router.delete("/:id", deleteGoal);

module.exports = router;
