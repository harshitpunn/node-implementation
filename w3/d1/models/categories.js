const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = {
  categoriesSchema,
  categoriesModel: mongoose.model('categories', categoriesSchema),
};
