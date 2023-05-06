const express = require('express');
// We are going to import controller here so that we can access auth functions

const {
  showRegisterForm,
  registerUser,
  logoutUser,
  showLoginForm,
  loginUser,
} = require('../controllers/authController');

const router = express.Router();

router.get('/register', showRegisterForm);

router.post('/register', registerUser);

router.get('/login', showLoginForm);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

module.exports = router;
