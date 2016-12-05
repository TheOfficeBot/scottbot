exports = module.exports = function (io) {
  // Set socket.io listeners.
  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('foo', (post) => {
      
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};