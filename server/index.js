const express = require("express");
// const task_v1 = require("./routes/api_v1_tasks");
const users = require("./routes/users");
const posts = require("./routes/posts");
const cats = require("./routes/categories");
const auth = require("./routes/auth");
const multer = require("multer");
const path = require("path")

const connectDB = require("./db/connect");
require("dotenv").config();
// const notFound = require("./middleware/not-found");
// const errorHandler = require("./middleware/errorHandlers");

// import { express } from "express";
// import {connectDB} from "./db/connect.js";
// import "dotenv/config";

const port = process.env.PORT || 5000;

const app = express();

// app.use(express.static("./public"));
// // note express.json etc before routing with use
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use("/api/v1/users", users);
app.use("/api/v1/posts", posts);
app.use("/api/v1/cats", cats);
app.use("/api/v1/auth", auth);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })
  

app.post("/api/v1/upload", upload.single("file"), (req, res) => {
    // console.log(upload);
    res.status(200).json("File has been uploaded");
  });

// app.use(notFound);
// app.use(errorHandler);


const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Listening at port ${port}`);
        });
    }
    catch(error){
        console.log(error);
    }
}

start();