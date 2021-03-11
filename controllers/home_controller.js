const User = require("../models/user");
const db = require("../models/user");
module.exports.home = function (req, res) {
  return res.render("home", {
    title: "ToDo-List",
  });
};

module.exports.signUp = function (req, res) {
  return res.render("sign_up", {
    title: "Sign-Up",
  });
};

module.exports.signIn = function (req, res) {
  return res.render("sign_in", {
    title: "Sign-In",
  });
};

module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    console.log("Passwords does not matched");
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finfding user in database");
      return;
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating user in databse");
          return;
        }
        return res.redirect("/profile");
      });
    } else {
      console.log("Email used before try with new email id");
      return res.redirect("/sign-up");
    }
  });
};
