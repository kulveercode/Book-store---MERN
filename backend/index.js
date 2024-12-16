const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()
const mongoose = require("mongoose");
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true,
}))

// routes
const  bookRoutes = require('./src/books/book.route')
app.use('/api/books', bookRoutes)

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get("/", (req, res) => {
    res.send("Hello World by - nodejs");
  });
}
main().then(() => console.log("mongooDB connected successfully")).catch((err) => console.log(err));

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
