const express = require('express');
// We are going to import controller here so that we can access auth functions

const {
  showRegisterForm,
  registerUser,
} = require('../controllers/authController');

const router = express.Router();

router.get('/register', showRegisterForm);

router.post('/register', registerUser);

//get on login

//post on login

//post on logout

module.exports = router;
