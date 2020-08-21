const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//const { MongoClient } = require('mongodb');
//const DATABASE_CONFIG = require('../../database/DATABASE_CONFIG');
const debug = require('debug')('app:google.strategy');

function googleStrategy(){ 
  passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }));
}

module.exports = googleStrategy;