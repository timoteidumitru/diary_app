const express = require("express");
const router = express.Router();
let diary = require("../models/diary-schema");

router.route("/diary/create").post((req, res, next) => {
  diary.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
router.route("/diaries").get((req, res, next) => {
  diary.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      return res.json(data);
    }
  });
});

module.exports = router;
