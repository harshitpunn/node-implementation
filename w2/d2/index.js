const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

app.listen(3000);