const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'posts',
    },
  ],
});

module.exports = {
  categoriesSchema,
  categoriesModel: mongoose.model('categories', categoriesSchema),
};
