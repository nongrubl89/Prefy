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
const sharp = require("sharp");
const connectionString =
  "mongodb+srv://lisab:lisa@prefy1.jztot.mongodb.net/test";

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/public", express.static("public"));
app.use("/public/uploads", express.static(__dirname + "/public/uploads/"));

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
    cb(null, "./public/uploads");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });
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

prefyRoutes.put("/view/:id/calendar-edit", function (req, res, next) {
  Tail.findByIdAndUpdate(
    { _id: req.params.id },
    { $addToSet: { tail_trips: req.body } },
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
});

prefyRoutes.put(
  "/view/:id/crew-edit",
  upload.single("image"),
  async (req, res, next) => {
    const { filename: image } = req.file;
    await sharp(req.file.path)
      .resize(200, 200)
      .jpeg({ quality: 90 })
      .toFile(path.resolve(req.file.destination, "resized", image))
      .catch((error) => {
        console.log(error);
      });

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

prefyRoutes.route("/view/:id/crew").delete(async (req, res) => {
  const crewID = req.body.crewId;
  console.log(crewID);
  Tail.updateOne(
    {},
    {
      $pull: {
        tail_crew: {
          _id: crewID,
        },
      },
    }
  )
    .then((tail) => res.json(tail, "deleted"))
    .catch((err) => res.status(400).json(err));
});

app.use("/tails", prefyRoutes);
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
