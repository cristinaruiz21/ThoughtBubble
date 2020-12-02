const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Bubbles collection and inserts the bubbles below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/thoughtbubblelist"
);
const bubbleSeed = [
  {
    
    caption: "old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    title: "The Hunger Games",
  },
  {
    
    caption: "old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    title: "The Hunger",
  }


];

db.Bubble
  .remove({})
  .then(() => db.Bubble.collection.insertMany(bubbleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });