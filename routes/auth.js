const router = require('express').Router();

//auth login
router.get('/login', (req, res) => {
	res.render('login');
});

//auth login with google
router.get('/google', (req, res) => {
	//handle with passport
	res.send('login with google');
});

router.get('/facebook', (req, res) => {
	//handle with passport
	res.send('login with facebook');
});

//auth logout
router.get('/logout', (req, res) => {
	//handle with passport
	res.send('logging out');
});

module.exports = router;
