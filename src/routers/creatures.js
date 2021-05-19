const express = require("express");
const Creature = require("../models/Creature");
const router = new express.Router();

//get all creatures

router.get("/creatures", async (req, res) => {
  try {
    const creatures = await Creature.find({});
    res.status(200).send({ creatures });
  } catch (e) {
    res.status(400).send(e);
  }
});

//get a creature by name

router.get("/creatures/:Name", async (req, res) => {
  const { Name } = req.params;
  const query = {
    Name: { $regex: new RegExp(`^${Name}$`), $options: "i" },
  };

  try {
    const spell = await Creature.findOne(query);
    res.status(200).send(spell);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
