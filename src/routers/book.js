const express = require("express");
const Book = require("../models/Book");
const router = new express.Router();

router.post("/book", async (req, res) => {
  const book = new Book(req.body);
  console.log(book);
  try {
    await book.save();
    res.status(201).send({ book });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
