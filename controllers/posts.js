var Post = require('../models/post');

var PostsController = {
  Index: function(req, res) {

    Post.find(function(err, posts) {
      if (err) { throw err; }
      
      res.render('posts/index', { posts: posts.reverse(),  username: req.session.user.username, profilePhoto: req.session.user.profilePhoto});
    });
  },
  New: function(req, res) {
    res.render('posts/new', {});
  },
  Create: function(req, res) {
    const options = { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }
    var fileName = req.file != null ? req.file.filename : null;
    var post = new Post ( {
      message: req.body.message,
      author: req.body.author,
      createdAt: new Date().toLocaleDateString("en-GB", options),
      authorPhoto : fileName
    })

    post.save(function(err){
      if (err) {throw err;}
      res.status(201).redirect('/posts');
    })
  }
};

module.exports = PostsController;
