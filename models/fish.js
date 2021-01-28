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
