var express = require('express');
var router = express.Router();
var authCheck = require("./auth-check")

var bodyParser = require('body-parser');
const User = require('../models/user-model');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
let Data = require('../models/petitions');
var upload = require('../utils/upload');

// GET home page
router.get('/', function (req, res, next) {
    res.render("index",  { user: req.user });
})
// get petiton page
router.get('/petition', function (req, res) {
    res.render('petition', { user: req.user });
})
// upload page 
router.get('/upload', ensureAuthenticated, function (req, res) {
  res.render('upload', { user: req.session });
});

// upload post  
router.post('/upload', upload.single('myfile'), (req, res) => {
  let data = new Data({
    title: req.body.title,
    content: req.body.content,
    email:  req.body.email,
    name: req.file.filename
  });
  data.save(function (err) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('data', req.body);
      console.log('data added');
      res.redirect('/posts/1');
    }
  });
  console.log(req.body);
  console.log('Name ', req.file.filename);
});

// Access Control
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}

/*
// Landing page
router.get('/detail', authCheck, (req, res) => {
    res.redirect("/index",);
    // res.send("you are logged in as " + req.user.username);
}) */

router.post('/contact', (req, res) => {
    res.render("contact", { user: req.user });
}
)

module.exports = router;
