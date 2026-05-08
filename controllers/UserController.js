let users = [];
let id = 1;

// GET all users
exports.getUsers = (req, res) => {
  res.json(users);
};

// GET user by ID
exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

// POST create user
exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const newUser = {
    id: id++,
    name,
    email
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// PUT update user
exports.updateUser = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { name, email } = req.body;

  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
};

// DELETE user
exports.deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.status(204).send();
};