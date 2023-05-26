const mongoose = require('mongoose');

const tagsSchema = new mongoose.Schema({
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
  tagsSchema,
  tagsModel: mongoose.model('tags', tagsSchema),
};
