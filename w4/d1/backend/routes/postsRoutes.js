const express = require('express');
const router = express.Router();

const {
  getPosts,
  getPostedBy,
  getIndividualPosts,
} = require('../controllers/postsController');

router.route('/all').get(getPosts);
router.route('/:id').get(getIndividualPosts);
router.route('/postedBy').get(getPostedBy);

module.exports = router;
