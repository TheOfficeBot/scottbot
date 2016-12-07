var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contentSchema = new Schema({
	name: String,
	uri: String,
	character: String,
	response_type: {type: String, default: "in_channel"},
	approved: {type: Boolean, default: false},
	date: {type: Date, default: Date.now}
})

var Content = mongoose.model('Content', contentSchema);

module.exports = Content;
