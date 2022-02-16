var express = require('express');
var router = express.Router();



var PhotosController = require('../controllers/photos')

var Photos = require('../models/photos');
const multer  = require('multer');
const path = require('path');
const uploadPath = path.join('public', Photos.postedPhotoBasePath);
const upload = multer({
  dest: uploadPath
})

router.get('/', PhotosController.Index);
router.post('/', upload.single('postedPhoto'), PhotosController.Create);
router.get('/upload', PhotosController.New);

module.exports = router;