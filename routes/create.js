const router = require("express").Router();
const Donation = require("../models/donation-model");
const Event = require("../models/event-model");
const User = require("../models/user-model");

router.get("/new-donation", (req, res) => {
    res.render("create-donation", { user: req.user });
})

router.post("/new-donation", (req, res) => {
    User.findOne({ _id: req.user._id }).then((user) => {
        if (user) {
            new Donation({
                createdUser: req.user.googleId,
                title: req.body.title,
                body: req.body.message
            }).save().then(newDonation => {
                console.log("new donation created " + newDonation);
                res.redirect("/");
            })
        } else {
            res.redirect("/auth/logout");
        }
    })

})


router.get("/new-event", (req, res) => {
    res.render("create-event", { user: req.user });
})

router.post("/new-event", (req, res) => {
    User.findOne({ _id: req.user._id }).then((user) => {
        if (user) {
            new Event({
                createdUser: req.user.googleId,
                title: req.body.title,
                body: req.body.message
            }).save().then(newEvent => {
                console.log("new event created " + newEvent);
                res.redirect("/show/events/1");
            })
        } else {
            res.redirect("/auth/logout");
        }
    })

})

module.exports = router;