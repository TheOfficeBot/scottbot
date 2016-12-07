var Activity = require('../models/activity.js');
const socket =require('../server').io
console.log('APP',  socket.emit)
    



module.exports = {
    get: function(req, res) {
        Activity.find(function(err, content) {
            if (err) {
                return handleError(err);
            }
            if (content) {
                res.json(content);
            }
        })
    },
    post: function(req, res) {
        // var activty = new Activity({
        //   team_domain: ,
        //  channel_name: ,
        //  user_name: ,
        //  character: ,
        //  content: ,
        //  date:
        // })
        console.log("req in content post", req)
        req.save(function(err) {
            if (err) {
                throw (err);
            } else {
                console.log("this fires after the post hook")
            }
        }).then(function(arg) {
            socket.emit('activity', { hello: 'world' });
            res.send("posted to db")
            // emit socket stuff
        })
    }
}

