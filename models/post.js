var mongoose = require('mongoose');
var authorPhotoBasePath = 'uploads/authorPhotos'; 


var PostSchema = new mongoose.Schema({
  message: String,
  likes: Number,
  author: String,
  createdAt: {
    type: String,
  },
  authorPhoto:{
    type:String
  }
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
module.exports.authorPhotoBasePath = authorPhotoBasePath;

