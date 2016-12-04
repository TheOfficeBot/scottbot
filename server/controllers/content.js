var Content = require('../models/content.js');

module.exports = {
		get: function(req,res){
			Content.find(function(err, content){
				if(err){
					return handleError(err);
				}
				if(content){
					res.json(content);
				}
			})
		},
		post: function(req,res){
			var content = new Content({
				name: req.body.name,
				text: req.body.text, 
				character: req.body.character,
				approved: req.body.approved,
				date: req.body.date
			})
			console.log("req.body in content post", req.body)
			content.save(function(err){
				if(err){
					throw(err);
				} else {
				console.log("this fires after the post hook")
				}
			}).then(function(arg){
				res.send("posted to db")
			})

		}



}
