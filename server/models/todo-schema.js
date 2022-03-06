const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let todoSchema = new Schema(
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
    collection: "todos",
  }
);
module.exports = mongoose.model("Todo", todoSchema);
