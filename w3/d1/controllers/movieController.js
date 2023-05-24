const axios = require('axios');

const getMovieList = async (req, res) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?language=en-US`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTg3MjdkYmI0M2ZkYWU5MGE4ZWNlODY1YmIxMTk2NyIsInN1YiI6IjYyNTFmZTNhOTA0ZjZkMDA1MjAzZmM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0QRH7U28s6yfAKudM8hJwK6CwX9AmVnln4n3asoARR0`,
        },
      }
    );

    res.json(data.data.results);
  } catch (error) {
    throw error;
  }
};

module.exports = { getMovieList };
