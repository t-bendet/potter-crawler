const express = require("express");
const Book = require("../models/Book");
const router = new express.Router();

//get all books

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).send({ books });
  } catch (e) {
    res.status(400).send(e);
  }
});

// get a book by number
router.get("/books/by_number/:Book_number", async (req, res) => {
  const { Book_number } = req.params;
  try {
    const book = await Book.findOne({ Book_number });
    console.log(book);
    res.status(200).send(book);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get a book by name

router.get("/books/:Book_Name", async (req, res) => {
  const { Book_Name } = req.params;
  const query = {
    Book_Name: { $regex: new RegExp(`^${Book_Name}$`), $options: "i" },
  };

  try {
    const book = await Book.findOne(query);
    res.status(200).send(book);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
