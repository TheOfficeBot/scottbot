const express 		= require('express'),
	    morgan 		= require('morgan'),
	    path      	= require('path'),
	    bodyParser = require('body-parser')
	    // Router = require('./controllers/****'); // ADD WHEN DONE
var contentController = require('./controllers/content.js')
var db = require('./db/config.js')

// CONFIG (USE) ============================

const app = express();

app.use( morgan('dev') );
app.use( bodyParser.json() );

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

// ROUTING (GET) =============================
app.get('/api/content', contentController.get)
app.post('/api/addcontent', contentController.post)
// Connect controller for endpoint
//app.use('/api/tasks', taskRouter)
if (process.env.NODE_ENV === 'production') {
	app.get('*', (req, res) => {
		console.log("IN THE GET FOR PROD" )
			
		res.sendfile('client/build/index.html');
	})	
} else {
		app.get('*', (req, res) => {
		res.sendfile('./client/public/index.html');
	})	
}

