const userModel = require("../models/userModel");
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
});

exports.getUsers = (req, res) => {
  userModel.getAllUsers((err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(users);
  });
};

exports.getUser = (req, res) => {
  userModel.getUserById(req.params.id, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  });
};

exports.createUser = (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { name, email } = req.body;

  userModel.createUser(name, email, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(user);
  });
};

exports.updateUser = (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { name, email } = req.body;

  userModel.updateUser(req.params.id, name, email, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User updated successfully" });
  });
};

exports.deleteUser = (req, res) => {
  userModel.deleteUser(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User deleted successfully" });
  });
};