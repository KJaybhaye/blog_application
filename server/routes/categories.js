const express = require("express");
const {createCat, getCat} = require("../controllers/categories");

const router = express.Router();

router.route("/").post(createCat).get(getCat);

module.exports = router;