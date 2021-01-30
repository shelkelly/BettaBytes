const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fishSchema = new Schema({
    id: String,
    title: { type: String, required: true },
    color: { type: String, required: true },
    gender: String,
    date: { type: Date, default: Date.now }
});

const Fish = mongoose.model("Fish", fishSchema);

module.exports = Fish;


// OR

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function(cb) {
    orm.all("bettas", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("bettas", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("bettas", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("bettas", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (bettasController.js).
module.exports = cat;
