var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contentSchema = newSchema({
	name: String,
	uri: String,
	character: String,
	approved: {type: Boolean, default: true},
	date: {type: Date, default: Date.now}
})

module.exports= mongoose.model('Content', contentSchema);
