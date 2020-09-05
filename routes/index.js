var express = require('express');
var router = express.Router();
var authCheck = require("./auth-check")

var bodyParser = require('body-parser');
const User = require('../models/user-model');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

<<<<<<< HEAD

=======
// <<<<<<< HEAD
// /* GET home page. */
router.get('/', function (req, res, next) {
    res.render("index");
})
// get registration page
router.get('/register', function (req, res) {
    res.render('register');
})
>>>>>>> a86f49dc4e00a516ff1ffe13d922ca8682e6ac57

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
