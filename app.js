const express = require('express');
var app = express();
const cookieSession = require("cookie-session");
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const passportSetup = require("./routes/config/passport-setup");
const mongoose = require("mongoose");
const PORT = 3000;
const keys = require("./routes/config/keys")
const passport = require("passport");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// attach and use public folder with correct url
app.use('/public', express.static(path.join(__dirname, 'public')));

//cookie settings
app.use(cookieSession({
	maxAge: 24 * 60 * 60 * 1000,
	keys: [keys.session.cookieKey]
}))

//init passport
app.use(passport.initialize());
app.use(passport.session());

//mongoose setup
const url = 'mongodb://localhost:27017/research-hub'
mongoose.connect(url, { useNewUrlParser: true })

//check if server connected
const db = mongoose.connection
db.once('open', _ => {
	console.log('Database connected:', url)
})

db.on('error', err => {
	console.error('connection error:', err)
})

//routes
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const createRouter = require("./routes/create");
const showRouter = require("./routes/show")

// use route files
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use("/create", createRouter);
app.use("/show", showRouter);

//connect to port
app.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}`);
});

module.exports = app;
