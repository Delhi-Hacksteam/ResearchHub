const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const session = require('express-session');

var app = express();
var indexRouter = require('./routes/index');

// body parser
app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// attach and use public folder with correct url
app.use('/public',express.static(path.join(__dirname, 'public')));

// use route files
app.use('/', indexRouter);


//connect to port
app.listen(3000, () => {
    console.log(`Listening on PORT 3000`);
  });

module.exports = app;