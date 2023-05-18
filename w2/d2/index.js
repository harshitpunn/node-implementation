require('dotenv').config();

const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const postData = [
  {
    title: 'ABC',
    username: 'Harshit',
  },
  {
    title: 'Magazine',
    username: 'Clara',
  },
];

app.post('/posts', authenticateToken, (req, res) => {
  res.json(postData.filter((post) => post.username == req.user.user));
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

app.listen(3000);
