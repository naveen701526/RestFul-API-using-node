const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// Routes

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

// Post a Post I guess
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

//Retrieve a  Specific Post from Database
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json({ post });
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete a post
router.delete('/:postId', async (req, res) => {
  try {
    const deletedPost = await Post.remove({ _id: req.params.postId });
    res.json({ deletedPost });
  } catch (error) {
    res.json({ message: error });
  }
});

// Update a Post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
