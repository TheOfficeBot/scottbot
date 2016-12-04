var helperFunc = require('../helpers/functions.js');
var seedData = require('../helpers/seedData.js');

module.exports = {
  post: function (req, res) {
    var character = req.body.text;
  	console.log(req.body);
    if(character === '' || character === undefined){
      console.log('inside if');
      var randomNumber = helperFunc.randomize(seedData);
      res.send(seedData[randomNumber]);
    }else {
      console.log('inside else', character);
      var charMedia = helperFunc.filterChar(character.toLowerCase(), seedData);
      //console.log(charMedia);
      var randomNumber = helperFunc.randomize(charMedia);
      res.send(charMedia[randomNumber]);
    }

    //seedData[randomNumber]
  }
};
