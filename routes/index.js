var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

<<<<<<< HEAD
// /* GET home page. */
router.get('/', function (req, res, next) {
    res.render("index");
=======
// GET home page. 
router.get('/', function (req, res) {
    res.send('start project');
>>>>>>> 11758fdfcc38967bd7148e8d00a57ba5b8525323
})

// get registration page
router.get('/register', function (req, res) {
    res.render('register');
})

// get login page
router.get('/login', function (req, res) {
    res.render('login');
})

// get petition page
router.get('/petition', function (req, res, next) {
    res.render('petition');
})

module.exports = router;
