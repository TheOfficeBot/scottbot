var helperFunc = require('../helpers/functions.js');
var seedData = require('../helpers/seedData.js');
var Activity = require('../models/activity.js');
var ActivityCtrl = require('../controllers/activity.js');
var contentControl = require('./content.js');

module.exports = {
  post: function (req, res) {
    var character = req.body.text;
  	console.log(req.body);
    if(character === '' || character === undefined){
      var randomNumber = helperFunc.randomize(seedData);
      //======
      var dataFromDB = contentControl.get();
      console.log(dataFromDB);
      //======
      var content = seedData[randomNumber];
      console.log("inside slack api controller logging content", content);
      var activity = new Activity({
        team_domain: req.body.team_domain,
      	channel_name: req.body.channel_name,
      	user_name: req.body.user_name,
      	character: req.body.text,
      	content: content.text
      });
      console.log("inside slack api controller logging content", content);
      ActivityCtrl.post(activity, res);
      res.send(content);
    }else {
      //console.log('inside else', character);
      var charMedia = helperFunc.filterChar(character.toLowerCase(), seedData);
      //console.log(charMedia);
      var randomNumber = helperFunc.randomize(charMedia);
      var content = charMedia[randomNumber];
      console.log("inside slack api controller logging content", content);
      var activity = new Activity({
        team_domain: req.body.team_domain,
      	channel_name: req.body.channel_name,
      	user_name: req.body.user_name,
      	character: req.body.text,
      	content: content.text
      });
      console.log("inside slack api controller logging content", content);
      ActivityCtrl.post(activity, res);
      res.send(content);
    }
  }
};
