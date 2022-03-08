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
      type: String,
      default: Date("DD/MM/YYYY"),
    },
  },
  {
    collection: "diaries",
  }
);
module.exports = mongoose.model("Diary", diarySchema);
