const heroes = require('../models/heroes');

const getAllHeroes = async (req, res) => {
  try {
    let response = await heroes.heroesModel.find({});
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewHeroes = (req, res) => {};

const getHeroesDetails = (req, res) => {};

module.exports = { getAllHeroes, addNewHeroes, getHeroesDetails };
