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
});

module.exports = {
  postsSchema,
  postsModel: mongoose.model('posts', postsSchema),
};
