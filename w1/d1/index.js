const http = require('http');

const nameArray = [
  { name: 'Harry', location: 'British Columbia' },
  { name: 'Albert', location: 'Nova Scotia' },
  { name: 'Daniel', location: 'Alberta' },
];

const messageObject = { message: 'Hello, This is message' };

const server = http.createServer((req, res) => {
  if (req.url === '/paths') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      "<img src='https://i.pinimg.com/originals/b9/7d/97/b97d976b20e9889918becf0f5f4e7cbd.jpg' />"
    );
  }

  if (req.url === '/cats') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      "<img src='https://i.pinimg.com/originals/b9/7d/97/b97d976b20e9889918becf0f5f4e7cbd.jpg' />"
    );
  }

  if (req.url === '/house') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      "<img src='https://i.pinimg.com/originals/b9/7d/97/b97d976b20e9889918becf0f5f4e7cbd.jpg' />"
    );
  }

  if (req.url === '/names') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(nameArray));
  }

  if (req.url === '/message') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(messageObject));
  }

  res.end();
});

server.listen(5000, () => {
  console.log('This server is working !');
});
