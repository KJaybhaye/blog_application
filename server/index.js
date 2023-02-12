const express = require("express");
// const task_v1 = require("./routes/api_v1_tasks");
const users = require("./routes/users");
const posts = require("./routes/posts");
const cats = require("./routes/categories");
const auth = require("./routes/auth");
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


// app.use(notFound);
// app.use(errorHandler);
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, __dirname + '/images')      //you tell where to upload the files,
//   },
//   filename: function (req, file, cb) {
//     cb(null, req.body.name)
//   }
// })

// var upload = multer({storage: storage,
//     onFileUploadStart: function (file) {
//       console.log(file.originalname + ' is starting ...')
//     },
// });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      req.body.name
    );
  },
});
const upload = multer({ storage: storage });

// app.post('/api/v1/upload', upload.single('file'), function (req, res, next) {
//   res.send("image uploaded!");
// })
app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  const obj = {
      img: {
          data: fs.readFileSync(path.join(__dirname + "/images/" + req.body.name)),
          contentType: "image/jpeg"
      }
  }
  const newImage = new ImageModel({
      image: obj.img
  });
  newImage.save((err) => {
      err ? console.log(err) : res.redirect("/");
  });
});

app.get("/api/v1/images/:id",  (req, res) => {
  ImageModel.find({name: req.params.id}, (err, images) => {
    if (err) {
        // console.log(err);
        res.status(500).send("An error occurred", err);
    } else {
        res.status(200).send(images);
    }
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