const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const server = express();
server.use(morgan('dev'));
server.use(bodyParser.json());

const getUsers = () => {
  const data = fs.readFileSync('users.json', 'utf-8');
  return JSON.parse(data).users;
};

// function to add/update users
const updateUser = (updatedUsers) => {
  fs.writeFileSync('users.json', JSON.stringify({ users: updatedUsers }));
};

// Get method
server.get('/', (request, response) => {
  response.send('Hello!');
});

// Get method for reading the users
server.get('/users', (request, response) => {
  const users = getUsers();
  response.json(users);
});

// single parameter

/*

1.
 for search, change country to country of your
 choice and implement the search logics whichwe implemented
 
 2. for post, change user's name and country as per your choice

 3. for put, change user id as per your choice

 4. for delete, change user id as per your choice 

 5. create an api which only shows name and country of users (get method api)

 all these middlewares should be different 
 
 */

const changeUserId = (req, res, next) => {
  req.params.id = 3;
  next();
};

server.get('/users/:id', changeUserId, (request, response) => {
  const users = getUsers();
  response.json(users.filter((userData) => userData.id == request.params.id));
});

// multiple parameters

server.get('/search/:id/:name/:country/:category', (request, response) => {
  const users = getUsers();

  // send the users whose id, name , country and category are exact match

  /*const searchResult = users.filter(
    (userData) =>
      userData.id == request.params.id &&
      userData.name == request.params.name &&
      userData.country == request.params.country &&
      userData.category == request.params.category
  );

  
}); */

  // send the users whose id or name and country matches

  /*const searchResult = users.filter(
    (userData) =>
      (userData.id == request.params.id ||
        userData.name == request.params.name) &&
      userData.country == request.params.country
  ); */

  /* const searchResult = users.filter(
    (userData) =>
      (userData.name == request.params.name ||
        userData.country == request.params.country) &&
      (userData.id == request.params.id ||
        userData.category == request.params.category)
  );

  response.json(searchResult); */

  // send the users whose name or country  and  id or category matches

  /*server.get('/users/:id/', (request, response) => {
  response.send('Multiple Paramters');*/
});

// Post endpoint
server.post('/users', (request, response) => {
  const users = getUsers();
  const newUser = { ...request.body, id: users.length + 1 };
  const updatedUsers = [...users, newUser];
  updateUser(updatedUsers);
  response.json(newUser);
});

server.put('/users', (request, response) => {
  // Update a particular user and return the whole user array of objects
  const users = getUsers();
  const updatedUserData = { ...request.body };
  const changedUsers = users.map((user) => {
    if (user.id == updatedUserData.id) {
      return updatedUserData;
    }
    return user;
  });

  updateUser(changedUsers);
  response.json(getUsers());
});

server.delete('/users', (request, response) => {
  const users = getUsers();
  const updatedUsers = users.filter((user) => user.id != request.body.id);
  updateUser(updatedUsers);
  response.json({ message: 'User Deleted' });
});

server.listen(5001, () => console.log('Server running on port:5001'));
