const app = require('./app');
const http = require('http');
/*const connection = */ require('./setupMongoose');

const server = http.createServer(app);

module.exports = server;