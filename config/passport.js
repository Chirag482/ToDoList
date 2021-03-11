const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      //find a user and establish a identity
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          console.log("error in finding user in database while signing in");
          return done(err);
        }
        if (!user || user.password != password) {
          console.log("Invalid username or password");
          return done(null, false);
        }
        return done(null, user);
      });
    }
  )
);

//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
  return done(null, user.id);
});

//deserializing the user from the cookies
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
      console.log("erroe in finding user while deserializing");
      return done(err);
    }
    return done(null, user);
  });
});

//to show the profile of current user
//1)check if the user is authenticated
passport.checkAuthenticate = function (req, res, done) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/home");
};

passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals = req.user;
  }
  next();
};
module.exports = passport;
