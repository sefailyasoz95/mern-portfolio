const express = require("express");
const {
	getObjectsByName,
	createObject,
	updateObject,
	deleteObject,
	getAllObjects,
} = require("../controllers/objectController");
const router = express.Router();

router.route("/").get(getAllObjects).post(createObject);
router.route("/:id").delete(deleteObject).put(updateObject);
router.route("/getObjectsByName").get(getObjectsByName);
module.exports = router;
