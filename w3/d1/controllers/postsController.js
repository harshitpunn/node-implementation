const posts = require('../models/posts');
const users = require('../models/users');

const getPosts = async (req, res) => {
  const postsList = await posts.postsModel.find({});
  res.json(postsList);
};

const getPostedBy = async (req, res) => {
  const postedBy = await users.usersModel.find({}).populate('posts');
  res.json(postedBy);
};

module.exports = { getPosts, getPostedBy };
