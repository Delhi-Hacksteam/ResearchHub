const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    createdUser: String,
    title: String,
    body: String,
    volunteers: Number
})

const Event = mongoose.model("event", eventSchema);

module.exports = Event;