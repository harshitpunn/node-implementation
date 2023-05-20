const express = require('express');
const router = express.Router();
const {
  getAllEnemies,
  addNewEnemy,
  getEnemyDetails,
} = require('../controllers/enemyController');

router.route('/list').get(getAllEnemies).post(addNewEnemy);
router.route('/list/:id').get(getEnemyDetails);

module.exports = router;
