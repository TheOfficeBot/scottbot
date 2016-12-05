var Activity = require('../models/activity.js');


//export
//post method
//instantiate row in collection


module.exports = {
  post: function(req, res){
    // var activty = new Activity({
    //   team_domain: ,
    // 	channel_name: ,
    // 	user_name: ,
    // 	character: ,
    // 	content: ,
    // 	date:
    // })
    console.log("req in content post", req)
    req.save(function(err){
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
