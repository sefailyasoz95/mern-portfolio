const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8080;
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
connectDB();
const app = express();

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/animals", require("./routes/animalRoutes"));
app.use("/api/objects", require("./routes/objectRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));

// serve frontend
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/build")));

	app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../", "frontend", "build", "index.html")));
} else {
	app.get("/", (req, res) => res.send("This is development mode"));
}

app.use(errorHandler);
app.listen(port, () => console.log(`server started at on port ${port}`));
