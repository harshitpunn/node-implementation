const categories = require('../models/categories');

const getCategories = async (req, res) => {
  const categoriesList = await categories.categoriesModel
    .find({})
    .populate('posts');
  res.json(categoriesList);
};

module.exports = { getCategories };
