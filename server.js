const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/db");
const menuItemRoutes = require('./routes/menuItemRoutes'); 
const menuCategoryRoutes = require('./routes/menuCategoryRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Hello API IS LIVE");
});

// Routes
app.use('/api/menu-items', menuItemRoutes);
app.use('/api/menu-categories', menuCategoryRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
