const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Use the correct books route
const bookRoutes = require("./routes/bookRoutes");
app.use("/", bookRoutes);

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(5000, () => console.log("✅ Server started on port 5000"));
  })
  .catch(err => console.error("❌ MongoDB connection error:", err));
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/auth', authRoutes);
app.use('/', orderRoutes);
