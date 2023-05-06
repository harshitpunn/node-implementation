const { hashPassword } = require('../helpers/userHelper');

const showRegisterForm = (req, res) => {
  res.render('register');
};

const registerUser = async (req, res) => {
  const userName = req.body.username;
  const hashedPassword = await hashPassword(req.body.password);

  console.log(hashedPassword);

  //req.session.username = userName;
  // res.redirect('/user/profile');
};

module.exports = {
  showRegisterForm,
  registerUser,
};
