const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
  if (req.cookies.username) {
    res.send('You have a cookie');
    return;
  }
  res.send("You don't have a cookie");
});

app.get('/clearcookie', (req, res) => {
  res.clearCookie('username');
  res.redirect('/');
});

app.listen(3000, () => console.log('Server is running'));
