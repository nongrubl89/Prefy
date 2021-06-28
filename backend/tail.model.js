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
  tail_crew: [
    {
      name: String,
      email: String,
      phone: String,
      position: String,
      preferredBreakfast: String,
      preferredSnacks: String,
      preferredLunch: String,
      preferredDinner: String,
      preferredDrinks: String,
    },
  ],
  tail_standardStock: {
    type: Array,
    require: false,
  },
  tail_passengers: [
    {
      name: String,
      preferences: String,
    },
  ],
});
module.exports = mongoose.model("Tail", Tail);
