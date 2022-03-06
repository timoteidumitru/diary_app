const express = require("express");
const router = express.Router();
let todo = require("../models/todo-schema");

router.route("/create").post((req, res, next) => {
  todo.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
router.route("/").get((req, res, next) => {
  todo.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.json(data);
    }
  });
});

module.exports = router;
