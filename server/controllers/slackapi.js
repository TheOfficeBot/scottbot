var helperFunc = require('../helpers/functions.js');
//var seedData = require('../helpers/seedData.js');
var Activity = require('../models/activity.js');
var ActivityCtrl = require('../controllers/activity.js');
//var contentControl = require('./content.js');
var Content = require('../models/content.js');

module.exports = {
  post: function (req, res) {
    var character = req.body.text;
  	//console.log(req.body);
    if(character === '' || character === undefined){

  		Content.find({})
        .then(result=>{
          var dataFromDB = helperFunc.filterApproved(result);
          console.log('yoooooo this is filtered...', dataFromDB);
          var randomNumber = helperFunc.randomize(dataFromDB);
          var contentObject = dataFromDB[randomNumber];
          var activity = new Activity({
            team_domain: req.body.team_domain,
          	channel_name: req.body.channel_name,
          	user_name: req.body.user_name,
          	character: req.body.text,
          	content: contentObject.text
          });
          //console.log("inside slack api controller logging content", content);
          ActivityCtrl.post(activity, res);
          res.send(contentObject);
        })
        .catch(err=>{
          console.log('error', err);
      })
    }else {
      // var charMedia = helperFunc.filterChar(character.toLowerCase(), seedData);
      // var randomNumber = helperFunc.randomize(charMedia);
      // var content = charMedia[randomNumber];
      // var activity = new Activity({
      //   team_domain: req.body.team_domain,
      // 	channel_name: req.body.channel_name,
      // 	user_name: req.body.user_name,
      // 	character: req.body.text,
      // 	content: content.text
      // });
      //
      // ActivityCtrl.post(activity, res);
      // res.send(content);
      //================
      Content.find({})
        .then(result=>{
          var dataFromDB = helperFunc.filterApproved(result);
          var charMedia = helperFunc.filterChar(character.toLowerCase(), dataFromDB);
          console.log('yoooooo this is filtered...', dataFromDB);
          var randomNumber = helperFunc.randomize(charMedia);
          var contentObject = charMedia[randomNumber];
          var activity = new Activity({
            team_domain: req.body.team_domain,
          	channel_name: req.body.channel_name,
          	user_name: req.body.user_name,
          	character: req.body.text,
          	content: contentObject.text
          });
          //console.log("inside slack api controller logging content", content);
          ActivityCtrl.post(activity, res);
          res.send(contentObject);
        })
        .catch(err=>{
          console.log('error', err);
      })



    }
  }
};
