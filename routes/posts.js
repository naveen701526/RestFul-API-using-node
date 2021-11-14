const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// Routes

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();

    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
