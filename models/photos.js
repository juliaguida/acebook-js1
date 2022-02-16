var mongoose = require('mongoose');
var postedPhotoBasePath = 'uploads/postedPhotos';

var photoSchema = new mongoose.Schema({
  title: String,
  desc: String,
  // createdAt: {
  //   type: Date,
  //   default: () => Date.now()
  // },
  postedPhoto:{
    type:String
  }

});

var Photo = new mongoose.model('Photo', photoSchema);

module.exports = Photo;
module.exports.postedPhotoBasePath = postedPhotoBasePath;