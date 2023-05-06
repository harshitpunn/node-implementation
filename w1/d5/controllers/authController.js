const bcrypt = require('bcrypt');
const { hashPassword } = require('../helpers/userHelper');
const users = require('../models/users.json');

const showRegisterForm = (req, res) => {
  res.render('register');
};

const registerUser = async (req, res) => {
  const userName = req.body.username;
  const hashedPassword = await hashPassword(req.body.password);
  // skipping the step to store data in users.json as of now
  req.session.username = userName;
  res.redirect('/user/profile');
};

const showLoginForm = (req, res) => {
  res.render('login');
};

const logoutUser = (req, res) => {
  req.session = null;
  res.redirect('/auth/login');
};

const loginUser = async (req, res) => {
  const receivedUsername = req.body.username;
  const receivedPassword = req.body.password;

  const user = users.test.username == receivedUsername ? users.test : null;

  let isMatch;

  if (user) {
    isMatch = await bcrypt.compare(receivedPassword, user.password);
  }

  if (!user || !isMatch) return res.send('Invalid username or password');

  if (isMatch) {
    req.session.username = receivedUsername;
    return res.redirect('/user/profile');
  }
};

module.exports = {
  showRegisterForm,
  loginUser,
  showLoginForm,
  registerUser,
  logoutUser,
};
