const mongoose = require("mongoose");

const creatureSchema = new mongoose.Schema(
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

const Creature = mongoose.model("Creature", creatureSchema);

module.exports = Creature;
