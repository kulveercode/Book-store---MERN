const express = require('express');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const router = express.Router();

//frontend -> backend -> controller => bookSchema => database => send to server => back to frontend.

//post book
router.post("/create-book", postABook)

//get all books
router.get("/", getAllBooks)

//single book
router.get("/:id", getSingleBook)

//update a book
router.put("/edit/:id", UpdateBook)

//delete a book
router.delete("/:id", deleteABook)

module.exports = router;