const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
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
  usersSchema,
  usersModel: mongoose.model('users', usersSchema),
};
