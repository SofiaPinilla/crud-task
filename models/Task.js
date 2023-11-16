const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Please add a title for your task"],
		},
		completed: Boolean,
	},
	{ timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
