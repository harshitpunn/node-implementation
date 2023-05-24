const axios = require('axios');

const getMovieList = (req, res) => {
  return res.json({ message: 'Works' });
};

module.exports = { getMovieList };
