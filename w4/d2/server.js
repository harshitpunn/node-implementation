const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const moment = require('moment');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
