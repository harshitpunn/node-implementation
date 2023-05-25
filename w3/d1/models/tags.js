const mongoose = require('mongoose');

const tagsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = {
  tagsSchema,
  tagsModel: mongoose.model('tags', tagsSchema),
};
