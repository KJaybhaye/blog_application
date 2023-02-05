const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const {BadRequest} = require("../error");
const {Unathorized} = require("../error");
const {CustomError} = require("../error");

const updateUser = async (req, res, next) => {
  console.log(updateUser);
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    return next(Unathorized("Not authorized!"));
  }
}

const deleteUser = async (req, res, next) => {
  console.log(deleteUser);
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      return next(CustomError("User Not Found"), 404);
    }
  } else {
    return next(Unathorized("Not authorized!"));
  }
}

const getUser = async (req, res, next) => {
  console.log(getUser);
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {getUser, updateUser, deleteUser};