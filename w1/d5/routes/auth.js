const express = require('express');
// We are going to import controller here so that we can access auth functions

const { showRegisterForm } = require('../controllers/authController');

const router = express.Router();

router.get('/register', showRegisterForm);

//post on registration

//get on login

//post on login

//post on logout

module.exports = router;
