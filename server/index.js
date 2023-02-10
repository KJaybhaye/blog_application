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


const port = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/images", express.static(path.join(__dirname, "/images")));

app.use("/api/v1/users", users);
app.use("/api/v1/posts", posts);
app.use("/api/v1/cats", cats);
app.use("/api/v1/auth", auth);


// app.use(notFound);
// app.use(errorHandler);
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/images')      //you tell where to upload the files,
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name)
  }
})

var upload = multer({storage: storage,
    onFileUploadStart: function (file) {
      console.log(file.originalname + ' is starting ...')
    },
});

app.post('/api/v1/upload', upload.single('file'), function (req, res, next) {
  res.send("image uploaded!");
})
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