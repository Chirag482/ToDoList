const User = require("../models/user");
const db = require("../models/user");

module.exports.profile = function (req, res) {
  if (req.isAuthenticated()) {
    res.render("profile", {
      title: "profile",
    });
  }
  res.redirect("/sign-in");
};

module.exports.destroySession = function (req, res) {
  req.logout();
  return res.redirect("/");
};
