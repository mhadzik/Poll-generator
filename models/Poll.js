const mongoose = require("mongoose");
const { Schema } = mongoose;

const pollSchema = new Schema({
  title: String,
  question: String,
  answer_1: String,
  answer_2: String
});

mongoose.model("polls", pollSchema);
