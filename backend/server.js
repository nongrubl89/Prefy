const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const prefyRoutes = express.Router();
const PORT = 4000;
let Tail = require("./tail.model");
const MongoClient = require("mongodb").MongoClient;

app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/tails", { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("Mongooose database connection established successfully");
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
  let tail = new Tail(req.body);
  tail
    .save()
    .then((tail) => {
      res.status(200).json({ tail });
    })
    .catch((err) => {
      res.status(400).send("adding new tail failed");
    });
});

prefyRoutes.route("/view/:id").get(function (req, res) {
  let id = req.params.id;
  Tail.findById(id, function (err, tail) {
    res.json(tail);
  });
});

prefyRoutes.route("/edit/:id").get(function (req, res) {
  let id = req.params.id;
  Tail.findById(id, function (err, tail) {
    res.json(tail);
  });
});

prefyRoutes.route("/view/:id/crew-edit").put(function (req, res, next) {
  console.log("id", req.params.id);
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
});

// router.route('/update-student/:id').put((req, res, next) => {
//   studentSchema.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Student updated successfully !')
//     }
//   })
// })

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
