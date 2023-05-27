const users = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { hashPassword } = require('../helpers/userHelper');

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await hashPassword(password);
  try {
    const userObject = {
      username: username,
      password: hashedPassword,
    };
    const createUser = await users.usersModel.create(userObject);
    res.json(createUser);
  } catch (error) {
    res.json({
      error: true,
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await users.usersModel.findOne({ username }).lean();
    if (!user) {
      res.json({
        error: true,
        message: 'User not found!',
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = generateAccessToken(user);
      res.json({ accessToken: accessToken });
      return;
    }
    res.json({
      error: true,
      message: 'Invalid credentials!',
    });
  } catch (error) {
    res.json({
      error: true,
      message: error.message,
    });
  }
};

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' });
}

module.exports = { registerUser, loginUser };
