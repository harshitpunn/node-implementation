const express = require('express');
const router = express.Router();
const {
  getAllHeroes,
  addNewHeroes,
  getHeroesDetails,
} = require('../controllers/herosController');

router.route('/list').get(getAllHeroes).post(addNewHeroes);
router.route('/list/:id').get(getHeroesDetails);

module.exports = router;
