const posts = require('../models/posts');
const users = require('../models/users');

const getPosts = async (req, res) => {
  const postsList = await posts.postsModel.find({}).populate('users');
  res.json(postsList);
};

const getIndividualPosts = async (req, res) => {
  const individualPosts = await posts.postsModel
    .findById(req.params.id)
    .populate('users');
  res.json(individualPosts);
};

const getPostedBy = async (req, res) => {
  const postedBy = await posts.postsModel.find({}).populate('users');
  res.json(postedBy);
};

module.exports = { getPosts, getPostedBy, getIndividualPosts };
