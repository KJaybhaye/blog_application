const express = require("express")
// const User = require("../models/User");
// const Post = require("../models/Post");
// const bcrypt = require("bcrypt");
const {getUser, updateUser, deleteUser} = require("../controllers/users");

const router = express.Router();

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
// //UPDATE
// router.put("/:id", async (req, res) => {
// });

// //DELETE
// router.delete("/:id", async (req, res) => {

// });

// //GET USER
// router.get("/:id",) 

module.exports = router;