const express 		= require('express'),
	   app = express(),
	    morgan 		= require('morgan'),
	    path      	= require('path'),
	    bodyParser = require('body-parser');
	    // Router = require('./controllers/****'); // ADD WHEN DONE
var contentController = require('./controllers/content.js')
var db = require('./db/config.js');
var slackAPI = require('./controllers/slackapi.js');
const request = require('request');

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
//.env file
var clientId = '111745854261.110999636593';
var clientSecret = '693955155b02e4b92ceeaf31b8bd9410';

// ROUTING (GET) =============================
app.get('/api/content', contentController.get);
app.post('/api/addcontent', contentController.post);
app.post('/api/slack', slackAPI.post);
app.get('/slack', function(req, res){
	console.log('oh shit req.query', req.query);

	// var data = {form: {
  //     client_id: process.env.SLACK_CLIENT_ID,
  //     client_secret: process.env.SLACK_CLIENT_SECRET,
  //     code: req.query.code
  // }};
	if (!req.query.code) {
			console.log(req.query.code);
      res.status(500);
      res.send({"Error": "Looks like we're not getting code."});
      console.log("Looks like we're not getting code.");
  }else {
		request({
			url: 'https://slack.com/api/oauth.access',
			qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret},
			method: 'GET'
		}, function(error, response, body){
			if(error){
				console.log('fuck we got an error', error);
			}else{
				res.json(body);
			}
		})
	}
});
// Connect controller for endpoint
//app.use('/api/tasks', taskRouter)

app.get('*', (req, res) => {
	res.sendfile('./client/public/index.html');
})
