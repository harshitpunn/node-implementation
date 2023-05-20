const heroes = require('../models/heroes');

const getAllHeroes = async (req, res) => {
  try {
    let response = await heroes.heroesModel.find({});
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewHeroes = async (req, res) => {
  try {
    const heroObject = {
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
    };
    const createHero = await heroes.heroesModel.create(heroObject);
    res.json(createHero);
  } catch (error) {
    res.json({
      error: true,
      message: error.message,
    });
  }
};

const getHeroesDetails = (req, res) => {};

module.exports = { getAllHeroes, addNewHeroes, getHeroesDetails };
