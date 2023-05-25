const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = {
  postsSchema,
  postsModel: mongoose.model('posts', postsSchema),
};
