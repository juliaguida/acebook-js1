var mongoose = require('mongoose');
const path = require('path');
var authorPhotoBasePath = 'uploads/authorPhotos'; 


var PostSchema = new mongoose.Schema({
  message: String,
  author: String,
  createdAt: {
    type: Date,
    default: () => Date.now()
  },
  authorPhoto:{
    type:String
  }
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
module.exports.authorPhotoBasePath = authorPhotoBasePath;

