const mongoose = require('mongoose');

const heroesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = {
  heroesSchema,
  heroesModel: mongoose.model('heroes', heroesSchema),
};
