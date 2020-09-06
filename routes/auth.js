const router = require('express').Router();
const passport = require("passport");
const authRouter = require('./index');

//auth login
router.get('/login', (req, res) => {
	res.render('login', { user: req.user });
});

//auth login with google
router.get('/google', passport.authenticate("google", {
	scope: ["profile"]
}, { session: true }));

/*
router.get('/facebook', (req, res) => {
	//handle with passport
	res.send('login with facebook');
}); */

//auth logout
router.get('/logout', (req, res) => {
	//handle with passport
	req.logout();
	res.redirect("/");
});

//callback route for google to redirect
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
	res.redirect("/create/new-event")
})

module.exports = router;
