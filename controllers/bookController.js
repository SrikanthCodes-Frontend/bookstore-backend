const Book = require("../models/Book");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addBook = async (req, res) => {
  const { title, author, price } = req.body;
  try {
    const newBook = new Book({ title, author, price });
    await newBook.save();
    res.status(201).json({ message: "Book added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
