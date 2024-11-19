const jwt = require('jsonwebtoken');
const {
  getUsers,
  addUser,
  removeUser,
  updateUsers,
  getUserByEmail,
} = require('../models/userRepository');

const login = (req, res) => {
  const { email, password } = req.body;
  const user = getUserByEmail(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ email: user.email, type: user.type }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
  res.json({ token });
};

const listUsers = (req, res) => res.json(getUsers());

const createUser = (req, res) => {
  try {
    const { name, email, type, password } = req.body;
    addUser({ name, email, type, password });
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUser = (req, res) => {
  try {
    const { email } = req.params;
    removeUser(email);
    res.json({ message: 'User removed' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateUser = (req, res) => {
  try {
    const { email } = req.params;
    const updatedData = req.body;
    updateUsers(email, updatedData);
    res.json({ message: 'User updated' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { login, listUsers, createUser, deleteUser, updateUser };
