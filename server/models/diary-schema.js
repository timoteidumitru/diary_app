const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let diarySchema = new Schema(
  {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  {
    collection: "diaries",
  }
);
module.exports = mongoose.model("Diary", diarySchema);
