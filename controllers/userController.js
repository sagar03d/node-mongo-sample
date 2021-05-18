const User = require('../models/user.js');

exports.create = function(req, res){
	  // Create a User
    const user = new User({
        name: req.body.email || "Untitled Note", 
        position: "CEO"
    });

    // Save Note in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
    
  	// return res.json({'success' : true, 'message' : 'Sucess'});
};

exports.index = function (req, res){
	let users = User.find(function (err, allDetails) {
	    if (err) {
	        console.log(err);
	    } else {
	        res.send({ details: allDetails })
	    }
	});
};