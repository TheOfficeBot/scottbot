var mongoose = require('mongoose');

mongoURI = "mongodb://jackie:password@ds119738.mlab.com:19738/scottbot";
mongoose.connect(mongoURI, function(err){
	if(err){
		console.log("Error: failed connection", err)
	} else {
		console.log("Succes: connected to the db")
	}
});

var db = mongoose.connection;

module.exports=db;