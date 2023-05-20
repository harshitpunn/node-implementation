const express = require('express');
const router = express.Router();
const {
  getAllCommunities,
  addNewCommunity,
  getCommunityDetails,
} = require('../controllers/communityController');

router.route('/list').get(getAllCommunities).post(addNewCommunity);
router.route('/list/:id').get(getCommunityDetails);

module.exports = router;
