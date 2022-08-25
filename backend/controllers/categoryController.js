const asyncHandler = require("express-async-handler");
const Category = require("../models/categoryModel");

const getCategoriesByName = asyncHandler(async (request, response) => {
	const categories = await Category.find({ name: request.query.name });
	response.status(200).json({
		message: "Success",
		categories,
	});
});

const getAllCategories = asyncHandler(async (request, response) => {
	const categories = await Category.find();
	response.status(200).json({
		message: "Success",
		categories,
	});
});

const createCategory = asyncHandler(async (request, response) => {
	const { name, image, tr, en } = request.body;
	if (!name || !image) {
		response.status(400);
		throw new Error("Name and Image fields are required");
	}

	const category = await Category.create({ name, image, tr, en });
	if (category) {
		response.status(201).json({
			message: "Success",
			category,
		});
	} else {
		response.status(400);
		throw new Error("Something went wrong while creating an category");
	}
});

const updateCategory = asyncHandler(async (req, res) => {
	const category = await Category.findById(req.params.id);
	if (!category) {
		response.status(404);
		throw new Error("Category Not Found");
	}
	const updated = await Category.findByIdAndUpdate(req.params.id, req.body);
	res.status(200).json({
		message: `Success`,
		category: updated,
	});
});

const deleteCategory = asyncHandler(async (request, response) => {
	const category = await Category.findById(request.params.id);
	if (!category) {
		response.status(404);
		throw new Error("Category Not Found");
	}

	category.remove();
	response.status(200).json({
		message: `Success`,
		id: request.params.id,
	});
});

module.exports = {
	getCategoriesByName,
	createCategory,
	updateCategory,
	deleteCategory,
	getAllCategories,
};
