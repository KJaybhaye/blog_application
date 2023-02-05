const express = require("express");
// const User = require("../models/User");
// const Post = require("../models/Post");
const {getAllPosts, getPost, createPost, updatePost, deletePost} = require("../controllers/posts");


const router = express.Router();

router.route("/:id").put(updatePost).delete(deletePost).get(getPost);
router.route("/").post(createPost).get(getAllPosts);


module.exports = router;