const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  console.log('request is here');
  fs.readFile('users.json', 'utf-8', (err, data) => {
    if (err) throw err;

    // Get method
    if (request.method === 'GET') {
      response.setHeader('content-type', 'application/json');
      response.write(data);
      response.end();
    } else {
      let bodyData = '';

      request.on('data', (chunk) => {
        bodyData += chunk;
      });

      request.on('end', () => {
        const jsonBody = JSON.parse(bodyData);
        const jsonData = JSON.parse(data);

        //Post
        if (request.method === 'POST') {
          const newUser = { id: jsonData.users.length + 1, ...jsonBody };
          const updateUsers = [...jsonData.users, newUser];
          fs.writeFile(
            'users.json',
            JSON.stringify({ users: updateUsers }),
            (err) => {
              if (err) throw err;

              response.setHeader('content-type', 'application/json');
              response.write(JSON.stringify(newUser));
              response.end();
            }
          );
        }

        // PUT method

        if (request.method === 'PUT') {
          let updateUser = {};
          const updatedUsers = jsonData.users.map((user) => {
            if (user.id === jsonBody.id) {
              updateUser = {
                ...user,
                name: jsonBody.name,
                country: jsonBody.country,
              };
              return updateUser;
            }
            return user;
          });
          fs.writeFile(
            'users.json',
            JSON.stringify({ users: updatedUsers }),
            (err) => {
              if (err) throw err;
              response.setHeader('content-type', 'application/json');
              response.write(JSON.stringify(updatedUsers));
              response.end();
            }
          );
        }

        // Delete

        if (request.method === 'DELETE') {
          const updatedUsers = jsonData.users.filter(
            (user) => user.id !== jsonBody.id
          );
          fs.writeFile(
            'users.json',
            JSON.stringify({ users: updatedUsers }),
            (err) => {
              if (err) throw err;

              response.setHeader('content-type', 'application/json');
              response.write(JSON.stringify({ message: 'User deleted' }));
              response.end();
            }
          );
        }
      });
    }
  });
});

server.listen(3001, () => {
  console.log(' This is a crud operation on 3001');
});
