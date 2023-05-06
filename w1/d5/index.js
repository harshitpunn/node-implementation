const cookieSession = require('cookie-session');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(8080, () => console.log('server running'));
