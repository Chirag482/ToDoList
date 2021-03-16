const Work = require("../models/work");

module.exports.profile = function (req, res) {
  if (req.isAuthenticated()) {
    Work.find(
      {
        user: res.locals.user._id,
      },
      function (err, task) {
        if (err) {
          console.log("error in finding tasks");
          return;
        }
        return res.render("profile", {
          title: "profile",
          tasks: task,
        });
      }
    );
  } else {
    return res.redirect("/sign-in");
  }
};

module.exports.destroySession = function (req, res) {
  req.logout();
  return res.redirect("/");
};
