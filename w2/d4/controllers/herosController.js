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

const getHeroesDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const heroDetail = await heroes.heroesModel.findById(id);
    res.json(heroDetail);
  } catch (error) {
    res.json({
      error: true,
      message: error.message,
    });
  }
};

const deleteHero = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;
    const deleteResult = await heroes.heroesModel.findByIdAndDelete(id);
    if (!deleteResult) {
      return res.status(404).json({ message: 'Hero not found' });
    }
    return res.status(200).json({ message: 'Hero Deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getAllHeroes, addNewHeroes, getHeroesDetails, deleteHero };
