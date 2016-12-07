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
		put: function(req,res){
			var query = {_id: req.body._id};
			console.log("query in put", query);
			Content.update(query, { $set: { approved: 'true' }}, function(err, update){
				if(err){
					return handle(err);
				}
				if(update){
					console.log("update in put", update);
					res.json(update);
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
