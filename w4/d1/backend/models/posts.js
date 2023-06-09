const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tags',
    },
  ],
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categories',
    },
  ],
});

module.exports = {
  postsSchema,
  postsModel: mongoose.model('posts', postsSchema),
};
