const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const server = express();

server.use(morgan('dev'));
server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'ejs');

const getUsers = () => {
  const data = fs.readFileSync('users.json', 'utf-8');
  return JSON.parse(data).users;
};

const updateUser = (updatedUsers) => {
  fs.writeFileSync('users.json', JSON.stringify({ users: updatedUsers }));
};

server.get('/', (req, res) => {
  const users = getUsers();
  res.render('userData', {
    title: 'This is test',
    subtitle: 'This is just a statement',
    users,
  });
});

server.post('/', (req, res) => {
  const user = getUsers();
  const newUser = { ...req.body, id: user.length + 1 };
  const updatedUsers = [...user, newUser];
  updateUser(updatedUsers);
  res.redirect('/');
});

// develop the endpoints to edit , delete the users in users.json

server.listen(3000, () => console.log('Server is working on Port 3000'));
