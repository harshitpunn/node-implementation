const http = require('http');
const fs = require('fs');

const favMovies = [
  { name: 'Avengers', year: '2012' },
  { name: 'Batman', year: '2006' },
];

const server = http.createServer((request, response) => {
  // reading a file
  if (request.url === '/readFile') {
    fs.readFile('main.html', 'utf8', (error, data) => {
      if (error) {
        console.log('error on read file', error);
      } else {
        console.log('content of this file', data);
        response.writeHead(200, { 'content-type': 'text/html' });
        response.write(data);
        response.end();
      }
    });
  }

  // creating a file
  if (request.url === '/createFile') {
    fs.writeFile('index2.html', '<h1>This is content</h1>', (err) => {
      if (err) {
        console.log('Error on create file', err);
      } else {
        response.writeHead(201, { 'content-type': 'application/json' });
        response.write(JSON.stringify({ message: 'File created.' }));
        response.end();
      }
    });
  }

  // updating a file

  if (request.url === '/updateFile') {
    fs.appendFile('index2.html', '<h1>Very Sunny day!</h1>', (err) => {
      if (err) {
        console.log('Error on create file', err);
      } else {
        response.writeHead(201, { 'content-type': 'application/json' });
        response.write(JSON.stringify({ message: 'File Updated!' }));
        response.end();
      }
    });
  }

  // deleting a file

  if (request.url === '/deleteFile') {
    fs.unlink('index2.html', (err) => {
      if (err) {
        console.log('Error on delete file', err);
      } else {
        response.writeHead(200, { 'content-type': 'application/json' });
        response.write(JSON.stringify({ message: 'File Deleted!' }));
        response.end();
      }
    });
  }

  // renaming a file

  if (request.url === '/renameFile') {
    fs.rename('index.html', 'main.html', (err) => {
      if (err) {
        console.log('Error on renaming file', err);
      } else {
        response.writeHead(200, { 'content-type': 'application/json' });
        response.write(JSON.stringify({ message: 'File renamed!' }));
        response.end();
      }
    });
  }

  // end point for fav movies
  if (request.url === '/favmovies') {
    console.log('method', request.method);
    response.writeHead(200, { 'content-type': 'application/json' });
    response.write(JSON.stringify({ favMovies }));
    response.end();
  }
});

server.listen(3000, () => {
  console.log('Server on Port: 3000');
});
