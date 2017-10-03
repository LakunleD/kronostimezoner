const server = require('./server.js');

const io = require('socket.io')(server);

io.on('connection', () => {
});

module.exports = io;
