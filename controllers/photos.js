var Photo = require('../models/photos');

var PhotosController = {
  Index: function(req, res) {
    
    Photo.find(function(err, photos) {
      if (err) { throw err; }

      res.render('photos/index', { photos: photos.reverse(), username: req.session.user.username, profilePhoto: req.session.user.profilePhoto });
    });
  },
  New: function(req, res) {
    res.render('photos/upload', {});
  },
  Create: function(req, res, next)  {
    var fileName = req.file != null ? req.file.filename : null;
    var photo = new Photo ( {
      title: req.body.title,
      desc: req.body.desc,
      postedPhoto : fileName,
    })

    photo.save(function(err){
      if (err) {throw err;}
      res.status(201).redirect('/photos');
    })
  }
};

module.exports = PhotosController;