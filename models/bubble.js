const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bubbleSchema = new Schema({
  title: { type: String, required: true },
  caption: { type: String, required: true },
  date: { type: Date, default: Date.now },
  category : {type: String},
  url: {type: String},


 author :{type:String, required : true}
});

const Bubble = mongoose.model("Bubble", bubbleSchema);

module.exports = Bubble;