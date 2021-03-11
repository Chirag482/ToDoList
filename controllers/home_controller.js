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
