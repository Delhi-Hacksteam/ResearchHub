const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donationSchema = new Schema({
    createdUser: String,
    title: String,
    body: String,
    paymentLink: String,
})

const Donation = mongoose.model("donation", donationSchema);

module.exports = Donation;