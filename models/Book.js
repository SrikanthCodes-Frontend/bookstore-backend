const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  stock: {
    type: Number,
    default: 10 // స్టాక్ default గా 10 పెట్టినాం
  }
});

module.exports = mongoose.model('Book', bookSchema);
