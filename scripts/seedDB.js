const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Bubbles collection and inserts the bubbles below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/thoughtbubble"
);