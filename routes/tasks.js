const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController");

router.post("/", TaskController.create);
router.get("/", TaskController.getAll);
router.get("/:_id", TaskController.getById);

module.exports = router;
