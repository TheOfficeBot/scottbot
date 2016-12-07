const express 		= require('express'),
	   app = express(),
	    morgan 		= require('morgan'),
	    path      	= require('path'),
	    bodyParser = require('body-parser'),
	   server = require('http').Server(app),
	   io = require('socket.io')(server);

var contentController = require('./controllers/content.js');
var activityController = require('./controllers/activity.js');
var db = require('./db/config.js');
var slackAPI = require('./controllers/slackapi.js');

// CONFIG (USE) ============================
app.use( morgan('dev') );
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use('/',express.static('client/build'));
} else {
   app.use('/', express.static(path.join(__dirname, 'public')));
}

// LISTEN (SET) =============================
app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), function(){
	console.log('API Server started: http://localhost:' + app.get('port') + '/');
})

// SOCKET  ==== ==============================
  io.on('connection', (socket) => {
    console.log('a user connected');

  });
server.listen(8080)
// var socketio = require('socket.io');
// exports.socketServer = function (app, server) {
//   var io = socketio.listen(server);

//   io.sockets.on('connection', function (socket) {
    
//   });
// };

// ROUTING (GET) =============================
app.get('/api/content', contentController.get);
app.post('/api/content', contentController.post);
app.put('/api/content', contentController.put);
app.post('/api/slack', slackAPI.post);
app.get('/api/activity', activityController.get);
app.get('*', (req, res) => {
	res.sendfile('./client/public/index.html');
})
