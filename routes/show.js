const router = require("express").Router();
const Donation = require("../models/donation-model");
const Event = require("../models/event-model");

// all donations page
router.get("/donations", (req, res) => {
    Donation.find({}, function (err, donations) {
        res.render("donations", { user: req.user, donations: donations });
    });
})

// fulldonation page
router.get('/fullinfo/:id',  (req, res) => {
    Donation.findById(req.params.id, function (err, donation) {
      res.render('fulldonation', {
        donation: donation,
        user: req.user
      });
    });
  });

// all events page
router.get("/events/:page", (req, res) => {
    var perPage = 9
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

// fullevent page
router.get('/fullevent/:id',  (req, res) => {
    Event.findById(req.params.id, function (err, events) {
      res.render('fullevent', {
        events: events,
        user: req.user
      });
    });
  });

        
       
module.exports = router;