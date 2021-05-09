const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
  },
  { strict: false }
);

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
