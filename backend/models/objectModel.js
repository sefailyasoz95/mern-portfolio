const mongoose = require("mongoose");

const objectSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "This field is required"],
		},
		image: {
			type: String,
			required: [true, "This field is required"],
		},
		description: {
			type: String,
			required: [true, "This field is required"],
		},
		tr: {
			type: String,
			required: [true, "This field is required"],
		},
		en: {
			type: String,
			required: [true, "This field is required"],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Objects", objectSchema);
