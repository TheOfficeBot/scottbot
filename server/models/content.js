var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contentSchema = new Schema({
	name: String,
	uri: String,
	character: String,
	approved: {type: Boolean, default: true},
	date: {type: Date, default: Date.now}
})

var Content = mongoose.model('Content', contentSchema);


module.exports = Content;