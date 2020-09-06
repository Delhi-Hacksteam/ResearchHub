const router = require("express").Router();
const Donation = require("../models/donation-model");
const Event = require("../models/event-model");

router.get("/donations", (req, res) => {
    Donation.find({}, function (err, donations) {
        res.render("donations", { user: req.user, donations: donations });
    });
})

router.get("/events/:page", (req, res) => {
    var perPage = 3
    var page = req.params.page || 1
  
    Event.find({})
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec(function (err, events) {
        Event.count().exec(function (err, count) {
        if (err) return next(err)
        res.render('events', {
          user: req.user,
          events: events, 
          current: page,
          pages: Math.ceil(count / perPage)
        })
      })
    })
})
        
       
module.exports = router;