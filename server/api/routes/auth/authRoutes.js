const express = require('express');
const authController = require('../../controllers/auth');
const { register, login } = authController;

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;
