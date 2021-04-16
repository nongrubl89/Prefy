const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const PORT = 4000;
require("dotenv").config({ path: __dirname + "/../.env" });

const connectionString = process.env.DATABASE;

console.log("P", process.env);

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

MongoClient.connect(connectionString, (err, client) => {
  if (err) return console.error(err);
  console.log("Connected to Database");
});
