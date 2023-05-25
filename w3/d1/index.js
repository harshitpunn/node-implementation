const path = require('path');
// to get env variables
require('dotenv').config({ path: path.resolve(__dirname, '.', '.env') });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

// movies route variable
const moviesRoute = require('./routes/movieRoutes');
const authenticationRoute = require('./routes/authenticationRoutes');
const postRoute = require('./routes/postsRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/authexample', {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.error('connected to database'));

// movie routes
app.use('/api/movies', moviesRoute);
app.use('/api/auth', authenticationRoute);
app.use('/api/posts', postRoute);

app.listen(port, () => {
  console.log('Server is running');
});
