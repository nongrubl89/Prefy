const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const prefyRoutes = express.Router();
const PORT = 4000;
let Tail = require("./tail.model");
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const connectionString =
  "mongodb+srv://lisab:lisa@prefy1.jztot.mongodb.net/test";

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("./uploads", express.static("uploads"));

//connect to mongoose
mongoose.connect("mongodb://127.0.0.1:27017/tails", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("Mongooose database connection established successfully");
});

//connect to mongodb
MongoClient.connect(connectionString, (err, client) => {
  if (err) return console.error(err);
  console.log("Connected to Database");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// const upload = multer({ storage: storage }).single("image");

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 3024 * 3024 * 5,
  },
});

prefyRoutes.route("/").get(function (req, res) {
  Tail.find(function (err, tails) {
    if (err) {
      console.log(err);
    } else {
      res.json(tails);
    }
  });
});

prefyRoutes.route("/add").post(function (req, res) {
  let tail = new Tail(req.body, { strict: false });
  tail
    .save()
    .then((tail) => {
      res.status(200).json({ tail });
    })
    .catch((err) => {
      res.status(400).send("adding new tail failed");
    });
});

prefyRoutes.get("/view/:id", function (req, res) {
  let id = req.params.id;
  Tail.findById(id, function (err, tail) {
    res.json(tail);
  });
});

prefyRoutes.get("/edit/:id", function (req, res) {
  let id = req.params.id;
  Tail.findById(id, function (err, tail) {
    res.json(tail);
  });
});

prefyRoutes.put(
  "/view/:id/crew-edit",
  upload.single("image"),
  (req, res, next) => {
    console.log(req.body);
    req.body.image = [];
    req.body.image.push(req.file);
    console.log(req.body.image);
    Tail.findByIdAndUpdate(
      { _id: req.params.id },
      { $addToSet: { tail_crew: req.body } },
      (error, success) => {
        if (error) {
          // console.log(error);
          return next(error);
        } else {
          res.json(success);
          console.log("success");
        }
      }
    );
  }
);

prefyRoutes.route("/:id").delete((req, res) => {
  console.log(req.params);
  Tail.findOneAndDelete(req.params.delete)
    .then((tail) => res.json(tail))
    .catch((err) => res.status(400).json(err));
});

app.use("/tails", prefyRoutes);
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
