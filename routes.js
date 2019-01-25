const hapi = require('hapi');

// create server
const server = hapi.Server({
  host: 'localhost',
  port: 7000,
});

// handle routing
server.route({
  path: '/{name}',
  method: 'GET',
  handler: (request, h) => {
    return `Hello ${encodeURIComponent(request.params.name)}`;
  },
});

// create startListening function for start server for listening on port
const startListening = async () => {
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};
startListening();
module.exports = server;
