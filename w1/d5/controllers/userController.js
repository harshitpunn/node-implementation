const users = require('../models/users.json');

const showUserProfile = (req, res) => {
  const username = req.session.username;

  if (!username && users.test.username == username)
    return res.redirect('/auth/login');

  const userData = users.test;

  res.render('profile', { userData });
};

module.exports = { showUserProfile };
