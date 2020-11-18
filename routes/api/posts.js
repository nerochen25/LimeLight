const express = require('express');
const router = express.Router();

// Post Model
const Post = require('../../models/posts');

// @route GET api/posts
// @desc Get ALL Posts
// @access Public
router.get('/', (req, res) => {
    Post.find()
        .sort({ date: -1 })
        .then(posts => res.json(posts));
});

// @route GET api/posts/:id
// @desc Get One Post
// @access Public
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(404).json({success: false, err}));
});

// @route POST api/posts
// @desc Create A Post
// @access Public
router.post('/', (req, res) => {
    const newPost = new Post({
        text: req.body.text
    });

    newPost.save().then(post => res.json(post));
});

// @route DELETE api/posts/:id
// @desc Delete A Post
// @access Public
router.delete('/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => post.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({ success: false}));
    
});

module.exports = router;