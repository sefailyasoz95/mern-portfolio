const express = require("express");
const {
	getCategoriesByName,
	createCategory,
	updateCategory,
	deleteCategory,
	getAllCategories,
} = require("../controllers/categoryController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(getAllCategories).post(protect, createCategory);
router.route("/getCategoriesByName").get(getCategoriesByName);
router.route("/:id").delete(protect, deleteCategory).put(protect, updateCategory);
module.exports = router;
