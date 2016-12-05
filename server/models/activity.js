var mongoose = require('mongoose');
// var db = require('../db');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
	team_domain: String,
	channel_name: String,
	user_name: String,
	character: String,
	content: String,
	date: {type: Date, default: Date.now}
})

var Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
