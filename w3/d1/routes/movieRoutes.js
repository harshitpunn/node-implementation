const express = require('express');
const router = express.Router();

const { getMovieList } = require('../controllers/movieController');

router.route('/trending').get(getMovieList);

module.exports = router;
