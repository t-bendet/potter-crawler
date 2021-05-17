const mongoose = require("mongoose");

const spellsSchema = new mongoose.Schema(
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

const Spell = mongoose.model("Spell", spellsSchema);

module.exports = Spell;
