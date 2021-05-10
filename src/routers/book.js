const express = require("express");
const Book = require("../models/Book");
const router = new express.Router();

//get all books

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(201).send({ books });
  } catch (e) {
    res.status(400).send(e);
  }
});

// get a book by number
router.get("/book/by_number/:Book_number", async (req, res) => {
  const { Book_number } = req.params;
  try {
    const book = await Book.find({ Book_number });
    res.status(201).send(book);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get a book by name

router.get("/book/by_name/:Book_Name", async (req, res) => {
  const { Book_Name } = req.params;
  try {
    const book = await Book.find({ Book_Name });
    res.status(201).send(book);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
