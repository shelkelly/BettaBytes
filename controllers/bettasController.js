var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var betta = require("../models/fish.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  betta.all(function(data) {
    var hbsObject = {
      bettas: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/bettas", function(req, res) {
  betta.create([
    "name", "gender", "imageurl", "price"
  ], [
    req.body.name, req.body.gender, req.body.imageurl, req.body.price
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/bettas/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  betta.update({
    name: req.body.name,
    gender: req.body.gender,
    imageurl: req.body.imageurl,
    price: req.body.price,
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/bettas/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  betta.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
