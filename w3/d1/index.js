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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// movie routes
app.use('/api/movies', moviesRoute);

app.listen(port, () => {
  console.log('Server is running');
});
