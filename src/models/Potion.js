const mongoose = require("mongoose");

const potionsSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    Description: {
      type: String,
    },
  },
  { strict: false }
);

const Potion = mongoose.model("Potion", potionsSchema);

module.exports = Potion;
