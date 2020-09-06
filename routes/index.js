var express = require('express');
var router = express.Router();
var authCheck = require("./auth-check")

var bodyParser = require('body-parser');
const User = require('../models/user-model');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
let Data = require('../models/petitions');
var upload = require('../utils/upload');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();


// GET home page
router.get('/', function (req, res, next) {
    res.render("index",  { user: req.user });
})
// get petiton page
router.get('/petition', function (req, res) {
    res.render('petition', { user: req.user });
})

/*
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
} */

/*
// Landing page
router.get('/detail', authCheck, (req, res) => {
    res.redirect("/index",);
    // res.send("you are logged in as " + req.user.username);
}) */


// contact page 
router.get('/contact', function (req, res) {
    res.render('contact', { user: req.user });
  });

//contact form data
router.post('/contact', function (req, res) {
    const output = `
      <p>You have a new Query.</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.mailing_email, // generated ethereal user
        pass: process.env.mailing_email_password  // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
      from: `"Team-we5" <${process.env.mailing_email}>`, // sender address
      to: process.env.recipient_email, // list of receivers
      subject: 'Contact Details', // Subject line
      text: 'Contact Details', // plain text body
      html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      } else {
  
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        res.redirect('/');
  
      }
    });
  })
module.exports = router;
