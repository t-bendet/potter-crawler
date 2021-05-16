const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  Book_Name: {
    type: String,
  },
  Author: {
    type: String,
  },
  Dimensions: {
    type: String,
  },
  UK_Edition: {
    type: String,
  },
  US_Edition: {
    type: String,
  },
  Publication: {
    type: String,
  },
  Alternate_Title: {
    type: String,
  },
  Abbreviation: {
    type: String,
  },
  Canonicity: {
    type: String,
  },
  Book_number: {
    type: Number,
  },
  Description: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
