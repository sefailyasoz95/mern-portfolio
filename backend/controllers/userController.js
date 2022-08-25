const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		res.status(400);
		throw new Error("Please add all fields");
	}

	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error("This user already exist");
	}

	// hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// create user

	const user = await User.create({ name, email, password: hashedPassword });
	if (user) {
		res.status(201).json({
			message: "success",
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user && (await bcrypt.compare(password, user.password))) {
		res.status(200).json({
			message: "success",
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("invalid credentials");
	}
});

const getUserById = asyncHandler(async (req, res) => {
	res.json({ message: "getUserById user" });
});

const getMe = asyncHandler(async (req, res) => {
	res.status(200).json(req.user);
});

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "365d" }); // expires in 30 days
};

module.exports = { registerUser, loginUser, getUserById, getMe };
