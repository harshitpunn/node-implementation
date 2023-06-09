const tags = require('../models/tags');

const getTags = async (req, res) => {
  const tagsList = await tags.tagsModel.find({}).populate('posts');
  res.json(tagsList);
};

module.exports = { getTags };
