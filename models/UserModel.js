const db = require("../db/database");

exports.getAllUsers = (callback) => {
  db.all("SELECT * FROM users", [], callback);
};

exports.getUserById = (id, callback) => {
  db.get("SELECT * FROM users WHERE id = ?", [id], callback);
};

exports.createUser = (name, email, callback) => {
  db.run(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    function (err) {
      callback(err, { id: this.lastID, name, email });
    }
  );
};

exports.updateUser = (id, name, email, callback) => {
  db.run(
    "UPDATE users SET name = ?, email = ? WHERE id = ?",
    [name, email, id],
    function (err) {
      callback(err);
    }
  );
};

exports.deleteUser = (id, callback) => {
  db.run("DELETE FROM users WHERE id = ?", [id], callback);
};