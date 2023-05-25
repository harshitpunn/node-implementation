const categories = require('../models/categories');

const getCategories = async (req, res) => {
  const categoriesList = await categories.categoriesModel.find({});
  res.json(categoriesList);
};

module.exports = { getCategories };
