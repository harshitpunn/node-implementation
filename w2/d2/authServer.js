require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

app.post('/login', (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const user = { user: username };

  console.log(generateAccessToken(user));
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: '15s' });
}

app.listen(4000);
