var express = require('express');
var router = express.Router();

var PostsController = require('../controllers/posts')

// JW additions 
var Posts = require('../models/post');
const multer  = require('multer');
const path = require('path');
const uploadPath = path.join('public', Posts.authorPhotoBasePath);
const upload = multer({
  dest: uploadPath
})
// END

router.get('/', PostsController.Index);
router.post('/', upload.single('authorPhoto'), PostsController.Create);
router.get('/new', PostsController.New);
router.post('/:id/likes', PostsController.CountLikes);

module.exports = router;
