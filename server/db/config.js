var mongoose = require('mongoose');
mongoose.Promise = require('bluebird')

mongoURI = "mongodb://jackie:password@ds119738.mlab.com:19738/scottbot";
mongoose.connect(mongoURI, function(err){
	if(err){
		console.log("Error: failed connection", err)
	} else {
		console.log("Success: connected to the db")
	}
});

var db = mongoose.connection;

module.exports=db;
