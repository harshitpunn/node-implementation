const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const { getMovieList } = require('../controllers/movieController');

router.route('/trending').get(authenticateToken, getMovieList);

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    next();
  });
}

module.exports = router;
