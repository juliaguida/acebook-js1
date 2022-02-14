var mongoose = require('mongoose');
var profilePhotoBasePath = 'uploads/profilePhotos'

var UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  username:String,
  profilePhoto: {
    type: String
  }

});

var User = mongoose.model('User', UserSchema);

module.exports = User;
module.exports.profilePhotoBasePath = profilePhotoBasePath;
