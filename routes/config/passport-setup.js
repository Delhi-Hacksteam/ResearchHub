const passport = require("passport");
const keys = require("./keys")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../../models/user-model");
const { doesNotMatch } = require("assert");
require('https').globalAgent.options.rejectUnauthorized = false;

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
})

passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
},
    function (accessToken, refreshToken, profile, done) {
        User.findOne({ googleId: profile.id }).then((currentUser) => {
            //user already present
            if (currentUser) {
                console.log("user is " + currentUser);
                return done(null, currentUser);
            } else {
                new User({
                    username: profile.displayName,
                    googleId: profile.id,
                    img: profile.photos.value,
                }).save().then((newUser) => {
                    console.log("new user created! " + newUser);
                    return done(null, newUser);
                })
            }
        })
    }
));