var mongoose = require('mongoose');

mongoURI = "mongodb://jackie:password@ds119738.mlab.com:19738/scottbot";
mongoose.connect(mongoURI);

var db = mongoose.connection;

module.exports=db;