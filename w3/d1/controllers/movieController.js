const axios = require('axios');

const getMovieList = async (req, res) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.AUTHORIZATION_TOKEN}`,
        },
      }
    );

    res.json(data.data.results);
  } catch (error) {
    throw error;
  }
};

module.exports = { getMovieList };
