var Post = require('../models/post');

var PostsController = {
  Index: function(req, res) {
    Post.find(function(err, posts) {
      if (err) { throw err; }

      res.render('posts/index', { posts: posts.reverse() });
    });

  },
  New: function(req, res) {
    res.render('posts/new', {});
  },
  Create: function(req, res) {
    var post = new Post(req.body);
    post.save(function(err) { 
      if (err) { throw err; }

      res.status(201).redirect('/posts');
    });
  },

  CountLikes: function(req,) {
    Post.findByIdAndUpdate(
      req.params.id,
       { $inc: { likes: 1 } },
      {new: true}, 
      function(err) {
        if (err) { throw err; }
      }
    )
  }
};

module.exports = PostsController;
