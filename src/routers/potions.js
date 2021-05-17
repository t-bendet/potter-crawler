const express = require("express");
const Potion = require("../models/Potion");
const router = new express.Router();

//get all potions

router.get("/potions", async (req, res) => {
  try {
    const potions = await Potion.find({});
    res.status(200).send({ potions });
  } catch (e) {
    res.status(400).send(e);
  }
});

//get a book by name

router.get("/potions/:Name", async (req, res) => {
  const { Name } = req.params;
  console.log(Name);
  const query = {
    Name: { $regex: new RegExp(`^${Name}$`), $options: "i" },
  };

  try {
    const spell = await Potion.find(query);
    res.status(200).send(spell);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
