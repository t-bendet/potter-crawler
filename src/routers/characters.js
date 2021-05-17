const express = require("express");
const Character = require("../models/Character");
const router = new express.Router();

//get all characters

router.get("/characters", async (req, res) => {
  try {
    const characters = await Character.find({});
    res.status(200).send({ characters });
  } catch (e) {
    res.status(400).send(e);
  }
});
// get a character by name
router.get("/characters/:Name", async (req, res) => {
  const { Name } = req.params;
  const query = { Name: { $regex: new RegExp(`^${Name}$`), $options: "i" } };

  try {
    const character = await Character.find(query);
    res.status(200).send(character);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get a character by Profession
router.get("/characters/by_profession/:Profession", async (req, res) => {
  const { Profession } = req.params;
  const query = {
    Profession: { $regex: new RegExp(`^${Profession}$`), $options: "i" },
  };
  try {
    const character = await Character.find(query);
    res.status(200).send(character);
  } catch (e) {
    res.status(400).send(e);
  }
});

// get a character by family
router.get("/characters/by_family/:Family_Groups", async (req, res) => {
  const { Family_Groups } = req.params;
  const query = {
    Family_Groups: { $regex: new RegExp(`^${Family_Groups}$`), $options: "i" },
  };

  try {
    const character = await Character.find(query);
    res.status(200).send(character);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
