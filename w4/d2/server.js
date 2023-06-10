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

io.on('connection', (socket) => {
  const { username, room } = socket.handshake.query;

  socket.join(room); // creating a room

  console.log('A client has connected');

  socket.on('message', (message) => {
    console.log('message in server', message);

    io.to(room).emit('message', {
      username,
      text: message,
      time: moment().format('hh:mm a'),
    });
  });

  socket.on('disconnect', () => {
    console.log('A client has disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
