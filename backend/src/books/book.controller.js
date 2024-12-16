const Book = require("./bookmodel");

const postABook = async (req, res) => {
    try {
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(201).send({ message: "Book created successfully" });
    } catch (error) {
        console.log("Error creating book", error)
        res.status(500).send({ error: error.message });
    }
}

//get all books
const getAllBooks = async(req, res) => {
    try {
        const books = await Book.find().sort({createdAt: -1});
        res.status(200).send(books);
    } catch (error) {
        console.log("Error fetching book", error)
        res.status(500).send({ error: error.message });
    }

}

//get single book
const getSingleBook = async(req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) return res.status(404).send("Book not found");
        res.status(200).send(book);
    } catch (error) {
        console.log("Error fetching book", error)
        res.status(500).send({ error: error.message });
    }
}

//update book
const UpdateBook = async(req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedBook) {
            res.status(404).send("Book not found");
        }
        res.status(200).send({
            message: "Book updated successfully",
            book: updatedBook
        })
    } catch (error) {
        console.log("Error update book", error)
        res.status(500).send({ error: error.message });
    }
}

//delete a book
const deleteABook = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) return res.status(404).send("Book not found");
        res.status(200).send({
            message: "Book deleted successfully",
            book: deletedBook
        })
    } catch (error) {
        console.log("Error delete book", error)
        res.status(500).send({ error: error.message });
    }
 
}

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    UpdateBook,
    deleteABook
}