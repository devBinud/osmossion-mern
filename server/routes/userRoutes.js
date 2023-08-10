const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Register endpoint
router.post('/register', UserController.register);

// Login endpoint
router.post('/login', UserController.login);



module.exports = router;
