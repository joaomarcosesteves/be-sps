const express = require('express');
const { login, listUsers, createUser, deleteUser, updateUser } = require('../controllers/usersController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.get('/', authenticate, listUsers);
router.post('/', authenticate, createUser);
router.delete('/:email', authenticate, deleteUser);
router.put('/:email', authenticate, updateUser);

module.exports = router;
