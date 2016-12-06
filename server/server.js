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
// ROUTING (GET) =============================
app.get('/api/content', contentController.get);
app.post('/api/addcontent', contentController.post);
app.post('/api/slack', slackAPI.post);
app.get('/slack', function(req, res){
	console.log('oh shit req.query', req.query);
	if (!req.query.code) {
			console.log(req.query.code);
      res.status(500);
      res.send({"Error": "Looks like we're not getting code."});
      console.log("Looks like we're not getting code.");
  }
	var data = {form: {
      client_id: process.env.SLACK_CLIENT_ID,
      client_secret: process.env.SLACK_CLIENT_SECRET,
      code: req.query.code
  }};
	request.post('https://slack.com/api/oauth.access', data, function(error, response, body){
		if(!error && response.statusCode == 200) {
			var token = JSON.parse(body).access_token;
			request.post('https://slack.com/api/team.info', {form: {token: token}}, function (error, response, body){
				if (!error && response.statusCode == 200) {
          if(JSON.parse(body).error == 'missing_scope') {
            res.send('The Office slash commands have been added to your team!');
          } else {
            let team = JSON.parse(body).team.domain;
            res.redirect('http://' +team+ '.slack.com');
          }
        }
			});
		}
	});
});
// Connect controller for endpoint
//app.use('/api/tasks', taskRouter)

app.get('*', (req, res) => {
	res.sendfile('./client/public/index.html');
})
