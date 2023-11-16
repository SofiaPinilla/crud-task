const Task = require("../models/Task");

const TaskController = {
	async create(req, res) {
		try {
			const task = await Task.create({
				...req.body,
				completed: false,
			});
			res.status(201).send({ msg: "Task created successfully", task });
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ msg: "There was an error trying to create the task", error });
		}
	},
	async getAll (req,res) {
		try {
			const tasks = await Task.find()
			res.status(200).send(tasks)
		} catch (error) {
			console.error(error)
			res.status(500).send({msg:"Error trying to get all tasks", error})
		}
	}
};
module.exports = TaskController;
