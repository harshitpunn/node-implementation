const express = require('express');
const router = express.Router();
const {
  getAllHeroes,
  addNewHeroes,
} = require('../controllers/herosController');

/* 
In this route, we can retrieve and add users in the same line using different 
controller functions.
*/
router.route('/list').get(getAllHeroes).post(addNewHeroes);
