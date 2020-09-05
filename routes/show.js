const router = require("express").Router();
const Donation = require("../models/donation-model");
const Event = require("../models/event-model");

router.get("/donations", (req, res) => {
    Donation.find({}, function (err, donations) {
        res.render("donations", { user: req.user, donations: donations });
    });
})

router.get("/events", (req, res) => {
    Event.find({}, function (err, events) {
        res.render("events", { user: req.user, events: events });
    });
})

module.exports = router;