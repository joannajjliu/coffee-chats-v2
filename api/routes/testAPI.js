var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

router.get("/people", (req, res) => {
  res.readFile(__dirname + "../data/3people.csv"); //display content in pairs.html
});

module.exports = router;
