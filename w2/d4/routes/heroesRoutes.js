const express = require('express');
const router = express.Router();
const {
  getAllHeroes,
  addNewHeroes,
  getHeroesDetails,
  deleteHero,
} = require('../controllers/herosController');

router.route('/list').get(getAllHeroes).post(addNewHeroes);
router.route('/list/:id').get(getHeroesDetails).delete(deleteHero);

module.exports = router;
