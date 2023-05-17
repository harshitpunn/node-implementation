var cookieSession = require('cookie-session');
var express = require('express');

var app = express();

app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],

    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.get('/login', (req, res) => {
  req.session.username = 'Harry';
  console.log(req.session);
  res.send('logged');
});

app.get('/profile', (req, res) => {
  if (!req.session.username) return res.redirect('/');
  res.send('logged in');
});

app.get('/', (req, res) => {
  console.log(req.session);
  res.send('Works');
});

app.get('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
});

app.listen(3000);
