const express = require('express');

const router = express.Router();

const {
  getAllPost,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require('./controller');

router.route('/')
    .get(getAllPost)
    .post(createPost);

router.route('/:id')
    .get(getPost)
    .put(updatePost)
    .delete(deletePost);
    
module.exports = router;
