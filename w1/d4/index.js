const express = require('express');

const server = express();

server.use(express.urlencoded({ extended: true }));

server.set('view engine', 'ejs');

const users = [
  { name: 'Gohan', age: 32, id: 1 },
  { name: 'Goten', age: 24, id: 2 },
];

// develop API's to read users, add user, update user, delete user

server.get('/', (req, res) => {
  res.render('home', {
    title: 'Characters of Anime',
    subtitle: 'Drgaon Ball series',
    users,
  });
});

server.listen(3001, () => console.log('Server is running on 3001'));
