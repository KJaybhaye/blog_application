const mongoose = require("mongoose");
// import mongoose from "mongoose";


const connectDB = (url) => {
    mongoose.set('strictQuery', false);//depratcation warning
    return mongoose.connect(url);
}

module.exports = connectDB;
// export {connectDB};