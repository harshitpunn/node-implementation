require('dotenv').config();

const express = require('express');
//const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

const heroesRoute = require('./routes/heroesRoutes');
const communityRoute = require('./routes/communityRoutes');
const enemyRoute = require('./routes/enemyRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cors());

mongoose.connect('mongodb://localhost:27017/superheroes', {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.error('connected to database'));

app.use('/api/heroes', heroesRoute);
app.use('/api/community', communityRoute);
app.use('/api/enemy', enemyRoute);

app.listen(port, () => {
  console.log('Server is running');
});
