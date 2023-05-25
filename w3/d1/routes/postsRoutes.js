const express = require('express');
const router = express.Router();

const { getPosts, getPostedBy } = require('../controllers/postsController');

router.route('/').get(getPosts);
router.route('/postedBy').get(getPostedBy);
module.exports = router;
