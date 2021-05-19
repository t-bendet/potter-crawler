const express = require("express");
const Spell = require("../models/Spell");
const router = new express.Router();

//get all spells

router.get("/spells", async (req, res) => {
  try {
    const spells = await Spell.find({});
    res.status(200).send({ spells });
  } catch (e) {
    res.status(400).send(e);
  }
});

//get a spell by name

router.get("/spells/:Name", async (req, res) => {
  const { Name } = req.params;
  const query = {
    Name: { $regex: new RegExp(`^${Name}$`), $options: "i" },
  };

  try {
    const spell = await Spell.findOne(query);
    res.status(200).send(spell);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
