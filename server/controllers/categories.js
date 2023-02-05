const Category = require("../models/Category");

const createCat = async (req, res, next) => {
    console.log("reg");
    console.log("crate cat")
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getCat = async (req, res, next) => {
    console.log("login");
    console.log("get cat");
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {createCat, getCat};