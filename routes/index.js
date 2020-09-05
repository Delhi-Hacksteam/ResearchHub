var express = require('express');
var router = express.Router();
var authCheck = require("./auth-check")

var bodyParser = require('body-parser');
const User = require('../models/user-model');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// GET home page
router.get('/', function (req, res, next) {
    res.render("index");
})
// get registration page
router.get('/register', function (req, res) {
    res.render('register');
})

// Landing page
router.get('/', authCheck, (req, res) => {
    res.redirect("/index",);
    // res.send("you are logged in as " + req.user.username);
})

router.get('/index', (req, res) => {
    res.render("index", { user: req.user });
}
)

module.exports = router;
