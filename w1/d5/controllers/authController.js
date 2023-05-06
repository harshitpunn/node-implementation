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

const logoutUser = (req, res) => {
  req.session = null;
  res.redirect('/auth/login');
};

module.exports = {
  showRegisterForm,
  registerUser,
  logoutUser,
};
