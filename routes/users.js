var express = require('express');
var router = express.Router();

var UsersController = require('../controllers/users');

// JW additions 
var User = require('../models/user');
const multer  = require('multer');
const path = require('path');
const uploadPath = path.join('public', User.profilePhotoBasePath);
const imageMimeTypes = ['images/jpeg', 'images/png', 'images/gif'];
const upload = multer({
  dest: uploadPath,
  fileFilter: (req, file, callback) => {
    callback(null,imageMimeTypes.includes(file.mimetype))
  }
})
// END

router.get('/new', UsersController.New);
// router.post('/', UsersController.Create);
router.post('/', upload.single('photo'), UsersController.Create);

module.exports = router;
