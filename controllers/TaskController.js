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
  async getAll(req, res) {
    try {
      const tasks = await Task.find();
      res.status(200).send(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Error trying to get all tasks", error });
    }
  },
  async getById(req, res) {
    try {
      const task = await Task.findById(req.params._id);
      res.status(200).send(task);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "Error trying to get a task with Id", error });
    }
  },
  async complete(req, res) {
    try {
      let task = await Task.findByIdAndUpdate(
        req.params._id,
        { completed: true },
        { new: true }
      );
      res.status(200).send({ msg: "task completed", task });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "There was a problem trying to complete the task" });
    }
  },
  async update(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params._id,
        { title: req.body.title },
        { new: true }
      );
      res.send(task);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "Unexpected error trying to update the task", error });
    }
  },
};
module.exports = TaskController;
