const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Tail = new Schema({
  tail_number: {
    type: String,
    require: true,
  },
  tail_icao: {
    type: String,
    require: true,
  },
  tail_owner: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Tail", Tail);
