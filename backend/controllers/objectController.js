const asyncHandler = require("express-async-handler");
const Object = require("../models/objectModel");

const getObjectsByName = asyncHandler(async (request, response) => {
	const objects = await Object.find({ name: request.query.name });
	response.status(200).json({
		message: "Success",
		objects,
	});
});

const getAllObjects = asyncHandler(async (request, response) => {
	const objects = await Object.find();
	response.status(200).json({
		message: "Success",
		objects,
	});
});

const createObject = asyncHandler(async (request, response) => {
	const { name, description, image, tr, en } = request.body;
	if (!name || !image) {
		response.status(400);
		throw new Error("Name and Image fields are required");
	}

	const object = await Object.create({ name, description, image, tr, en });
	if (object) {
		response.status(201).json({
			message: "Success",
			object,
		});
	} else {
		response.status(400);
		throw new Error("Something went wrong while creating an object");
	}
});

const updateObject = asyncHandler(async (req, res) => {
	const object = await Object.findById(req.params.id);
	if (!object) {
		response.status(404);
		throw new Error("Object Not Found");
	}
	const updated = await Object.findByIdAndUpdate(req.params.id, req.body);
	res.status(200).json({
		message: `Success`,
		object: updated,
	});
});

const deleteObject = asyncHandler(async (request, response) => {
	const object = await Object.findById(request.params.id);
	if (!object) {
		response.status(404);
		throw new Error("Object Not Found");
	}

	object.remove();
	response.status(200).json({
		message: `Success`,
		id: request.params.id,
	});
});

module.exports = {
	getObjectsByName,
	createObject,
	updateObject,
	deleteObject,
	getAllObjects,
};
