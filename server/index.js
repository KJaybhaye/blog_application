const express = require("express");
// const task_v1 = require("./routes/api_v1_tasks");
const users = require("./routes/users");
const posts = require("./routes/posts");
const cats = require("./routes/categories");
const auth = require("./routes/auth");
const images = require("./routes/images");
const multer = require("multer");
const path = require("path");
require("express-async-errors")

const connectDB = require("./db/connect");
require("dotenv").config();
const fs = require("fs");
const ImageModel = require("./models/Image");
const cors = require("cors");



const port = process.env.PORT || 5000;

const app = express();
app.set("view engine", "ejs");
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/images", express.static(path.join(__dirname, "/images")));

app.use("/api/v1/users", users);
app.use("/api/v1/posts", posts);
app.use("/api/v1/cats", cats);
app.use("/api/v1/auth", auth);
app.use("/api/v1/images", images);


// app.use(notFound);
// app.use(errorHandler);
// var storage = multer.memoryStorage(); 
const upload = multer()

app.post("/api/v1/upload", upload.any(), (req, res) => {
  var image = {};
	image['data'] = req.files[0].buffer;
	image['contentType'] = req.files[0].mimetype;
  const newImage = new ImageModel({
      image: image,
      name: req.body.name
  });
  newImage.save((err) => {
      if(err){
        return res.status(500).send("error while uploading!");
        console.log(err);
      }else{return res.send("upload successfule");}
  });
});

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