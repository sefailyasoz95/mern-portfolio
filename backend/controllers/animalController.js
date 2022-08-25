const asyncHandler = require("express-async-handler");
const Animal = require("../models/animalModel");

const getAnimalsByName = asyncHandler(async (request, response) => {
	const animals = await Animal.find({ name: request.query.name });
	response.status(200).json({
		message: "Success",
		animals,
	});
});

const getAllAnimals = asyncHandler(async (request, response) => {
	const animals = await Animal.find();
	response.status(200).json({
		message: "Success",
		animals,
	});
});

const createAnimal = asyncHandler(async (request, response) => {
	const { name, description, image, tr, en } = request.body;
	if (!name || !image) {
		response.status(400);
		throw new Error("Name and Image fields are required");
	}

	const animal = await Animal.create({ name, description, image, tr, en });
	if (animal) {
		response.status(201).json({
			message: "Success",
			animal,
		});
	} else {
		response.status(400);
		throw new Error("Something went wrong while creating an animal");
	}
});

const updateAnimal = asyncHandler(async (req, res) => {
	const animal = await Animal.findById(req.params.id);
	if (!animal) {
		response.status(404);
		throw new Error("Animal Not Found");
	}
	const updated = await Animal.findByIdAndUpdate(req.params.id, req.body);
	res.status(200).json({
		message: `Success`,
		animal: updated,
	});
});

const deleteAnimal = asyncHandler(async (request, response) => {
	const animal = await Animal.findById(request.params.id);
	if (!animal) {
		response.status(404);
		throw new Error("Animal Not Found");
	}

	animal.remove();
	response.status(200).json({
		message: `Success`,
		id: request.params.id,
	});
});

module.exports = {
	getAnimalsByName,
	createAnimal,
	updateAnimal,
	deleteAnimal,
	getAllAnimals,
};
