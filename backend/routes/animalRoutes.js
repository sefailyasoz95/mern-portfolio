const express = require("express");
const {
	getAnimalsByName,
	createAnimal,
	updateAnimal,
	deleteAnimal,
	getAllAnimals,
} = require("../controllers/animalController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(getAllAnimals).post(protect, createAnimal);
router.route("/:id").delete(protect, deleteAnimal).put(protect, updateAnimal);
router.route("/getAnimalsByName").get(getAnimalsByName);
module.exports = router;
