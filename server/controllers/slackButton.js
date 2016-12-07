var clientId = '111745854261.110999636593';
var clientSecret = '693955155b02e4b92ceeaf31b8bd9410';
const request = require('request');

module.exports = function(req, res){
	console.log('oh shit req.query', req.query);

	if (!req.query.code) {
			console.log(req.query.code);
      res.status(500);
      res.send({"Error": "Looks like we're not getting code."});
      console.log("Looks like we're not getting code.");
  }else {
		//console.log(process.env.SLACK_CLIENT_ID);
		request({
			url: 'https://slack.com/api/oauth.access',
			qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret},
			method: 'GET'
		}, function(error, response, body){
			console.log('boddyyyyyy!!!',body);
			if(error){
				console.log('fuck we got an error', error);
			}else{
				res.json(body);

			}
		})
	}

}
