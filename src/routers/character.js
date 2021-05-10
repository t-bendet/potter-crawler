const express = require("express");
const Character = require("../models/Character");
const router = new express.Router();

//get all characters

router.get("/characters", async (req, res) => {
  try {
    const characters = await Character.find({});
    res.status(201).send({ characters });
  } catch (e) {
    res.status(400).send(e);
  }
});

// get a character by name
router.get("/character/by_name/:Name", async (req, res) => {
  const { Name } = req.params;
  try {
    const character = await Character.find({ Name });
    res.status(201).send(character);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get a character by Profession
router.get("/character/by_profession/:Profession", async (req, res) => {
  const { Profession } = req.params;
  console.log(Profession);
  try {
    const character = await Character.find({ Profession });
    res.status(201).send(character);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get a character by family
router.get("/character/by_family/:Family_Groups", async (req, res) => {
  const { Family_Groups } = req.params;
  console.log(Family_Groups);
  try {
    const character = await Character.find({ Family_Groups });
    res.status(201).send(character);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
