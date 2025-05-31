const auth = require('../middleware/auth');
const role = require('../middleware/role');

const express = require('express');
const router = express.Router();
const { getProfile, getUsers, updateUser, deleteUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

// Get profile of logged-in user
router.get('/me', auth, getProfile);

// Admin routes (you can add role check middleware if needed)
router.get('/', auth, getUsers);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);

module.exports = router;
