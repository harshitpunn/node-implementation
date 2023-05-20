require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4000;

// Routes here

const heroesRoute = require('./routes/heroesRoutes');

// Will be discussed in next
app.use(cors());

mongoose.connect('mongodb://localhost:27017/superheroes', {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.error('connected to database'));

app.use('/api/heroes', heroesRoute);

app.listen(port, () => {
  console.log('Server is running');
});
