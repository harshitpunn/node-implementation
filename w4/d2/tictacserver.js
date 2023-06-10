const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = 3000;
app.use(express.static(path.join(__dirname, 'exercise')));

io.on('connection', (socket) => {
  console.log('A client connected');
  socket.on('click', (click) => {
    io.emit('new_move', click);
  });
  socket.on('disconnect', () => {
    console.log('A client has disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
