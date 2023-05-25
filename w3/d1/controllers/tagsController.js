const tags = require('../models/tags');

const getTags = async (req, res) => {
  const tagsList = await tags.tagsModel.find({});
  res.json(tagsList);
};

module.exports = { getTags };
