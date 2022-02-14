var User = require('../models/user');

var UsersController = {
  New: function(req, res) {
    res.render('users/new', {});
  },

  Create: function(req, res) {
    var fileName = req.file != null ? req.file.filename : null;
    var user = new User ( {
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
      profilePhoto : fileName
    })

    user.save(function(err){
      if (err) {throw err;}
      res.status(201).redirect('/posts');
    })
    // JUST BLOCKING OUT ACTUAL FUNCTION TO SEE IF I CAN MANUALLY ADD IT 
    // var user = new User(req.body);
    // user.save(function(err) {
    //   if (err) { throw err; }
    //   res.status(201).redirect('/posts');
    // });
  }
};

module.exports = UsersController;
