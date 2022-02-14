var mongoose = require('mongoose');
const path = require('path');
var profilePhotoBasePath = 'uploads/profilePhotos';

var UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  username:String,
  profilePhoto: {
    type: String
  }

});

var User = mongoose.model('User', UserSchema);

// UserSchema.virtual('profilePhotoPath').get(function(){
//   if(this.profilePhoto !=null){
//     return path.join('/', profilePhotoBasePath, this.profilePhoto)}
// });

module.exports = User;
module.exports.profilePhotoBasePath = profilePhotoBasePath;
